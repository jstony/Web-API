webpackJsonp([7],{1006:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(68),u=n(66),s=n(24),p=n.n(s),f=n(1007),d=n(1008),h=n(1009),m=n(135),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:0,data:null},n.details=n.details.bind(n),n.create=n.create.bind(n),n.edit=n.edit.bind(n),n.save=n.save.bind(n),n.delete=n.delete.bind(n),n}return o(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.requestList(),this.interval=setInterval(this.props.requestList,1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"shouldComponentUpdate",value:function(e,t){return e.creating!==this.props.creating||e.filter!==this.props.filter||e.list!==this.props.list||t.data!==this.state.data}},{key:"create",value:function(e){this.props.requestCreate(e)}},{key:"details",value:function(e){this.props.requestDetails(e)}},{key:"edit",value:function(e){this.setState({data:e})}},{key:"save",value:function(e,t){this.props.requestChange(e,t),this.setState({data:null})}},{key:"delete",value:function(e){this.props.requestDelete(e)}},{key:"render",value:function(){var e=this,t=[],n=!1,a={create:this.create,details:this.details,save:this.save,edit:this.edit,delete:this.delete},r=p.a.mapValues(this.props.fields,function(e,t){var n=null;return"function"===typeof e?n=function(t,n){return e(t,p.a.assign({},n,a))}:"function"===typeof e.view&&(n=p.a.assign({},e,{view:function(t,n){return e.view(t,p.a.assign({},n,a))}})),n||e}),o=p.a.pickBy(this.props.fields,"create"),i=p.a.pickBy(this.props.fields,"filter");try{p.a.each(this.props.filter,function(e,n){var a=p.a.find(i,{filterName:n})||i[n],r=function(e){return p.a.get(e,n)};if("function"===typeof a.filterValue&&(r=a.filterValue),p.a.isArray(e)){if(0===e.length)return;t.push(function(t){var n=r(t);return e.indexOf(n)>=0})}else t.push(function(t){return new RegExp(e,"i").test(r(t))})}),n=!0}catch(e){}var c=p.a.filter(this.props.list,function(e){return!n||p.a.every(t,function(t){return t(e)})}),s=this.props.createTitle&&this.props.filterTitle?2:1,m=this.props.actions,b=m;return"function"===typeof m&&(b=function(e,t){return m(e,p.a.assign({},t,a))}),l.a.createElement(u.t,{basic:!0},l.a.createElement(u.f,{stackable:!0,doubling:!0,columns:s},this.props.createTitle&&l.a.createElement(u.f.Column,null,l.a.createElement(h.a,{title:this.props.createTitle,button:this.props.createButton,fields:o,creating:this.props.creating,onCreate:function(t,n){return e.props.onCreate?e.props.onCreate(t,p.a.assign({},a,n)):e.create(t)}})),this.props.filterTitle&&l.a.createElement(u.f.Column,null,l.a.createElement(d.a,{title:this.props.filterTitle,fields:i,valid:n,values:this.props.filter,onFilterChange:this.props.setFilter}))),l.a.createElement(f.a,{title:this.props.title,icon:this.props.icon,list:c,idFunc:this.props.idFunc,columns:r,onEdit:function(t,n){return e.props.onEdit?e.props.onEdit(t,p.a.assign({},a,n)):e.edit(t)},onSave:function(t,n,r){return e.props.onSave?e.props.onSave(t,n,p.a.assign({},a,r)):e.save(t,n)},onDelete:function(t,n){return e.props.onDelete?e.props.onDelete(t,p.a.assign({},a,n)):e.delete(t)},canEdit:this.props.canEdit,canDelete:this.props.canDelete,actions:b,isEditing:function(t){return e.props.equals(t,e.state.data)}}))}}]),t}(i.Component),g=function(e,t){return function(n){var a=p.a.get(n,e.replace(/\//g,"."));return{creating:!!a&&a.creating,filter:a&&a.filter?a.filter:{},list:a?a.list:[],types:n.api.types,idFunc:t}}},v=function(e,t,n){return function(a){return{requestList:function(){return a(Object(m.p)(e,!n))},requestDetails:function(n){return a(Object(m.o)(e,t,n))},requestCreate:function(n){return a(Object(m.m)(e,t,n))},requestChange:function(n,r){return a(Object(m.l)(e,t,n,r))},requestDelete:function(n){return a(Object(m.n)(e,t,n))},setFilter:function(t,n){return a(Object(m.q)(e,t,n))},equals:function(e,n){return null!=e&&null!=n&&t(e)===t(n)}}}};t.a=function(e,t,n){t||(t="id");var a="function"===typeof t?t:function(e){return p.a.get(e,t)};return Object(c.b)(g(e,a),v(e,a,n))(y)}},1007:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n.n(l),u=n(66),s=n(67),p=n(24),f=n.n(p),d=n(435),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:0,newData:{}},n.changePage=n.changePage.bind(n),n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=d.b.bind(n,n.doHandleChange),n}return i(t,e),h(t,[{key:"doHandleChange",value:function(e,t){this.setState({newData:f.a.assign({},this.state.newData,a({},e,t))})}},{key:"changePage",value:function(e,t){e.preventDefault(),this.setState({page:t})}},{key:"onEdit",value:function(e,t){var n={};e&&f.a.each(this.props.columns,function(t,a){t.edit&&(n[a]=f.a.get(e,a))}),this.setState({newData:n}),this.props.onEdit(e,t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.icon,a=t.title,r=t.list,o=t.canEdit,i=t.canDelete,l=t.actions,s=f.a.filter(f.a.map(this.props.columns,function(e,t){var n={name:t,view:!0};return"string"===typeof e?n.label=e:"function"===typeof e?n.view=e:f.a.assign(n,e),n}),"view"),p=Math.ceil(r.length/20),d=Math.min(this.state.page,p-1),h=r.slice(20*d,20*(d+1)),m={handleChange:this.handleChange,state:this.state.newData,setState:function(t){return e.setState({newData:f.a.assign({},e.state.newData,t)})}},b=this.props.t;return c.a.createElement("div",{style:{marginTop:"2em"}},c.a.createElement(u.g,null,c.a.createElement(u.h,{fitted:!0,name:n})," ",a),c.a.createElement(u.w,{striped:!0,stackable:!0},c.a.createElement(u.w.Header,null,c.a.createElement(u.w.Row,null,f.a.map(s,function(e,t){return c.a.createElement(u.w.HeaderCell,{key:t},e.label?e.label:"<"+e.name+">")}),l||o||i?c.a.createElement(u.w.HeaderCell,null,b("Actions")):null)),c.a.createElement(u.w.Body,null,f.a.map(h,function(t,n){var a=e.props.isEditing(t);return c.a.createElement(u.w.Row,{key:e.props.idFunc(t)},f.a.map(s,function(n,r){return c.a.createElement(u.w.Cell,{key:r,collapsing:!n.wide},n.edit&&a?"function"===typeof n.edit?n.edit(t,m):e.renderEdit(t,n):"function"===typeof n.view?n.view(t,m):f.a.get(t,n.name))}),l||o||i?c.a.createElement(u.w.Cell,{collapsing:!0},o&&a?[c.a.createElement(u.b,{key:"save",color:"green",disabled:t.updating,loading:t.updating,onClick:function(){return e.props.onSave(t,e.state.newData,m)}},c.a.createElement(u.h,{name:"save"})," ",b("Save")),c.a.createElement(u.b,{key:"cancel",color:"yellow",disabled:t.updating,loading:t.updating,onClick:function(){return e.onEdit(null,m)}},c.a.createElement(u.h,{name:"cancel"})," ",b("Cancel"))]:o?c.a.createElement(u.b,{color:"blue",disabled:t.updating,loading:t.updating,onClick:function(){return e.onEdit(t,m)}},c.a.createElement(u.h,{name:"edit"})," ",b("Edit")):null,i&&c.a.createElement(u.b,{color:"red",disabled:t.updating,loading:t.updating,onClick:function(){return e.props.onDelete(t,m)}},c.a.createElement(u.h,{name:"trash"})," ",b("Remove")),l&&l(t,m)):null)}))),p>1?c.a.createElement(u.n,{pagination:!0},d>4?c.a.createElement(u.n.Item,{onClick:function(t){return e.changePage(t,0)}},"1"):null,d>5?c.a.createElement(u.n.Item,{onClick:function(t){return e.changePage(t,d-5)}},"..."):null,f.a.map(f.a.range(Math.max(0,d-4),Math.min(p,d+5)),function(t){return c.a.createElement(u.n.Item,{key:t,onClick:function(n){return e.changePage(n,t)},active:t===d},t+1)}),d<p-6?c.a.createElement(u.n.Item,{onClick:function(t){return e.changePage(t,d+5)}},"..."):null,d<p-5?c.a.createElement(u.n.Item,{onClick:function(t){return e.changePage(t,p-1)}},p):null):null)}},{key:"renderEdit",value:function(e,t){return t.options?c.a.createElement(u.e.Field,{fluid:!0,selection:!0,search:!0,control:u.d,name:t.name,placeholder:t.label,options:t.options,value:this.state.newData[t.name],onChange:this.handleChange}):c.a.createElement(u.e.Input,{name:t.name,type:t.type?t.type:"text",placeholder:t.label,value:this.state.newData[t.name],onChange:this.handleChange})}}]),t}(l.Component);t.a=Object(s.c)("DataTable")(m)},1008:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(66),u=n(24),s=n.n(u),p=n(435),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=p.b.bind(n,n.props.onFilterChange),n}return o(t,e),f(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.fields,r=t.values,o=t.valid,i=[];return s.a.each(a,function(e,t){var n={name:e.filterName?e.filterName:t};"string"===typeof e?n.label=e:s.a.assign(n,e),n.isGroup?i.push({only:n,second:!0}):i.length&&!i[i.length-1].second?i[i.length-1].second=n:i.push({first:n})}),l.a.createElement(c.t,null,l.a.createElement(c.g,null,l.a.createElement(c.h,{name:"filter",fitted:!0})," ",n),l.a.createElement(c.e,null,s.a.map(i,function(t,n){return t.only?e.renderField(t.only,s.a.get(r,t.only.name),!o):l.a.createElement(c.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first,s.a.get(r,t.first.name),!o),t.second&&e.renderField(t.second,s.a.get(r,t.second.name),!o))}),l.a.createElement(c.o,{error:!0,visible:!o,content:"Search term must be a valid regex"})))}},{key:"renderField",value:function(e,t,n){return"function"===typeof e.filter?e.filter({handleChange:this.handleChange,state:this.props.values,value:t}):e.options?(t||(t=[]),l.a.createElement(c.e.Field,{fluid:!0,selection:!0,search:!0,multiple:!0,control:c.d,name:e.name,label:e.label,placeholder:e.label,options:e.options,value:t,error:n,onChange:this.handleChange})):l.a.createElement(c.e.Input,{name:e.name,type:e.type?e.type:"text",label:e.label,placeholder:e.label,value:t,error:n,onChange:this.handleChange})}}]),t}(i.Component);t.a=d},1009:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n.n(l),u=n(66),s=n(67),p=n(24),f=n.n(p),d=n(435),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={newData:{}},n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=d.b.bind(n,n.doHandleChange),n.create=n.create.bind(n),n}return i(t,e),h(t,[{key:"doHandleChange",value:function(e,t){this.setState({newData:f.a.assign({},this.state.newData,a({},e,t))})}},{key:"create",value:function(){var e={};f.a.each(this.state.newData,function(t,n){return f.a.set(e,n,t)}),this.props.onCreate(e,{handleChange:this.handleChange,state:this.state.newData})}},{key:"canCreate",value:function(){var e=this;return f.a.every(this.props.fields,function(t,n){var a=t.createName?t.createName:n;return"string"===typeof t||!t.required||e.state.newData[a]})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.creating,r=t.fields,o=this.props.t,i=[];return f.a.each(r,function(e,t){var n={name:e.createName?e.createName:t};"string"===typeof e?n.label=e:f.a.assign(n,e),n.isGroup?i.push({only:n,second:!0}):i.length&&!i[i.length-1].second?i[i.length-1].second=n:i.push({first:n})}),c.a.createElement(u.t,null,c.a.createElement(u.g,null,c.a.createElement(u.h,{fitted:!0,name:"plus"})," ",n),c.a.createElement(u.e,{loading:a},f.a.map(i,function(t,n){return t.only?c.a.createElement("div",{key:n},e.renderField(t.only)):c.a.createElement(u.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first),t.second&&e.renderField(t.second))}),c.a.createElement(u.b,{color:"green",onClick:this.create,disabled:!this.canCreate()},this.props.button||o("Create"))))}},{key:"renderField",value:function(e){var t=this.state.newData;return"function"===typeof e.create?e.create({handleChange:this.handleChange,state:t,value:t[e.name]}):e.options?c.a.createElement(u.e.Field,{fluid:!0,selection:!0,search:!0,required:e.required,control:u.d,name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name],options:e.options}):c.a.createElement(u.e.Input,{required:e.required,type:e.type?e.type:"text",name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name]})}}]),t}(l.Component);t.a=Object(s.c)("CreateForm")(m)},1012:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(66),u=n(24),s=n.n(u),p=n(435),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){return h(e.amplifier+1)},h=function(e){return 1===e?"I":2===e?"II":3===e?"III":4===e?"IV":5===e?"V":""},m={display:"inline-block",verticalAlign:"top",margin:"0.1em",padding:"0.2em",border:"1px solid rgba(34,36,38,.1)",borderRadius:".28571429rem"},b=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){var e=this.props.item;return l.a.createElement("div",{style:m},l.a.createElement("strong",null,e.type.name),this.props.onRemove&&l.a.createElement(c.b,{compact:!0,size:"mini",icon:"delete",floated:"right",onClick:this.props.onRemove}),l.a.createElement("div",{style:{color:"gray",marginBottom:"0.5em"}},e.type.id),e.data&&l.a.createElement("div",null,e.data.durability&&(e.data.durability.unbreakable?l.a.createElement(c.k,{size:"tiny"},"Unbreakable"):l.a.createElement(c.r,{progress:!0,size:"small",color:"gray",percent:Object(p.a)(e.data.durability.durability,e.data.useLimit),style:{margin:"0 0 .5em 0"}})),e.quantity>1&&l.a.createElement(c.k,{size:"tiny",color:"blue"},"x",e.quantity),e.data.enchantments&&l.a.createElement("div",null,s.a.map(e.data.enchantments,function(e){return l.a.createElement(c.k,{color:"purple",size:"tiny",key:e.enchantment.id},e.enchantment.name,l.a.createElement(c.k.Detail,null,e.level))})),e.data.spawn&&l.a.createElement(c.k,{size:"tiny"},e.data.spawn.name),e.data.potionEffects&&s.a.map(e.data.potionEffects,function(e){return l.a.createElement(c.k,{size:"tiny",color:"brown",key:e.id},e.name," ",d(e))}),e.data.foodRestoration&&l.a.createElement(c.k,{size:"tiny",color:"green",icon:"food",content:e.data.foodRestoration}),e.data.burningFuel&&l.a.createElement(c.k,{size:"tiny",color:"red",icon:"fire",content:e.data.burningFuel})))}}]),t}(i.Component);t.a=b},1209:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(68),u=n(66),s=n(67),p=n(24),f=n.n(p),d=n(1012),h=n(44),m=n(435),b=n(1006),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=Object(b.a)("nucleus/kit","name"),v=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.renderCommands=n.renderCommands.bind(n),n.renderStacks=n.renderStacks.bind(n),n.handleChange=m.b.bind(n,null),n}return o(t,e),y(t,[{key:"componentDidMount",value:function(){this.props.requestCatalog("item.ItemType")}},{key:"addCmd",value:function(e,t){var n=this.state.newKitCmd;f.a.startsWith(n,"/")&&(n=n.substring(1)),e.save(t,{commands:f.a.concat(t.commands,n)})}},{key:"removeCmd",value:function(e,t,n){e.save(t,{commands:f.a.filter(t.commands,function(e,t){return t!==n})})}},{key:"addStack",value:function(e,t){e.save(t,{stacks:f.a.concat(t.stacks,{type:{id:this.state.newItemType},quantity:this.state.newItemAmount?this.state.newItemAmount:1})})}},{key:"removeStack",value:function(e,t,n){e.save(t,{stacks:f.a.filter(t.stacks,function(e,t){return t!==n})})}},{key:"render",value:function(){var e=this.props.t;return l.a.createElement(g,{canEdit:!0,canDelete:!0,icon:"wrench",title:e("Kits"),filterTitle:e("FilterKits"),createTitle:e("CreateKit"),fields:{name:{label:e("Name"),create:!0,filter:!0,required:!0},cost:{label:e("Cost"),type:"number",edit:!0,create:!0,required:!0},cooldown:{label:e("Cooldown"),type:"number",edit:!0,create:!0,required:!0},commands:{label:e("Commands"),wide:!0,view:this.renderCommands},stacks:{label:e("Stacks"),wide:!0,view:this.renderStacks}}})}},{key:"renderCommands",value:function(e,t){var n=this,a=this.props.t;return l.a.createElement("div",null,f.a.map(e.commands,function(a,r){return l.a.createElement(u.k,{key:r,color:"blue",content:"/"+a,onRemove:function(a){return n.removeCmd(t,e,r)}})}),l.a.createElement(u.q,{on:"click",position:"top right",trigger:l.a.createElement(u.b,{color:"green",icon:"plus",size:"mini"}),content:l.a.createElement(u.j,{name:"newKitCmd",action:{color:"green",content:a("Add"),onClick:function(a){return n.addCmd(t,e)}},placeholder:"/say Hi",value:this.newKitCmd,onChange:this.handleChange})}))}},{key:"renderStacks",value:function(e,t){var n=this,a=this.props.t;return l.a.createElement("div",null,f.a.map(e.stacks,function(a,r){return l.a.createElement(d.a,{key:r,item:a,onRemove:function(a){return n.removeStack(t,e,r)}})}),l.a.createElement(u.q,{on:"click",position:"top right",trigger:l.a.createElement(u.b,{color:"green",icon:"plus",size:"mini"}),content:l.a.createElement(u.e,null,l.a.createElement(u.e.Field,{required:!0,fluid:!0,selection:!0,search:!0,name:"newItemType",control:u.d,placeholder:a("Type"),onChange:this.handleChange,options:f.a.map(this.props.itemTypes,function(e){return{value:e.id,text:e.name+" ("+e.id+")"}})}),l.a.createElement(u.e.Input,{name:"newItemAmount",type:"number",placeholder:a("Amount"),onChange:this.handleChange,action:{color:"green",content:a("Add"),onClick:function(a){return n.addStack(t,e)}}}))}))}}]),t}(i.Component),w=function(e){return{itemTypes:e.api.types["item.ItemType"]}},E=function(e){return{requestCatalog:function(t){return e(Object(h.n)(t))}}};t.a=Object(c.b)(w,E)(Object(s.c)("Integrations.Nucleus")(v))},1210:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(68),u=n(66),s=n(67),p=n(24),f=n.n(p),d=n(135),h=n(1006),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=Object(h.a)("nucleus/jail","name"),y=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.requestWorlds()}},{key:"render",value:function(){var e=this.props.t;return l.a.createElement(b,{canDelete:!0,icon:"wrench",title:e("Jails"),filterTitle:e("FilterJails"),createTitle:e("CreateJail"),fields:{name:{label:e("Name"),create:!0,filter:!0,required:!0,wide:!0},world:{label:e("World"),view:!1,create:!0,createName:"location.world",filter:!0,filterName:"location.world.uuid",options:f.a.map(this.props.worlds,function(e){return{value:e.uuid,text:e.name+" ("+e.dimensionType.name+")"}}),required:!0},position:{label:e("Location"),isGroup:!0,wide:!0,view:function(e){return l.a.createElement(u.b,{color:"blue"},l.a.createElement(u.h,{name:"globe"}),e.location.world.name,"\xa0 \xa0",e.location.position.x.toFixed(0)," |\xa0",e.location.position.y.toFixed(0)," |\xa0",e.location.position.z.toFixed(0))},create:function(e){return l.a.createElement(u.e.Group,{inline:!0},l.a.createElement("label",null,"Position"),l.a.createElement(u.e.Input,{type:"number",width:6,name:"location.position.x",placeholder:"X",value:e.state["location.position.x"],onChange:e.handleChange}),l.a.createElement(u.e.Input,{type:"number",width:6,name:"location.position.y",placeholder:"Y",value:e.state["location.position.y"],onChange:e.handleChange}),l.a.createElement(u.e.Input,{type:"number",width:6,name:"location.position.z",placeholder:"Z",value:e.state["location.position.z"],onChange:e.handleChange}))}}}})}}]),t}(i.Component),g=function(e){return{worlds:e.world.list}},v=function(e){return{requestWorlds:function(){return e(Object(d.p)("world",!0))}}};t.a=Object(c.b)(g,v)(Object(s.c)("Integrations.Nucleus")(y))},999:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=n.n(i),c=n(68),u=n(87),s=n(1209),p=n(1210),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){return l.a.createElement(u.d,null,l.a.createElement(u.c,{path:"/nucleus/jails",component:p.a}),l.a.createElement(u.c,{path:"/nucleus/kits",component:s.a}))}}]),t}(i.Component),h=function(e){return{}},m=function(e){return{}};t.default=Object(c.b)(h,m)(d)}});
//# sourceMappingURL=7.44fbb4a8.chunk.js.map