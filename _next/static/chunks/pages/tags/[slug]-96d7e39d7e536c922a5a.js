_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"+KUy":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("8Kt/"),c=n.n(a),o=(n("YFqc"),n("q1tI")),i=n.n(o),s=n("5Yp1"),u=n("SMr6"),d=n("obyI"),l=(n("wHCo"),n("wd/R"),n("An97")),p=function(e){var t=e.tag,n=e.blogs,a=e.query;return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsxs)("title",{children:[t.name," | ",d.b]}),Object(r.jsx)("meta",{name:"description",content:"Daily News Analysis ".concat(t.name)}),Object(r.jsx)("link",{rel:"canonical",href:"".concat(d.d,"/tags/").concat(a.slug)}),Object(r.jsx)("meta",{property:"og:title",content:"".concat(t.name," | ").concat(d.b)}),Object(r.jsx)("meta",{property:"og:description",content:"Daily News Analysis ".concat(t.name)}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:url",content:"".concat(d.d,"/tags/").concat(a.slug)}),Object(r.jsx)("meta",{property:"og:site_name",content:"".concat(d.b)}),Object(r.jsx)("meta",{property:"og:image",content:"".concat(d.d,"/static/images/newsapp.jpg")}),Object(r.jsx)("meta",{property:"og:image:secure_url",content:"".concat(d.d,"/static/images/newsapp.jpg")}),Object(r.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),Object(r.jsx)("meta",{property:"fb:app_id",content:"".concat(d.e)})]}),Object(r.jsx)(s.a,{children:Object(r.jsx)("main",{style:{backgroundColor:"#e2dee2"},children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"col-md-12 pt-3",children:[Object(r.jsxs)("h1",{className:"display-4 font-weight-bold text-center",children:["Tags: ",t.name]}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-md-12",children:Object(r.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(r.jsx)("div",{children:Object(r.jsx)(l.a,{blog:e},t)})}))})})})})]})})})})})]})};p.getInitialProps=function(e){var t=e.query;return Object(u.d)(t.slug).then((function(e){if(!e.error)return{tag:e.tag,blogs:e.blogs,query:t};console.log(e.error)}))},t.default=p},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(c.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,c=e.hasQuery,o=void 0!==c&&c;return n||a&&o}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var c=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?c=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?c=!1:t.add(a.type);break;case"meta":for(var i=0,s=p.length;i<s;i++){var u=p[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var d=a.props[u],l=r[u]||new Set;l.has(d)?c=!1:(l.add(d),r[u]=l)}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var j=h;t.default=j},An97:function(e,t,n){"use strict";var r=n("nKUr"),a=n("YFqc"),c=n.n(a),o=n("wHCo"),i=n.n(o),s=n("wd/R"),u=n.n(s),d=n("obyI");n("qsEy");t.a=function(e){var t=e.blog;return Object(r.jsxs)("div",{className:"row medq",children:[Object(r.jsx)("div",{className:"col-md-4 medqimg",children:Object(r.jsx)("section",{children:Object(r.jsx)("img",{className:"img img-fluid",style:{height:200,width:300},src:"".concat(d.a,"/blog/photo/").concat(t.slug),alt:t.title})})}),Object(r.jsxs)("div",{className:"col-md-8",children:[Object(r.jsxs)("section",{children:[function(e){return e.categories.map((function(e,t){return Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{style:{display:0===t?"none":"",color:"rgba(68,68,68,.3)"},children:"\u2022"}),Object(r.jsx)(c.a,{href:"/categories/".concat(e.slug),children:Object(r.jsxs)("a",{style:{color:"red"},children:[" ",e.name," "]})},t)]})}))}(t),Object(r.jsx)("br",{})]}),Object(r.jsx)("header",{children:Object(r.jsx)("a",{className:"heading-title-new normal-title h3",href:"/blogs/".concat(t.slug),children:t.title})}),Object(r.jsx)("section",{children:Object(r.jsxs)("div",{style:{color:"rgba(68,68,68,.3)",paddingTop:-5,paddingBottom:5},children:[" \ud83d\udd50 ",u()(t.updatedAt).fromNow(),"\xa0 \ud83d\udcad ",Object(r.jsx)("a",{href:"/blogs/".concat(t.slug),style:{color:"rgba(68,68,68,.3)"},children:"Add Comment"})]})}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"pb-3",children:i()(t.excerpt)})})]})]})}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},SMr6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n("LpSC"),a=n.n(r),c=n("obyI"),o=(n("iuBY"),function(e,t){return a()("".concat(c.a,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}),i=function(){return a()("".concat(c.a,"/tags"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},s=function(e){return a()("".concat(c.a,"/tag/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},u=function(e,t){return a()("".concat(c.a,"/tag/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),c=n("i2R6"),o=(n("qXWd"),n("48fX")),i=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){o(n,e);var t=u(n);function n(e){var c;return a(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},aPr1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[slug]",function(){return n("+KUy")}])},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["aPr1",1,0,7,5,2,3,4,6]]]);