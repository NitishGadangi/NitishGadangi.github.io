_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=o,e.useAmp=function(){return o(a.default.useContext(u.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},u=n("lwAK");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,u=t.hasQuery,o=void 0!==u&&u;return n||a&&o}},1:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),a=n("vuIU"),u=n("Ji7U"),o=n("md7G"),c=n("foSv"),i=n("q1tI"),s=n.n(i),f=n("8Bbg"),p=n.n(f),l=n("8Kt/"),d=n.n(l),h=n("vOnD"),v=n("rOcY"),y=(n("9d8Q"),n("d+3G"),n("WMMs"),s.a.createElement);function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var g=n("/0gx"),_=function(t){Object(u.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return y(s.a.Fragment,null,y(d.a,null,y("title",null,v.siteTitle)),y(h.a,{theme:g},y(e,n)))}}]),n}(p.a);e.default=_},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var u=r?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),u=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),c=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var u=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);t.has(o)?u=!1:t.add(o)}switch(a.type){case"title":case"base":e.has(a.type)?u=!1:e.add(a.type);break;case"meta":for(var c=0,i=l.length;c<i;c++){var s=l[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?u=!1:n.add(s);else{var f=a.props[s],p=r[s]||new Set;p.has(f)?u=!1:(p.add(f),r[s]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},e)}h.rewind=function(){};var v=h;e.default=v},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),a=n("lwsE"),u=n("W8MJ"),o=n("7W2i"),c=n("a1gu"),i=n("Nsbk"),s=n("yXPU");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}var p=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var l=p(n("q1tI")),d=n("g/15");function h(t){return v.apply(this,arguments)}function v(){return(v=s(r.mark((function t(e){var n,a,u;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,a=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,a);case 3:return u=t.sent,t.abrupt("return",{pageProps:u});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps,e.NextWebVitalsMetric=d.NextWebVitalsMetric;var y=function(t){o(n,t);var e=f(n);function n(){return a(this,n),e.apply(this,arguments)}return u(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,a=t.__N_SSG,u=t.__N_SSP;return l.default.createElement(n,Object.assign({},r,a||u?{}:{url:m(e)}))}}]),n}(l.default.Component);function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",a=n||e;return t.push(r,a)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",a=n||e;return t.replace(r,a)}}}e.default=y,y.origGetInitialProps=h,y.getInitialProps=h},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),a=n("lwsE"),u=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),c=n("a1gu"),i=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=function(t){o(n,t);var e=s(n);function n(t){var u;return a(this,n),(u=e.call(this,t))._hasHeadManager=void 0,u.emitChange=function(){u._hasHeadManager&&u.props.headManager.updateHead(u.props.reduceComponentsToState(r(u.props.headManager.mountedInstances),u.props))},u._hasHeadManager=u.props.headManager&&u.props.headManager.mountedInstances,u}return u(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=p},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a}},[[1,0,2,5,1,3,4,11]]]);