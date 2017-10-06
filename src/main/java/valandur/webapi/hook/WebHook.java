package valandur.webapi.hook;

import valandur.webapi.api.hook.IWebHook;
import valandur.webapi.api.hook.BaseWebHookFilter;
import valandur.webapi.api.hook.WebHookHeader;
import valandur.webapi.api.permission.IPermissionService;
import valandur.webapi.api.util.TreeNode;

import java.util.List;

public class WebHook implements IWebHook {

    private String address;
    public String getAddress() {
        return address;
    }

    private boolean enabled;
    public boolean isEnabled() {
        return enabled;
    }


    private WebHookMethod method;
    public WebHookMethod getMethod() { return method; }

    private WebHookDataType dataType;
    public WebHookDataType getDataType() {
        return dataType;
    }
    public String getDataTypeHeader() {
        return "application/" + (dataType == WebHookDataType.JSON ? "json" : "x-www-form-urlencoded");
    }

    private List<WebHookHeader> headers;
    public List<WebHookHeader> getHeaders() { return headers; }

    private boolean details;
    public boolean includeDetails() {
        return details;
    }

    private TreeNode<String, Boolean> permissions = IPermissionService.emptyNode();
    public TreeNode<String, Boolean> getPermissions() {
        return permissions;
    }

    private BaseWebHookFilter filter;
    public BaseWebHookFilter getFilter() {
        return filter;
    }
    public void setFilter(BaseWebHookFilter filter) {
        this.filter = filter;
    }


    public WebHook(String address, boolean enabled, WebHookMethod method, WebHookDataType dataType,
                   List<WebHookHeader> headers, boolean details, TreeNode<String, Boolean> permissions) {
        this.address = address;
        this.enabled = enabled;
        this.method = method;
        this.dataType = dataType;
        this.headers = headers;
        this.details = details;
        this.permissions = permissions;
    }
}
