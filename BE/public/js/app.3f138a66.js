(function(t){function e(e){for(var r,o,c=e[0],i=e[1],s=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0f1fe012"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"52d56d1e"}[t]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02dd":function(t,e){t.exports={dev_domain:"http://45.63.18.119"}},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",{staticClass:"mt-5"},[n("b-row",[n("b-col",{attrs:{col:"",lg:"3"}},[n("Category",{attrs:{listCategory:t.$store.state.categories},on:{"insert-cat":function(e){return t.InsertNewCat()}}}),n("hr"),n("b-button",{attrs:{to:"/product/insert"}},[t._v("Thêm sản phẩm")])],1),n("b-col",{attrs:{col:"",lg:"9"}},[n("router-view")],1)],1)],1)],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("b-list-group",t._l(t.listCategory,(function(e){return n("b-list-group-item",{key:e.CatID,attrs:{to:"/cat/"+e.CatID+"/product"}},[t._v(t._s(e.CatName))])})),1),n("hr"),n("b-button",{attrs:{variant:"primary",to:"/cat/insert"}},[t._v("Thêm loại sản phẩm")])],1)},c=[],i={name:"Category",props:["listCategory"],data:function(){return{}},created:function(){},mouted:function(){}},s=i,l=(n("add2"),n("2877")),f=Object(l["a"])(s,u,c,!1,null,"678ff79a",null),d=f.exports,p=n("bc3a"),m=n.n(p),h=n("02dd"),b={components:{Category:d},data:function(){return{}},mounted:function(){var t=this;m.a.get("".concat(h["dev_domain"],"/cat")).then((function(e){t.$store.state.categories=e.data})).catch((function(){}))},method:{InsertNewCat:function(t){console.log("InsertNewCat",t),this.$store.state.categories.push(t)}}},g=b,v=(n("034f"),Object(l["a"])(g,o,a,!1,null,null,null)),y=v.exports,C=(n("d3b7"),n("e6cf"),n("8c4f")),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Category",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},_=[],j={name:"home",components:{Category:d}},O=j,P=Object(l["a"])(O,w,_,!1,null,null,null),x=P.exports;r["default"].use(C["a"]);var E=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/cat/:catID/product",name:"productbycat",component:function(){return n.e("about").then(n.bind(null,"ce26"))}},{path:"/product/insert",name:"insertProduct",component:function(){return n.e("about").then(n.bind(null,"47df"))}},{path:"/product/:id",name:"editProduct",component:function(){return n.e("about").then(n.bind(null,"581d"))}},{path:"/cat/insert",name:"editProduct",component:function(){return n.e("about").then(n.bind(null,"160f"))}}],S=new C["a"]({routes:E}),T=S,k=n("5f5b"),N=(n("f9e3"),n("2dd8"),n("2f62"));r["default"].use(N["a"]);var A=new N["a"].Store({state:{categories:[]}});r["default"].use(k["a"]),r["default"].config.productionTip=!1,new r["default"]({router:T,store:A,render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},"8bd5":function(t,e,n){},add2:function(t,e,n){"use strict";var r=n("8bd5"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3f138a66.js.map