(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5abb103f"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}},"1f9d":function(t,e,r){},"6d14":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"productList"},[r("search-box",{attrs:{categoryList:t.categoryList},on:{submit:t.searchSubmit}}),r("a-button",{staticClass:"add-product-btn"},[r("router-link",{attrs:{to:{name:"ProductAdd"}}},[t._v("新增商品")])],1),r("product-table",{attrs:{data:t.tableData,page:t.page},on:{change:t.changePage,edit:t.productEdit,remove:t.productRemove}})],1)},a=[],o=(r("4160"),r("d81d"),r("b0c0"),r("159b"),r("5530")),i=(r("96cf"),r("1da1")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{staticClass:"search-box",attrs:{layout:"inline",model:t.searchForm},on:{submit:t.handleSubmit},nativeOn:{submit:function(t){t.preventDefault()}}},[r("a-form-model-item",{attrs:{"aria-label":"检索关键字"}},[r("a-input",{attrs:{placeholder:"请输入关键字"},model:{value:t.searchForm.searchWord,callback:function(e){t.$set(t.searchForm,"searchWord",e)},expression:"searchForm.searchWord"}})],1),r("a-form-model-item",{attrs:{"aria-label":"商品类目"}},[r("a-select",{staticStyle:{width:"200px"},attrs:{allowClear:"","show-search":"",placeholder:"Select a person"},on:{change:t.handleChange}},t._l(t.categoryList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("a-form-model-item",[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v(" 搜索 ")])],1)],1)},u=[],s={name:"search",data:function(){return{searchForm:{searchWord:"",category:""}}},props:["categoryList"],methods:{handleSubmit:function(){this.$emit("submit",this.searchForm)},handleChange:function(t){this.searchForm.category=t}}},l=s,h=(r("b558"),r("2877")),f=Object(h["a"])(l,c,u,!1,null,"a9fb5a26",null),d=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-table",{attrs:{columns:t.columns,"data-source":t.tableData,pagination:t.page},on:{change:t.changePage},scopedSlots:t._u([{key:"operation",fn:function(e,n){return r("div",{},[r("a-button",{on:{click:function(e){return t.productEdit(n)}}},[t._v("编辑")]),r("a-button",{on:{click:function(e){return t.productRemove(n)}}},[t._v("删除")])],1)}}])})},m=[],y=[{title:"ID",dataIndex:"id",key:"id"},{title:"标题",dataIndex:"title",key:"title",ellipsis:!0},{title:"描述",dataIndex:"desc",key:"desc",ellipsis:!0},{title:"类目",dataIndex:"categoryName",key:"category"},{title:"预售价格",dataIndex:"price",key:"price"},{title:"折扣价格",dataIndex:"price_off",key:"price_off"},{title:"标签",dataIndex:"tags",key:"tags",ellipsis:!0},{title:"限制购买数量",dataIndex:"inventory",key:"inventory"},{title:"上架状态",dataIndex:"status",key:"status",customRender:function(t,e){return 1===e.status?"上架":"下架"}},{title:"操作",dataIndex:"operation",key:"operation",width:200,scopedSlots:{customRender:"operation"}}],g={data:function(){return{columns:y}},name:"productTable",props:["data","page"],computed:{tableData:function(){return this.data.map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{key:t.id})}))}},methods:{changePage:function(t){this.$emit("change",t)},productEdit:function(t){this.$emit("edit",t)},productRemove:function(t){this.$emit("remove",t)}}},v=g,b=Object(h["a"])(v,p,m,!1,null,"4f4968e5",null),w=b.exports,x=r("c4c8"),L=r("c405"),E={data:function(){return{tableData:[],searchForm:{},categoryList:[],page:{current:1,pageSize:10,showSizeChanger:!0,total:68},categoryObj:{}}},name:"product",components:{searchBox:d,productTable:w},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L["a"].list().then((function(e){t.categoryList=e.data,e.data.forEach((function(e){t.categoryObj[e.id]=e}))}));case 2:t.getTableData();case 3:case"end":return e.stop()}}),e)})))()},methods:{searchSubmit:function(t){this.searchForm=t,this.getTableData()},getTableData:function(){var t=this;x["a"].list(Object(o["a"])({page:this.page.current,size:this.page.pageSize},this.searchForm)).then((function(e){t.page.total=e.total,t.tableData=e.data.map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{categoryName:t.categoryObj[e.category].name})}))}))},changePage:function(t){this.page=t,this.getTableData()},productEdit:function(t){this.$router.push({name:"ProductEdit",params:{id:t.id}})},productRemove:function(t){var e=this;this.$confirm({title:"确认删除?",content:"确认删除标题".concat(t.title,"的商品吗？？"),onOk:function(){x["a"].remove({id:t.id}).then((function(){e.getTableData()}))},onCancel:function(){},class:"confirm-btn"})}}},_=E,k=(r("ac60"),Object(h["a"])(_,n,a,!1,null,"0173b533",null));e["default"]=k.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(D){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,o=Object.create(a.prototype),i=new F(n||[]);return o._invoke=k(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function y(){}function g(){}function v(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(I([])));x&&x!==r&&n.call(x,o)&&(b=x);var L=v.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function k(t,e,r){var n=h;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return P()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=L.constructor=v,v.constructor=g,g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),u(L,c,"Generator"),L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},abf4:function(t,e,r){},ac60:function(t,e,r){"use strict";r("1f9d")},b558:function(t,e,r){"use strict";r("abf4")},c405:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/category/all",{params:t})}}},c4c8:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/products/all",{params:t})},remove:function(t){return n["a"].delete("/products/".concat(t.id))},add:function(t){return n["a"].post("/products/add",t)},detail:function(t){return n["a"].get("/products/".concat(t))},edit:function(t){return n["a"].put("/products/edit",t)}}}}]);
//# sourceMappingURL=chunk-5abb103f.d8aa5923.js.map