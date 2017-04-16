package valandur.webapi.json;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.flowpowered.math.vector.Vector3d;
import com.flowpowered.math.vector.Vector3i;
import org.spongepowered.api.block.BlockState;
import org.spongepowered.api.block.tileentity.TileEntity;
import org.spongepowered.api.data.DataHolder;
import org.spongepowered.api.data.manipulator.mutable.DyeableData;
import org.spongepowered.api.data.manipulator.mutable.PotionEffectData;
import org.spongepowered.api.data.manipulator.mutable.RotationalData;
import org.spongepowered.api.data.manipulator.mutable.block.DirectionalData;
import org.spongepowered.api.data.manipulator.mutable.entity.*;
import org.spongepowered.api.data.manipulator.mutable.item.DurabilityData;
import org.spongepowered.api.data.manipulator.mutable.item.SpawnableData;
import org.spongepowered.api.data.manipulator.mutable.tileentity.SignData;
import org.spongepowered.api.data.type.Career;
import org.spongepowered.api.effect.potion.PotionEffect;
import org.spongepowered.api.entity.Entity;
import org.spongepowered.api.entity.living.player.Player;
import org.spongepowered.api.entity.living.player.gamemode.GameMode;
import org.spongepowered.api.event.Event;
import org.spongepowered.api.event.cause.Cause;
import org.spongepowered.api.item.inventory.Inventory;
import org.spongepowered.api.item.inventory.ItemStack;
import org.spongepowered.api.item.inventory.ItemStackSnapshot;
import org.spongepowered.api.item.merchant.TradeOffer;
import org.spongepowered.api.network.PlayerConnection;
import org.spongepowered.api.profile.GameProfile;
import org.spongepowered.api.statistic.achievement.Achievement;
import org.spongepowered.api.util.ban.Ban;
import org.spongepowered.api.world.*;
import org.spongepowered.api.world.extent.BlockVolume;
import valandur.webapi.json.serializers.block.*;
import valandur.webapi.json.serializers.entity.*;
import valandur.webapi.json.serializers.entity.TradeOfferSerializer;
import valandur.webapi.json.serializers.event.CauseSerializer;
import valandur.webapi.json.serializers.event.EventSerializer;
import valandur.webapi.json.serializers.general.*;
import valandur.webapi.json.serializers.item.*;
import valandur.webapi.json.serializers.player.*;
import valandur.webapi.json.serializers.tileentity.SignDataSerializer;
import valandur.webapi.json.serializers.tileentity.TileEntitySerializer;
import valandur.webapi.json.serializers.world.*;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.lang.reflect.Parameter;
import java.util.*;

public class JsonConverter {

    private static Map<Class, JsonSerializer> serializers;
    private static Map<String, Class> supportedData;

    static {
        initSerialiers();
    }
    private static void initSerialiers() {
        serializers = new HashMap<>();

        // General
        serializers.put(Vector3d.class, new Vector3dSerializer());
        serializers.put(Vector3i.class, new Vector3iSerializer());
        serializers.put(VelocityData.class, new VelocityDataSerializer());

        // Block
        serializers.put(BlockVolume.class, new BlockVolumeSerializer());
        serializers.put(BlockState.class, new BlockStateSerializer());

        // Entity
        serializers.put(CareerData.class, new CareerDataSerializer());
        serializers.put(Career.class, new CareerSerializer());
        serializers.put(DyeableData.class, new DyeableDataSerializer());
        serializers.put(Entity.class, new EntitySerializer());
        serializers.put(FoodData.class, new FoodDataSerializer());
        serializers.put(HealthData.class, new HealthDataSerializer());
        serializers.put(ShearedData.class, new ShearedDataSerializer());
        serializers.put(TameableData.class, new TameableDataSerializer());
        serializers.put(TradeOfferData.class, new TradeOfferDataSerializer());
        serializers.put(TradeOffer.class, new TradeOfferSerializer());

        // Event
        serializers.put(Cause.class, new CauseSerializer());
        serializers.put(Event.class, new EventSerializer());

        // Item
        serializers.put(DurabilityData.class, new DurabilityDataSerializer());
        serializers.put(Inventory.class, new InventorySerializer());
        serializers.put(ItemStack.class, new ItemStackSerializer());
        serializers.put(ItemStackSnapshot.class, new ItemStackSnapshotSerializer());
        serializers.put(PotionEffectData.class, new PotionEffectDataSerializer());
        serializers.put(PotionEffect.class, new PotionEffectSerializer());
        serializers.put(SpawnableData.class, new SpawnableDataSerializer());

        // Player
        serializers.put(AchievementData.class, new AchievementDataSerializer());
        serializers.put(Achievement.class, new AchievementSerializer());
        serializers.put(Ban.Profile.class, new BanSerializer());
        serializers.put(ExperienceHolderData.class, new ExperienceHolderDataSerializer());
        serializers.put(GameModeData.class, new GameModeDataSerializer());
        serializers.put(GameMode.class, new GameModeSerializer());
        serializers.put(GameProfile.class, new GameProfileSerializer());
        serializers.put(JoinData.class, new JoinDataSerializer());
        serializers.put(PlayerConnection.class, new PlayerConnectionSerializer());
        serializers.put(Player.class, new PlayerSerializer());
        serializers.put(StatisticData.class, new StatisticDataSerializer());

        // Tile-Entity
        serializers.put(SignData.class, new SignDataSerializer());
        serializers.put(TileEntity.class, new TileEntitySerializer());

        // World
        serializers.put(Dimension.class, new DimensionSerializer());
        serializers.put(DimensionType.class, new DimensionTypeSerializer());
        serializers.put(GeneratorType.class, new GeneratorTypeSerializer());
        serializers.put(World.class, new WorldSerializer());
        serializers.put(WorldBorder.class, new WorldBorderSerializer());



        // Data
        supportedData = new HashMap<>();
        supportedData.put("achievements", AchievementData.class);
        supportedData.put("career", CareerData.class);
        supportedData.put("direction", DirectionalData.class);
        supportedData.put("durability", DurabilityData.class);
        supportedData.put("dye", DyeableData.class);
        supportedData.put("experience", ExperienceHolderData.class);
        supportedData.put("food", FoodData.class);
        supportedData.put("gameMode", GameModeData.class);
        supportedData.put("health", HealthData.class);
        supportedData.put("joined", JoinData.class);
        supportedData.put("potionEffects", PotionEffectData.class);
        supportedData.put("rotation", RotationalData.class);
        supportedData.put("sheared", ShearedData.class);
        supportedData.put("sign", SignData.class);
        supportedData.put("spawn", SpawnableData.class);
        supportedData.put("statistics", StatisticData.class);
        supportedData.put("tameable", TameableData.class);
        supportedData.put("trades", TradeOfferData.class);
        supportedData.put("velocity", VelocityData.class);
    }

    /**
     * Converts an object directly to a json string. EXCLUDES details.
     * @param obj The object to convert to json.
     * @return The json string representation of the object.
     */
    public static String toString(Object obj) {
        return toString(obj, false);
    }

    /**
     * Converts an object directly to a json string. Includes details if specified.
     * @param obj The object to convert to json.
     * @param details False if only marked properties/methods should be included, true otherwise.
     * @return The json string representation of the object.
     */
    public static String toString(Object obj, boolean details) {
        ObjectMapper om = getDefaultObjectMapper();

        if (!details) {
            om.disable(MapperFeature.AUTO_DETECT_CREATORS, MapperFeature.AUTO_DETECT_FIELDS, MapperFeature.AUTO_DETECT_GETTERS, MapperFeature.AUTO_DETECT_IS_GETTERS);
        }

        try {
            return om.writeValueAsString(obj);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{\"error\":\"" + e.getMessage() + "\"}";
        }
    }

    /**
     * Converts an object to json using the default object mapper. EXCLUDES details.
     * @param obj The object to convert to json.
     * @return The json representation of the object.
     */
    public static JsonNode toJson(Object obj) {
        return toJson(obj, false);
    }

    /**
     * Converts an object to json using the default object mapper. Includes details if specified.
     * @param obj The object to convert to json
     * @param details False if only marked properties/methods should be included, true otherwise.
     * @return The json representation of the object.
     */
    public static JsonNode toJson(Object obj, boolean details) {
        ObjectMapper om = getDefaultObjectMapper();
        if (!details) {
            om.disable(MapperFeature.AUTO_DETECT_CREATORS, MapperFeature.AUTO_DETECT_FIELDS, MapperFeature.AUTO_DETECT_GETTERS, MapperFeature.AUTO_DETECT_IS_GETTERS);
            om.setAnnotationIntrospector(new DisableAnyGetterInspector());
        }
        return om.valueToTree(obj);
    }

    /**
     * Converts a DataHolder to a json object. EXCLUDES details.
     * @param holder The DataHolder to convert to json.
     * @return The json representation of the DataHolder.
     */
    public static Map<String, JsonNode> dataHolderToJson(DataHolder holder) {
        Map<String, JsonNode> nodes = new HashMap<>();

        for (Map.Entry<String, Class> entry : supportedData.entrySet()) {
            if (!holder.supports(entry.getValue()))
                continue;

            Optional<?> m = holder.get(entry.getValue());

            if (!m.isPresent())
                continue;

            nodes.put(entry.getKey(), JsonConverter.toJson(m.get()));
        }

        return nodes;
    }

    /**
     * Get the default object mapper which contains some custom serializers and doesn't fail on empty beans.
     * .@return The default object mapper
     */
    private static ObjectMapper getDefaultObjectMapper() {
        ObjectMapper om = new ObjectMapper();
        om.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);

        for (Map.Entry<Class, JsonSerializer> entry : serializers.entrySet()) {
            addSerializer(om, entry.getKey(), entry.getValue());
        }

        return om;
    }
    private static void addSerializer(ObjectMapper mapper, Class clazz, JsonSerializer serializer) {
        SimpleModule mod = new SimpleModule();
        mod.addSerializer(clazz, serializer);
        mapper.registerModule(mod);
    }


    /**
     * Converts a class structure to json. This includes all the fields and methods of the class
     * @param c The class for which to get the json representation.
     * @return A JsonNode representing the class.
     */
    public static JsonNode classToJson(Class c) {
        ObjectNode json = JsonNodeFactory.instance.objectNode();

        json.put("name", c.getName());
        json.put("parent", c.getSuperclass().getName());

        ObjectNode jsonFields = JsonNodeFactory.instance.objectNode();
        Field[] fs = getAllFields(c);
        for (Field f : fs) {
            ObjectNode jsonField = JsonNodeFactory.instance.objectNode();

            f.setAccessible(true);

            jsonField.put("type", f.getType().getName());

            ArrayNode arr = JsonNodeFactory.instance.arrayNode();
            int mod = f.getModifiers();
            if (Modifier.isAbstract(mod)) arr.add("abstract");
            if (Modifier.isFinal(mod)) arr.add("final");
            if (Modifier.isInterface(mod)) arr.add("interface");
            if (Modifier.isNative(mod)) arr.add("native");
            if (Modifier.isPrivate(mod)) arr.add("private");
            if (Modifier.isProtected(mod)) arr.add("protected");
            if (Modifier.isPublic(mod)) arr.add("public");
            if (Modifier.isStatic(mod)) arr.add("static");
            if (Modifier.isStrict(mod)) arr.add("strict");
            if (Modifier.isSynchronized(mod)) arr.add("synchronized");
            if (Modifier.isTransient(mod)) arr.add("transient");
            if (Modifier.isVolatile(mod)) arr.add("volatile");
            jsonField.set("modifiers", arr);

            if (f.getDeclaringClass() != c) {
                jsonField.put("from", f.getDeclaringClass().getName());
            }

            jsonFields.set(f.getName(), jsonField);
        }
        json.set("fields", jsonFields);

        ObjectNode jsonMethods = JsonNodeFactory.instance.objectNode();
        Method[] ms = getAllMethods(c);
        for (Method m : ms) {
            ObjectNode jsonMethod = JsonNodeFactory.instance.objectNode();

            ArrayNode arr = JsonNodeFactory.instance.arrayNode();
            int mod = m.getModifiers();
            if (Modifier.isAbstract(mod)) arr.add("abstract");
            if (Modifier.isFinal(mod)) arr.add("final");
            if (Modifier.isInterface(mod)) arr.add("interface");
            if (Modifier.isNative(mod)) arr.add("native");
            if (Modifier.isPrivate(mod)) arr.add("private");
            if (Modifier.isProtected(mod)) arr.add("protected");
            if (Modifier.isPublic(mod)) arr.add("public");
            if (Modifier.isStatic(mod)) arr.add("static");
            if (Modifier.isStrict(mod)) arr.add("strict");
            if (Modifier.isSynchronized(mod)) arr.add("synchronized");
            if (Modifier.isTransient(mod)) arr.add("transient");
            if (Modifier.isVolatile(mod)) arr.add("volatile");
            jsonMethod.set("modifiers", arr);

            ArrayNode arr2 = JsonNodeFactory.instance.arrayNode();
            for (Parameter p : m.getParameters()) {
                arr2.add(p.getType().getName());
            }
            jsonMethod.set("params", arr2);

            jsonMethod.put("return", m.getReturnType().getName());

            if (m.getDeclaringClass() != c) {
                jsonMethod.put("from", m.getDeclaringClass().getName());
            }

            jsonMethods.set(m.getName(), jsonMethod);
        }
        json.set("methods", jsonMethods);

        return json;
    }

    /**
     * Returns all NON MINECRAFT NATIVE fields from a class and it's ancestors. (The fields that don't start with "field_")
     * @param c The class for which to get the fields.
     * @return The array of fields of that class and all inherited fields.
     */
    public static Field[] getAllFields(Class c) {
        List<Field> fs = new LinkedList<>();
        while (c != null) {
            fs.addAll(Arrays.asList(c.getDeclaredFields()));
            c = c.getSuperclass();
        }
        return fs.stream().filter(f -> !f.getName().startsWith("field_")).toArray(Field[]::new);
    }

    /**
     * Returns all NON MINECRAFT NATIVE methods from a class and it's ancestors. (The methods that don't start with "func_")
     * @param c The class for which to get the methods
     * @return The array of methods of that class and all inherited methods.
     */
    public static Method[] getAllMethods(Class c) {
        List<Method> ms = new LinkedList<>();
        while (c != null) {
            ms.addAll(Arrays.asList(c.getDeclaredMethods()));
            c = c.getSuperclass();
        }
        return ms.stream().filter(m -> !m.getName().startsWith("func_")).toArray(Method[]::new);
    }
}
