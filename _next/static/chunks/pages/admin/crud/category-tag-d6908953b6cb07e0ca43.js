_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{Hde0:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("5Yp1"),o=n("vC6e"),s=n("cpVT"),a=n("q1tI"),i=n.n(a),u=(n("YFqc"),n("nOHt"),n("iuBY")),l=n("abxw");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){var e=Object(a.useState)({name:"",error:!1,success:!1,categories:[],removed:!1,reload:!1}),t=e[0],n=e[1],c=t.name,o=t.error,s=t.success,d=t.categories,f=t.removed,b=t.reload,m=Object(u.b)("token");Object(a.useEffect)((function(){O()}),[b]);var O=function(){Object(l.b)().then((function(e){e.error?console.log(e.error):n(j(j({},t),{},{categories:e}))}))},p=function(e){window.confirm("Are you sure you want to delete this category?")&&h(e)},h=function(e){Object(l.c)(e,m).then((function(e){e.error?console.log(e.error):n(j(j({},t),{},{error:!1,success:!1,name:"",removed:!f,reload:!b}))}))},g=function(e){e.preventDefault(),Object(l.a)({name:c},m).then((function(e){e.error?n(j(j({},t),{},{error:e.error,success:!1})):n(j(j({},t),{},{error:!1,success:!0,name:"",reload:!b}))}))},y=function(e){n(j(j({},t),{},{name:e.target.value,error:!1,success:!1,removed:""}))};return Object(r.jsxs)(i.a.Fragment,{children:[function(){if(s)return Object(r.jsx)("p",{className:"text-success",children:"Category is created"})}(),function(){if(o)return Object(r.jsx)("p",{className:"text-danger",children:"Category already exist"})}(),function(){if(f)return Object(r.jsx)("p",{className:"text-danger",children:"Category is removed"})}(),Object(r.jsxs)("div",{onMouseMove:function(e){n(j(j({},t),{},{error:!1,success:!1,removed:""}))},children:[Object(r.jsxs)("form",{onSubmit:g,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"text-muted",children:"Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",onChange:y,value:c,required:!0})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})})]}),d.map((function(e,t){return Object(r.jsx)("button",{onDoubleClick:function(){return p(e.slug)},title:"Double click to delete",className:"btn btn-outline-primary mr-1 ml-1 mt-3",children:e.name},t)}))]})]})},b=n("SMr6");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=Object(a.useState)({name:"",error:!1,success:!1,tags:[],removed:!1,reload:!1}),t=e[0],n=e[1],c=t.name,o=t.error,s=t.success,l=t.tags,d=t.removed,j=t.reload,f=Object(u.b)("token");Object(a.useEffect)((function(){m()}),[j]);var m=function(){Object(b.b)().then((function(e){e.error?console.log(e.error):n(O(O({},t),{},{tags:e}))}))},p=function(e){window.confirm("Are you sure you want to delete this Tag?")&&h(e)},h=function(e){Object(b.c)(e,f).then((function(e){e.error?console.log(e.error):n(O(O({},t),{},{error:!1,success:!1,name:"",removed:!d,reload:!j}))}))},g=function(e){e.preventDefault(),Object(b.a)({name:c},f).then((function(e){e.error?n(O(O({},t),{},{error:e.error,success:!1})):n(O(O({},t),{},{error:!1,success:!0,name:"",reload:!j}))}))},y=function(e){n(O(O({},t),{},{name:e.target.value,error:!1,success:!1,removed:""}))};return Object(r.jsxs)(i.a.Fragment,{children:[function(){if(s)return console.log("from tags"),Object(r.jsx)("p",{className:"text-success",children:"Tag is created"})}(),function(){if(o)return Object(r.jsx)("p",{className:"text-danger",children:"Tag already exist"})}(),function(){if(d)return Object(r.jsx)("p",{className:"text-danger",children:"Tag is removed"})}(),Object(r.jsxs)("div",{onMouseMove:function(e){n(O(O({},t),{},{error:!1,success:!1,removed:""}))},children:[Object(r.jsxs)("form",{onSubmit:g,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"text-muted",children:"Tag Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",onChange:y,value:c,required:!0})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})})]}),l.map((function(e,t){return Object(r.jsx)("button",{onDoubleClick:function(){return p(e.slug)},title:"Double click to delete",className:"btn btn-outline-primary mr-1 ml-1 mt-3",children:e.name},t)}))]})]})};t.default=function(){return Object(r.jsx)(c.a,{children:Object(r.jsx)(o.a,{children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-12 pt-5 pb-5",children:Object(r.jsx)("h2",{children:"Manage Categories and Tags"})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsx)(f,{})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsx)(p,{})})]})})})})}},SMr6:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n("LpSC"),c=n.n(r),o=n("obyI"),s=(n("iuBY"),function(e,t){return c()("".concat(o.API,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}),a=function(){return c()("".concat(o.API,"/tags"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},i=function(e){return c()("".concat(o.API,"/tag/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},u=function(e,t){return c()("".concat(o.API,"/tag/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},abxw:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n("LpSC"),c=n.n(r),o=n("obyI"),s=(n("iuBY"),function(e,t){return c()("".concat(o.API,"/category"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}),a=function(){return c()("".concat(o.API,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},i=function(e){return c()("".concat(o.API,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},u=function(e,t){return c()("".concat(o.API,"/category/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},nxd4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/category-tag",function(){return n("Hde0")}])},vC6e:function(e,t,n){"use strict";var r=n("nKUr"),c=n("q1tI"),o=n.n(c),s=n("nOHt"),a=n.n(s),i=n("iuBY");t.a=function(e){var t=e.children;return Object(c.useEffect)((function(){Object(i.c)()?1!==Object(i.c)().role&&a.a.push("/user"):a.a.push("/signin")}),[]),Object(r.jsx)(o.a.Fragment,{children:t})}}},[["nxd4",1,0,7,5,2,3,4,6]]]);