webpackJsonp([9],{1017:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(69)),i=n(70),a=n(59),s=n(33),c=n(1030),l=n(89),p=n(145),u=n(1025),d=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=Object(u.a)("nucleus/kit","name"),f=function(e){function t(t){var n=e.call(this,t)||this;return n.state={newKitCmd:"",newItemType:"",newItemAmount:1},n.renderCommands=n.renderCommands.bind(n),n.renderStacks=n.renderStacks.bind(n),n.handleChange=l.e.bind(n,null),n}return d(t,e),t.prototype.componentDidMount=function(){this.props.requestCatalog(p.a.Item)},t.prototype.addCmd=function(e,t){var n=this.state.newKitCmd;n.startsWith("/")&&(n=n.substring(1)),e.save(t,{commands:t.commands.concat(n)})},t.prototype.removeCmd=function(e,t,n){e.save(t,{commands:t.commands.filter(function(e,t){return t!==n})})},t.prototype.addStack=function(e,t){e.save(t,{stacks:t.stacks.concat({type:{id:this.state.newItemType,name:""},quantity:this.state.newItemAmount?this.state.newItemAmount:1})})},t.prototype.removeStack=function(e,t,n){e.save(t,{stacks:t.stacks.filter(function(e,t){return t!==n})})},t.prototype.render=function(){var e=this.props.t;return r.createElement(h,{canEdit:!0,canDelete:!0,icon:"wrench",title:e("Kits"),filterTitle:e("FilterKits"),createTitle:e("CreateKit"),fields:{name:{label:e("Name"),create:!0,filter:!0,required:!0},cost:{label:e("Cost"),type:"number",edit:!0,create:!0,required:!0},cooldown:{label:e("Cooldown"),type:"number",edit:!0,create:!0,required:!0},commands:{label:e("Commands"),wide:!0,view:this.renderCommands},stacks:{label:e("Stacks"),wide:!0,view:this.renderStacks}}})},t.prototype.renderCommands=function(e,t){var n=this,o=this.props.t;return r.createElement("div",null,e.commands.map(function(o,i){return r.createElement(a.k,{key:i,color:"blue",content:"/"+o,onRemove:function(r){return n.removeCmd(t,e,i)}})}),r.createElement(a.q,{on:"click",position:"top right",trigger:r.createElement(a.b,{color:"green",icon:"plus",size:"mini"}),content:r.createElement(a.j,{name:"newKitCmd",action:{color:"green",content:o("Add"),onClick:function(){return n.addCmd(t,e)}},placeholder:"/say Hi",value:this.state.newKitCmd,onChange:this.handleChange})}))},t.prototype.renderStacks=function(e,t){var n=this,o=this.props.t;return r.createElement("div",null,e.stacks.map(function(o,i){return r.createElement(c.a,{key:i,item:o,onRemove:function(r){return n.removeStack(t,e,i)}})}),r.createElement(a.q,{on:"click",position:"top right",trigger:r.createElement(a.b,{color:"green",icon:"plus",size:"mini"}),content:r.createElement(a.e,null,r.createElement(a.e.Field,{required:!0,fluid:!0,selection:!0,search:!0,name:"newItemType",control:a.d,placeholder:o("Type"),onChange:this.handleChange,options:Object(l.f)(this.props.itemTypes)}),r.createElement(a.e.Input,{name:"newItemAmount",type:"number",placeholder:o("Amount"),onChange:this.handleChange,action:{color:"green",content:o("Add"),onClick:function(){return n.addStack(t,e)}}}))}))},t}(r.Component),m=function(e){return{itemTypes:e.api.types[p.a.Item]}},y=function(e){return{requestCatalog:function(t){return e(Object(s.e)(t))}}};t.default=Object(i.b)(m,y)(Object(o.c)("Integrations.Nucleus")(f))},1021:function(e,t,n){"use strict";var r=n(90),o=(n.n(r),n(0)),i=(n.n(o),n(69)),a=n(59),s=n(89),c=n(1022),l=n(1023),p=n(1024),u=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,newData:{}},n.changePage=n.changePage.bind(n),n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=s.e.bind(n,n.doHandleChange),n}return u(t,e),t.prototype.doHandleChange=function(e,t){this.setState({newData:d({},this.state.newData,(n={},n[e]=t,n))});var n},t.prototype.changePage=function(e,t){e.preventDefault(),this.setState({page:t})},t.prototype.onEdit=function(e,t){var n=this,o={};e&&Object.keys(this.props.fields).forEach(function(t){n.props.fields[t].edit&&(o[t]=r.get(e,t))}),console.log(o),this.setState({newData:o}),this.props.onEdit&&this.props.onEdit(e,t)},t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields||e.list!==this.props.list||t.page!==this.state.page||t.newData!==this.state.newData},t.prototype.render=function(){var e=this,t=this.props,n=t.icon,r=t.title,i=t.list,s=t.canEdit,u=t.canDelete,h=t.actions,f=Object.keys(this.props.fields).map(function(t){return e.props.fields[t]}).filter(function(e){return e.view}),m=Math.ceil(i.length/20),y=Math.min(this.state.page,m-1),g=i.slice(20*y,20*(y+1)),b={handleChange:this.handleChange,state:this.state.newData,setState:function(t){return e.setState({newData:d({},e.state.newData,t)})}},v=this.props.t;return o.createElement("div",{style:{marginTop:"2em"}},r&&o.createElement(a.g,null,o.createElement(a.h,{fitted:!0,name:n})," ",r),o.createElement(a.w,{striped:!0,stackable:!0},o.createElement(l.a,{fields:f,hasActions:"undefined"!==typeof h,canEdit:s,canDelete:u,t:v}),o.createElement(a.w.Body,null,g.map(function(t,n){return o.createElement(p.a,{key:e.props.idFunc(t),obj:t,tableRef:b,canEdit:s,canDelete:u,editing:e.props.isEditing(t),fields:f,onEdit:function(t,n){return e.onEdit(t,n)},onSave:e.props.onSave,onDelete:e.props.onDelete,actions:e.props.actions,newData:e.state.newData,handleChange:e.handleChange,t:v})}))),o.createElement(c.a,{page:y,maxPage:m,changePage:function(t,n){return e.changePage(t,n)}}))},t}(o.Component);t.a=Object(i.c)("DataTable")(h)},1022:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(59)),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.page!==this.props.page||e.maxPage!==this.props.maxPage},t.prototype.render=function(){var e=this;if(this.props.maxPage<=1)return null;for(var t=this.props,n=t.page,i=t.maxPage,a=Math.max(0,n-4),s=Math.min(i,n+5),c=[],l=a;l<s;l++)c.push(l);return r.createElement(o.n,{pagination:!0},n>4?r.createElement(o.n.Item,{onClick:function(t){return e.props.changePage(t,0)}},"1"):null,n>5?r.createElement(o.n.Item,{onClick:function(t){return e.props.changePage(t,n-5)}},"..."):null,c.map(function(t){return r.createElement(o.n.Item,{key:t,onClick:function(n){return e.props.changePage(n,t)},active:t===n},t+1)}),n<i-6?r.createElement(o.n.Item,{onClick:function(t){return e.props.changePage(t,n+5)}},"..."):null,n<i-5?r.createElement(o.n.Item,{onClick:function(t){return e.props.changePage(t,i-1)}},i):null)},t}(r.Component);t.a=a},1023:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(59)),i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields},t.prototype.render=function(){var e=this;return r.createElement(o.w.Header,null,r.createElement(o.w.Row,null,Object.keys(this.props.fields).map(function(t){var n=e.props.fields[t];return r.createElement(o.w.HeaderCell,{key:t},n.label?n.label:"<"+n.name+">")}),this.props.hasActions||this.props.canEdit||this.props.canDelete?r.createElement(o.w.HeaderCell,null,this.props.t("Actions")):null))},t}(r.Component);t.a=a},1024:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(59)),i=n(89),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.obj!==this.props.obj||e.editing!==this.props.editing||e.fields!==this.props.fields||this.props.editing&&e.newData!==this.props.newData},t.prototype.renderEdit=function(e,t){return t.options?r.createElement(o.e.Field,{fluid:!0,selection:!0,search:!0,control:o.d,name:t.name,placeholder:t.label,options:t.options,value:this.props.newData[t.name],onChange:this.props.handleChange}):r.createElement(o.e.Input,{name:t.name,type:t.type?t.type:"text",placeholder:t.label,value:this.props.newData[t.name],onChange:this.props.handleChange})},t.prototype.render=function(){var e=this,t=this.props,n=t.actions,a=t.fields,s=t.obj,c=t.canEdit,l=t.canDelete,p=t.editing,u=t.tableRef;return r.createElement(o.w.Row,null,a.map(function(t,n){return r.createElement(o.w.Cell,{key:n,collapsing:!t.wide},t.edit&&p?"function"===typeof t.edit?t.edit(s,u):e.renderEdit(s,t):"function"===typeof t.view?t.view(s,u):Object(i.d)(s,t.name))}),n||c||l?r.createElement(o.w.Cell,{collapsing:!0},c&&p?[r.createElement(o.b,{key:"save",color:"green",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onSave&&e.props.onSave(s,e.props.newData,u)}},r.createElement(o.h,{name:"save"})," ",this.props.t("Save")),r.createElement(o.b,{key:"cancel",color:"yellow",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(null,u)}},r.createElement(o.h,{name:"cancel"})," ",this.props.t("Cancel"))]:c?r.createElement(o.b,{color:"blue",disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(s,u)}},r.createElement(o.h,{name:"edit"})," ",this.props.t("Edit")):null,l&&r.createElement(o.b,{color:"red",disabled:s.updating,loading:s.updating,onClick:function(){e.props.onDelete&&e.props.onDelete(s,u)}},r.createElement(o.h,{name:"trash"})," ",this.props.t("Remove")),n&&n(s,u)):null)},t}(r.Component);t.a=s},1025:function(e,t,n){"use strict";function r(e,t){return function(n,r){var o=a.get(n,e.replace(/\//g,"_").replace("-",""));return{creating:!!o&&o.creating,filter:o&&o.filter?o.filter:{},list:o?o.list:[],types:n.api.types,idFunc:t,perm:e.split("/"),perms:n.api.permissions}}}function o(e,t,n){return function(r){return{requestList:function(){return r(Object(p.f)(e,!n))},requestDetails:function(n){return r(Object(p.e)(e,t,n))},requestCreate:function(n){return r(Object(p.c)(e,t,n))},requestChange:function(n,o){return r(Object(p.b)(e,t,n,o))},requestDelete:function(n){return r(Object(p.d)(e,t,n))},setFilter:function(t,n){return r(Object(p.l)(e,t,n))},equals:function(e,n){return null!=e&&null!=n&&t(e)===t(n)}}}}function i(e,t,n){t||(t="id");var i="function"===typeof t?t:function(e){return a.get(e,t)};return Object(c.b)(r(e,i),o(e,i,!!n))(g)}t.a=i;var a=n(90),s=(n.n(a),n(0)),c=(n.n(s),n(70)),l=n(59),p=n(144),u=n(1026),d=n(1021),h=n(1027),f=n(89),m=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},g=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,data:null},n.details=n.details.bind(n),n.create=n.create.bind(n),n.edit=n.edit.bind(n),n.endEdit=n.endEdit.bind(n),n.save=n.save.bind(n),n.delete=n.delete.bind(n),n}return m(t,e),t.prototype.createTable=function(){return d.a},t.prototype.componentDidMount=function(){this.props.static||(this.props.requestList(),this.interval=setInterval(this.props.requestList,1e4))},t.prototype.componentWillUnmount=function(){this.interval&&clearInterval(this.interval)},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.filter!==this.props.filter||e.fields!==this.props.fields||e.list!==this.props.list||t.data!==this.state.data},t.prototype.create=function(e){this.props.requestCreate(e)},t.prototype.details=function(e){this.props.requestDetails(e)},t.prototype.edit=function(e){this.setState({data:e})},t.prototype.save=function(e,t){this.props.requestChange(e,t),this.endEdit()},t.prototype.endEdit=function(){this.setState({data:null})},t.prototype.delete=function(e){this.props.requestDelete(e)},t.prototype.render=function(){var e=this,t=[],n=!1,r=function(t){return y({},t,{create:e.create,details:e.details,save:e.save,edit:e.edit,endEdit:e.endEdit,delete:e.delete})},o=a.mapValues(this.props.fields,function(e,t){var n={name:t,view:!0};if("string"===typeof e)n.label=e;else if("function"===typeof e)n.view=function(t,n){return e(t,r(n))};else if("object"===typeof e&&(n=y({},n,e),"function"===typeof e.view)){var o=e.view;n.view=function(e,t){return o(e,r(t))}}return n}),i={},c={};Object.keys(o).forEach(function(e){o[e].create&&(i[e]=o[e]),o[e].filter&&(c[e]=o[e])});try{Object.keys(this.props.filter).forEach(function(n){var r=e.props.filter[n],o=Object.keys(c).map(function(e){return c[e]}).find(function(e){return e.filterName===n})||c[n],i=function(e){return a.get(e,n)};if("function"===typeof o.filterValue&&(i=o.filterValue),a.isArray(r)){if(0===r.length)return;t.push(function(e){var t=i(e);return r.indexOf(t)>=0})}else t.push(function(e){return new RegExp(r,"i").test(i(e))})}),n=!0}catch(e){n=!1}var p=this.props.list.filter(function(e){return!n||t.every(function(t){return t(e)})}),d=this.props.createTitle&&this.props.filterTitle?2:1,m=this.props.actions,g=m;"function"===typeof m&&(g=function(e,t){return m(e,r(t))});var b=this.createTable();return s.createElement(l.t,{basic:!0},s.createElement(l.f,{stackable:!0,doubling:!0,columns:d},this.props.createTitle&&Object(f.a)(this.props.perms,this.props.perm.concat("create"))&&s.createElement(l.f.Column,null,s.createElement(u.a,{title:this.props.createTitle,button:this.props.createButton,creating:this.props.creating,fields:i,onCreate:function(t,n){return e.props.onCreate?e.props.onCreate(t,r(n)):e.create(t)}})),this.props.filterTitle&&s.createElement(l.f.Column,null,s.createElement(h.a,{title:this.props.filterTitle,fields:c,valid:n,values:this.props.filter,onFilterChange:this.props.setFilter}))),s.createElement(b,{title:this.props.title,icon:this.props.icon,list:p,t:this.props.t,idFunc:this.props.idFunc,fields:o,onEdit:function(t,n){return e.props.onEdit?e.props.onEdit(t,r(n)):e.edit(t)},onSave:function(t,n,o){return e.props.onSave?e.props.onSave(t,n,r(o)):e.save(t,n)},onDelete:function(t,n){return e.props.onDelete?e.props.onDelete(t,r(n)):e.delete(t)},canEdit:this.props.canEdit&&Object(f.a)(this.props.perms,this.props.perm.concat("change")),canDelete:this.props.canDelete&&Object(f.a)(this.props.perms,this.props.perm.concat("delete")),actions:g,isEditing:function(t){return e.props.equals(t,e.state.data)}}))},t}(s.Component)},1026:function(e,t,n){"use strict";var r=n(90),o=(n.n(r),n(0)),i=(n.n(o),n(69)),a=n(59),s=n(89),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={newData:{}},n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=s.e.bind(n,n.doHandleChange),n.create=n.create.bind(n),n}return c(t,e),t.prototype.doHandleChange=function(e,t){this.setState({newData:l({},this.state.newData,(n={},n[e]=t,n))});var n},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.fields!==this.props.fields||t.newData!==this.state.newData},t.prototype.create=function(){var e=this,t={};Object.keys(this.state.newData).forEach(function(n){r.set(t,n,e.state.newData[n])}),this.props.onCreate(t,{state:this.state.newData,setState:this.setState,handleChange:this.handleChange})},t.prototype.canCreate=function(){var e=this;return Object.keys(this.props.fields).every(function(t){var n=e.props.fields[t],r=n.createName?n.createName:t;return"string"===typeof n||!n.required||e.state.newData[r]})},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.creating,i=t.fields,s=this.props.t,c=[];return Object.keys(i).forEach(function(e){var t=i[e],n=l({},t,{name:t.createName?t.createName:e});n.isGroup?c.push({only:n}):c.length&&!c[c.length-1].second?c[c.length-1].second=n:c.push({first:n})}),o.createElement(a.t,null,o.createElement(a.g,null,o.createElement(a.h,{fitted:!0,name:"plus"})," ",n),o.createElement(a.e,{loading:r},c.map(function(t,n){return t.only?o.createElement("div",{key:n},e.renderField(t.only)):o.createElement(a.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first),t.second&&e.renderField(t.second))}),o.createElement(a.b,{color:"green",onClick:this.create,disabled:!this.canCreate()},this.props.button||s("Create"))))},t.prototype.renderField=function(e){var t=this.state.newData;return"function"===typeof e.create?e.create({state:t,setState:this.setState,handleChange:this.handleChange,value:t[e.name]}):e.options?o.createElement(a.e.Field,{fluid:!0,selection:!0,search:!0,required:e.required,control:a.d,name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name],options:e.options}):o.createElement(a.e.Input,{required:e.required,type:e.type?e.type:"text",name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name]})},t}(o.Component);t.a=Object(i.c)("CreateForm")(p)},1027:function(e,t,n){"use strict";var r=n(90),o=(n.n(r),n(0)),i=(n.n(o),n(59)),a=n(89),s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l=function(e){function t(t){var n=e.call(this,t)||this;return n.handleChange=a.e.bind(n,n.props.onFilterChange),n}return s(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.values!==this.props.values||e.fields!==this.props.fields||e.valid!==this.props.valid},t.prototype.render=function(){var e=this,t=this.props,n=t.title,a=t.fields,s=t.values,l=t.valid,p=[];return Object.keys(a).forEach(function(e){var t=a[e],n=c({},t,{name:t.filterName?t.filterName:e});n.isGroup?p.push({only:n}):p.length&&!p[p.length-1].second?p[p.length-1].second=n:p.push({first:n})}),o.createElement(i.t,null,o.createElement(i.g,null,o.createElement(i.h,{name:"filter",fitted:!0})," ",n),o.createElement(i.e,null,p.map(function(t,n){return t.only?e.renderField(t.only,r.get(s,t.only.name),!l):o.createElement(i.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first,r.get(s,t.first.name),!l),t.second&&e.renderField(t.second,r.get(s,t.second.name),!l))}),o.createElement(i.o,{error:!0,visible:!l,content:"Search term must be a valid regex"})))},t.prototype.renderField=function(e,t,n){return"function"===typeof e.filter?e.filter({state:this.props.values,setState:this.setState,handleChange:this.handleChange,value:t}):e.options?(t||(t=[]),o.createElement(i.e.Field,{fluid:!0,selection:!0,search:!0,multiple:!0,control:i.d,name:e.name,label:e.label,placeholder:e.label,options:e.options,value:t,error:n,onChange:this.handleChange})):o.createElement(i.e.Input,{name:e.name,type:e.type?e.type:"text",label:e.label,placeholder:e.label,value:t,error:n,onChange:this.handleChange})},t}(o.Component);t.a=l},1030:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(59)),i=n(89),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){return 1===e?"I":2===e?"II":3===e?"III":4===e?"IV":5===e?"V":""},c=function(e){return s(e.amplifier+1)},l={display:"inline-block",verticalAlign:"top",margin:"0.1em",padding:"0.2em",border:"1px solid rgba(34,36,38,.1)",borderRadius:".28571429rem"},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this.props.item;return r.createElement("div",{style:l},r.createElement("strong",null,e.type.name),this.props.onRemove&&r.createElement(o.b,{compact:!0,size:"mini",icon:"delete",floated:"right",onClick:this.props.onRemove}),r.createElement("div",{style:{color:"gray",marginBottom:"0.5em"}},e.type.id),r.createElement("div",null,e.durability&&(e.durability.unbreakable?r.createElement(o.k,{size:"tiny"},"Unbreakable"):r.createElement(o.r,{progress:!0,size:"small",percent:Object(i.b)(e.durability.durability,e.useLimit?e.useLimit:0),style:{margin:"0 0 .5em 0"}})),e.quantity>1&&r.createElement(o.k,{size:"tiny",color:"blue"},"x",e.quantity),e.enchantments&&r.createElement("div",null,e.enchantments.map(function(e){return r.createElement(o.k,{color:"purple",size:"tiny",key:e.id},e.name,r.createElement(o.k.Detail,null,e.level))})),e.spawn&&r.createElement(o.k,{size:"tiny"},e.spawn.name),e.potionEffects&&e.potionEffects.map(function(e){return r.createElement(o.k,{size:"tiny",color:"brown",key:e.type.id},e.type.name," ",c(e))}),e.foodRestoration&&r.createElement(o.k,{size:"tiny",color:"green",icon:"food",content:e.foodRestoration}),e.burningFuel&&r.createElement(o.k,{size:"tiny",color:"red",icon:"fire",content:e.burningFuel})))},t}(r.Component);t.a=p}});
//# sourceMappingURL=9.10b5c622.chunk.js.map