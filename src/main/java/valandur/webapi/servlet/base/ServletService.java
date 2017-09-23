package valandur.webapi.servlet.base;

import org.slf4j.Logger;
import org.spongepowered.api.util.Tuple;
import valandur.webapi.WebAPI;
import valandur.webapi.api.annotation.WebAPIEndpoint;
import valandur.webapi.api.annotation.WebAPIEndpoints;
import valandur.webapi.api.annotation.WebAPIServlet;
import valandur.webapi.api.servlet.IServletData;
import valandur.webapi.api.servlet.IServletService;
import valandur.webapi.api.servlet.WebAPIBaseServlet;
import valandur.webapi.util.Util;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.*;
import java.util.stream.Collectors;

public class ServletService implements IServletService {

    private Map<String, Class<? extends WebAPIBaseServlet>> servletClasses = new HashMap<>();
    private Map<String, WebAPIBaseServlet> servlets = new HashMap<>();
    private Map<WebAPIBaseServlet, List<Tuple<WebAPIEndpoint, Method>>> servletMethods = new HashMap<>();


    public void init() {
        Logger logger = WebAPI.getLogger();

        servlets.clear();

        logger.info("Initializing servlets...");
        servletClasses.values().forEach(this::initServlet);
        WebAPI.getExtensionService().loadPlugins("servlets", WebAPIBaseServlet.class, this::initServlet);
    }
    private void initServlet(Class<? extends WebAPIBaseServlet> servletClass) {
        Logger logger = WebAPI.getLogger();

        String basePath = servletClass.getAnnotation(WebAPIServlet.class).basePath();
        logger.info("  " + basePath + " -> " + servletClass.getName());

        if (basePath.contains("/")) {
            logger.error("  Base path is not allowed to have slashes");
            return;
        }

        // Create a new instance
        try {
            WebAPIBaseServlet serv = servletClass.newInstance();
            servlets.put(basePath, serv);

            // Get all methods that are correctly annotated
            List<Tuple<WebAPIEndpoint[], Method>> methods = Arrays.stream(servletClass.getMethods())
                    .filter(m -> m.isAnnotationPresent(WebAPIEndpoint.class) ||
                            m.isAnnotationPresent(WebAPIEndpoints.class))
                    .map(m -> new Tuple<>(m.getAnnotationsByType(WebAPIEndpoint.class), m))
                    .collect(Collectors.toList());
            List<Tuple<WebAPIEndpoint, Method>> newMethods = new ArrayList<>();

            for (Tuple<WebAPIEndpoint[], Method> tuple : methods) {
                WebAPIEndpoint[] routes = tuple.getFirst();
                Method method = tuple.getSecond();

                if (method.getParameterTypes()[0] != IServletData.class &&
                        method.getParameterTypes()[0] != ServletData.class) {
                    logger.error("    Method " + method.getName() + " first parameter is not of type IServletData");
                    continue;
                }

                method.setAccessible(true);
                for (WebAPIEndpoint route : routes) {
                    logger.debug("    [" + route.method() + "] " + route.path() + " -> " + method.getName());
                    newMethods.add(new Tuple<>(route, method));
                }
            }

            servletMethods.put(serv, newMethods);
        } catch (InstantiationException | IllegalAccessException e) {
            logger.error("  -> Could not init servlet " + servletClass.getName() + ": " + e.getMessage());
            if (WebAPI.reportErrors()) WebAPI.sentryCapture(e);
        }
    }

    public Optional<MatchedRoute> getMethod(String verb, String path) {
        // First get the correct servlet
        List<String> pathParts = Util.getPathParts(path);
        if (pathParts.size() == 0) {
            return Optional.empty();
        }

        WebAPIBaseServlet servlet = servlets.get(pathParts.get(0));
        if (servlet == null) {
            return Optional.empty();
        }

        // Then get the methods for that servlet
        List<Tuple<WebAPIEndpoint, Method>> methods = servletMethods.get(servlet);

        // Find the most suitable method according to the path
        LinkedHashMap<String, String> bestMatches = null;
        Tuple<WebAPIEndpoint, Method> bestTuple = null;

        pathParts = pathParts.subList(1, pathParts.size());
        for (Tuple<WebAPIEndpoint, Method> tuple : methods) {
            WebAPIEndpoint spec = tuple.getFirst();
            List<String> specPathParts = Util.getPathParts(spec.path());

            // Skip methods that don't match the verb or route
            if (!spec.method().asString().equalsIgnoreCase(verb) || specPathParts.size() != pathParts.size())
                continue;

            boolean doesMatch = true;
            LinkedHashMap<String, String> matches = new LinkedHashMap<>();
            for (int i = 0; i < specPathParts.size(); i++) {
                if (!specPathParts.get(i).startsWith(":")) {
                    if (!specPathParts.get(i).equalsIgnoreCase(pathParts.get(i))) {
                        doesMatch = false;
                        break;
                    }
                } else {
                    String param = specPathParts.get(i).substring(1);
                    matches.put(param, pathParts.get(i));
                }
            }

            if (!doesMatch)
                continue;

            if (bestMatches == null || matches.size() < bestMatches.size()) {
                bestMatches = matches;
                bestTuple = tuple;
            }
        }

        if (bestTuple == null) {
            return Optional.empty();
        }

        return Optional.of(new MatchedRoute(servlet, bestTuple.getFirst(), bestTuple.getSecond(), bestMatches));
    }

    public void registerServlet(Class<? extends WebAPIBaseServlet> servlet) {
        Logger logger = WebAPI.getLogger();

        if (!servlet.isAnnotationPresent(WebAPIServlet.class)) {
            logger.error("Servlet " + servlet.getName() + " is missing @WebAPIServlet annotation");
            return;
        }

        WebAPIServlet info = servlet.getAnnotation(WebAPIServlet.class);
        String basePath = info.basePath();
        if (basePath.endsWith("/"))
            basePath = basePath.substring(0, basePath.length() - 1);
        if (!basePath.startsWith("/"))
            basePath = "/" + basePath;

        if (servlets.containsKey(info.basePath())) {
            logger.error("Servlet " + servlet.getName() + " is trying to register base path " + basePath
                    + " which is already registered to " + servlets.get(info.basePath()));
            return;
        }

        try {
            Method m = servlet.getMethod("onRegister");
            m.invoke(null);
        } catch (NoSuchMethodException ignored) {
        } catch (IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
            if (WebAPI.reportErrors()) WebAPI.sentryCapture(e);
        }

        servletClasses.put(info.basePath(), servlet);
    }

    @Override
    public Map<String, Class<? extends WebAPIBaseServlet>> getLoadedServlets() {
        return servlets.entrySet().stream().collect(Collectors.toMap(Map.Entry::getKey, e -> e.getValue().getClass()));
    }
}
