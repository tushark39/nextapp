_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{iT7G:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/[slug]",function(){return c("we8M")}])},we8M:function(e,t,c){"use strict";c.r(t);var r=c("nKUr"),n=c("5Yp1"),s=c("vC6e"),a=c("z7pX"),i=c("cpVT"),l=(c("YFqc"),c("q1tI")),o=c("nOHt"),j=c.n(o),b=c("a6RD"),u=c.n(b),d=c("iuBY"),O=c("abxw"),h=c("SMr6"),m=c("zycw"),p=(c("91UR"),c("//g3")),f=c("obyI");function x(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function g(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?x(Object(c),!0).forEach((function(t){Object(i.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):x(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var v=u()((function(){return Promise.all([c.e(0),c.e(10),c.e(11)]).then(c.t.bind(null,"rmP6",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["rmP6"]},modules:["react-quill"]}}),y=Object(o.withRouter)((function(e){var t,c=e.router,n=Object(l.useState)(""),s=n[0],o=n[1],b=Object(l.useState)([]),u=b[0],x=b[1],y=Object(l.useState)([]),N=y[0],w=y[1],_=Object(l.useState)([]),P=_[0],D=_[1],k=Object(l.useState)([]),S=k[0],E=k[1],q=Object(l.useState)((t={title:"",error:"",success:"",formData:""},Object(i.a)(t,"title",""),Object(i.a)(t,"body",""),t)),C=q[0],T=q[1],U=C.error,Y=C.success,z=C.formData,F=C.title,M=Object(d.b)("token");Object(l.useEffect)((function(){T(g(g({},C),{},{formData:new FormData})),G(),X(),B()}),[c]);var G=function(){c.query.slug&&Object(m.g)(c.query.slug).then((function(e){e.error?console.log(e.error):(T(g(g({},C),{},{title:e.title})),o(e.body),I(e.categories),R(e.tags))}))},H=function(e){e.preventDefault();var t=new FormData;t.append("title",C.title),t.append("body",s),Object(m.h)(t,M,c.query.slug).then((function(e){e.error?T(g(g({},C),{},{error:e.error})):(T(g(g({},C),{},{title:"",success:'Blog titled "'.concat(e.title,'" is successfully updated')})),Object(d.c)()&&1===Object(d.c)().role?j.a.replace("/admin"):Object(d.c)()&&0===Object(d.c)().role&&j.a.replace("/user"))}))},I=function(e){var t=[];e.map((function(e,c){t.push(e._id)})),D(t)},R=function(e){var t=[];e.map((function(e,c){t.push(e._id)})),E(t)},X=function(){Object(O.b)().then((function(e){e.error?T(g(g({},C),{},{error:e.error})):x(e)}))},B=function(){Object(h.b)().then((function(e){e.error?T(g(g({},C),{},{error:e.error})):w(e)}))},J=function(e){return function(){T(g(g({},C),{},{error:""}));var t=P.indexOf(e),c=Object(a.a)(P);-1===t?c.push(e):c.splice(t,1),console.log(c),D(c),z.set("categories",c)}},A=function(e){return function(){T(g(g({},C),{},{error:""}));var t=S.indexOf(e),c=Object(a.a)(S);-1===t?c.push(e):c.splice(t,1),console.log(c),E(c),z.set("tags",c)}},K=function(e){return-1!==P.indexOf(e)},V=function(e){return-1!==S.indexOf(e)},W=function(e){return function(t){var c,r="photo"===e?t.target.files[0]:t.target.value;z.set(e,r),T(g(g({},C),{},(c={},Object(i.a)(c,e,r),Object(i.a)(c,"formData",z),Object(i.a)(c,"error",""),c)))}},L=function(e){o(e),z.set("body",e)};return Object(r.jsx)("div",{className:"container-fluid pb-5",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-8",children:[Object(r.jsxs)("form",{onSubmit:H,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"text-muted",children:"Title"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:F,onChange:W("title")})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(v,{modules:p.b,formats:p.a,value:s,placeholder:"Write something amazing...",onChange:L})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})})]}),Object(r.jsxs)("div",{className:"pt-3",children:[Object(r.jsx)("div",{className:"alert alert-success",style:{display:Y?"":"none"},children:Y}),Object(r.jsx)("div",{className:"alert alert-danger",style:{display:U?"":"none"},children:U})]}),s&&Object(r.jsx)("img",{src:"".concat(f.API,"/blog/photo/").concat(c.query.slug),alt:F,style:{width:"100%"}})]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"form-group pb-2",children:[Object(r.jsx)("h5",{children:"Featured image"}),Object(r.jsx)("hr",{}),Object(r.jsx)("small",{className:"text-muted",children:"Max size: 1mb"}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{className:"btn btn-outline-info",children:["Upload featured image",Object(r.jsx)("input",{onChange:W("photo"),type:"file",accept:"image/*",hidden:!0})]})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Categories"}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:u&&u.map((function(e,t){return Object(r.jsxs)("li",{className:"list-unstyled",children:[Object(r.jsx)("input",{onChange:J(e._id),checked:K(e._id),type:"checkbox",className:"mr-2"}),Object(r.jsx)("label",{className:"form-check-label",children:e.name})]},t)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Tags"}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:N&&N.map((function(e,t){return Object(r.jsxs)("li",{className:"list-unstyled",children:[Object(r.jsx)("input",{onChange:A(e._id),checked:V(e._id),type:"checkbox",className:"mr-2"}),Object(r.jsx)("label",{className:"form-check-label",children:e.name})]},t)}))})]})]})]})})}));t.default=function(){return Object(r.jsx)(n.a,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-12 pt-5 pb-5",children:Object(r.jsx)("h2",{children:"Update the blog"})}),Object(r.jsx)("div",{className:"col-md-12",children:Object(r.jsx)(y,{})})]})})})})}}},[["iT7G",1,0,7,5,2,3,4,6,9,8]]]);