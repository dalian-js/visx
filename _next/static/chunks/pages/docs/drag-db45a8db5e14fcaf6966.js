_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[73],{"/B0Q":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n("W1cA");const i=Symbol("implicit");function a(){var e=new Map,t=[],n=[],o=i;function u(r){var a=r+"",u=e.get(a);if(!u){if(o!==i)return o;e.set(a,u=t.push(r))}return n[(u-1)%n.length]}return u.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;for(const r of n){const n=r+"";e.has(n)||e.set(n,t.push(r))}return u},u.range=function(e){return arguments.length?(n=Array.from(e),u):n.slice()},u.unknown=function(e){return arguments.length?(o=e,u):o},u.copy=function(){return a(t,n).unknown(o)},r.b.apply(u,arguments),u}},"1Wmu":function(e,t,n){"use strict";function r(e,t){e(t)}n.d(t,"a",(function(){return r}))},"201w":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("J4UP");function i(e){return Object(r.a)(e)}},"Cf/J":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),u=["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.children,n=e.id,r=e.from,i=e.to,a=e.x1,c=e.y1,d=e.x2,l=e.y2,f=e.fromOffset,p=void 0===f?"0%":f,g=e.fromOpacity,m=void 0===g?1:g,y=e.toOffset,h=void 0===y?"100%":y,x=e.toOpacity,b=void 0===x?1:x,v=e.rotate,O=e.transform,j=e.vertical,S=void 0===j||j,_=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,u),w=a,E=d,T=c,D=l;return!S||w||E||T||D||(w="0",E="0",T="0",D="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",s({id:n,x1:w,y1:T,x2:E,y2:D,gradientTransform:v?"rotate("+v+")":O},_),!!t&&t,!t&&o.a.createElement("stop",{offset:p,stopColor:r,stopOpacity:m}),!t&&o.a.createElement("stop",{offset:h,stopColor:i,stopOpacity:b})))}c.propTypes={id:i.a.string.isRequired,from:i.a.string,to:i.a.string,x1:i.a.oneOfType([i.a.string,i.a.number]),x2:i.a.oneOfType([i.a.string,i.a.number]),y1:i.a.oneOfType([i.a.string,i.a.number]),y2:i.a.oneOfType([i.a.string,i.a.number]),fromOffset:i.a.oneOfType([i.a.string,i.a.number]),fromOpacity:i.a.oneOfType([i.a.string,i.a.number]),toOffset:i.a.oneOfType([i.a.string,i.a.number]),toOpacity:i.a.oneOfType([i.a.string,i.a.number]),rotate:i.a.oneOfType([i.a.string,i.a.number]),transform:i.a.string,children:i.a.node,vertical:i.a.bool}},"D+es":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("/B0Q"),i=n("xx0A"),a=Object(i.b)("domain","range","reverse","unknown");function o(e){return a(Object(r.a)(),e)}},D5YV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("jg1C"),i=(n("ERkP"),n("w3y7")),a=n("i9k6"),o=n("wEgr");n.d(t,"packageJson",(function(){return o}));var u={background:"#c4c3cb",borderRadius:14},s={color:"#6437d6",zIndex:1};function c(){return Object(r.jsx)(a.a,{title:"Drag i",description:"<Drag.Drag />>",exampleRenderer:i.a,exampleUrl:"/drag-i",tileStyles:u,detailsStyles:s})}},J4UP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const r=1/4294967296;function i(e=Math.random()){let t=0|(0<=e&&e<1?e/r:Math.abs(e));return()=>(t=1664525*t+1013904223|0,r*(t>>>0))}},LHst:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("rkTo");function i(e,t){return new r.a({x:e.x+t.x,y:e.y+t.y})}},"PL/t":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/drag",function(){return n("mz/g")}])},Q0jm:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("rkTo");function i(e,t){return new r.a({x:e.x-t.x,y:e.y-t.y})}},"VB+g":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("rkTo"),i=n("ZQHj");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={x:0,y:0};function u(e,t){if(!e||!t)return null;var n=function(e){if(!e)return a({},o);if(Object(i.g)(e))return e.changedTouches.length>0?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:a({},o);if(Object(i.c)(e))return{x:e.clientX,y:e.clientY};var t=null==e?void 0:e.target,n=t&&"getBoundingClientRect"in t?t.getBoundingClientRect():null;return n?{x:n.x+n.width/2,y:n.y+n.height/2}:a({},o)}(t),u=Object(i.d)(e)?e.ownerSVGElement:e,s=Object(i.e)(u)?u.getScreenCTM():null;if(Object(i.f)(u)&&s){var c=u.createSVGPoint();return c.x=n.x,c.y=n.y,c=c.matrixTransform(s.inverse()),new r.a({x:c.x,y:c.y})}var d=e.getBoundingClientRect();return new r.a({x:n.x-d.left-e.clientLeft,y:n.y-d.top-e.clientTop})}},Vi0D:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d}));var r=n("+Y26"),i=n("M3gT"),a=n("Ddjo"),o=n("Xyxy"),u=n("Q4nK"),s={expand:r.a,diverging:i.a,none:a.a,silhouette:o.a,wiggle:u.a},c=Object.keys(s);function d(e){return e&&s[e]||s.none}},ZQHj:function(e,t,n){"use strict";function r(e){return!!e&&e instanceof Element}function i(e){return!!e&&(e instanceof SVGElement||"ownerSVGElement"in e)}function a(e){return!!e&&"createSVGPoint"in e}function o(e){return!!e&&"getScreenCTM"in e}function u(e){return!!e&&"changedTouches"in e}function s(e){return!!e&&"clientX"in e}function c(e){return!!e&&(e instanceof Event||"nativeEvent"in e&&e.nativeEvent instanceof Event)}n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c}))},dGDr:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return h}));var r=n("mBAT"),i=n("KdQ8"),a=n("+pY8"),o=n("lg8u"),u=n("FVKn"),s=n("uvDt"),c=n("1Wmu"),d=n("oWfS"),l=n("Vi0D");function f(e){var t=void 0===e?{}:e,n=t.innerRadius,i=t.outerRadius,a=t.cornerRadius,o=t.startAngle,u=t.endAngle,s=t.padAngle,d=t.padRadius,l=Object(r.a)();return null!=n&&Object(c.a)(l.innerRadius,n),null!=i&&Object(c.a)(l.outerRadius,i),null!=a&&Object(c.a)(l.cornerRadius,a),null!=o&&Object(c.a)(l.startAngle,o),null!=u&&Object(c.a)(l.endAngle,u),null!=s&&Object(c.a)(l.padAngle,s),null!=d&&Object(c.a)(l.padRadius,d),l}function p(e){var t=void 0===e?{}:e,n=t.x,r=t.x0,a=t.x1,o=t.y,u=t.y0,s=t.y1,d=t.defined,l=t.curve,f=Object(i.a)();return n&&Object(c.a)(f.x,n),r&&Object(c.a)(f.x0,r),a&&Object(c.a)(f.x1,a),o&&Object(c.a)(f.y,o),u&&Object(c.a)(f.y0,u),s&&Object(c.a)(f.y1,s),d&&f.defined(d),l&&f.curve(l),f}function g(e){var t=void 0===e?{}:e,n=t.x,r=t.y,i=t.defined,o=t.curve,u=Object(a.a)();return n&&Object(c.a)(u.x,n),r&&Object(c.a)(u.y,r),i&&u.defined(i),o&&u.curve(o),u}function m(e){var t=void 0===e?{}:e,n=t.startAngle,r=t.endAngle,i=t.padAngle,a=t.value,u=t.sort,s=t.sortValues,d=Object(o.a)();return(null===u||null!=u)&&d.sort(u),(null===s||null!=s)&&d.sortValues(s),null!=a&&d.value(a),null!=i&&Object(c.a)(d.padAngle,i),null!=n&&Object(c.a)(d.startAngle,n),null!=r&&Object(c.a)(d.endAngle,r),d}function y(e){var t=void 0===e?{}:e,n=t.angle,r=t.radius,i=t.defined,a=t.curve,o=Object(u.a)();return n&&Object(c.a)(o.angle,n),r&&Object(c.a)(o.radius,r),i&&o.defined(i),a&&o.curve(a),o}function h(e){var t=e.keys,n=e.value,r=e.order,i=e.offset,a=Object(s.a)();return t&&a.keys(t),n&&Object(c.a)(a.value,n),r&&a.order(Object(d.c)(r)),i&&a.offset(Object(l.c)(i)),a}},geX1:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),i=n.n(r),a=n("O94r"),o=n.n(a),u=n("dGDr"),s=["children","data","x","y","fill","className","curve","innerRef","defined"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){var t=e.children,n=e.data,r=void 0===n?[]:n,a=e.x,d=e.y,l=e.fill,f=void 0===l?"transparent":l,p=e.className,g=e.curve,m=e.innerRef,y=e.defined,h=void 0===y?function(){return!0}:y,x=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,s),b=Object(u.c)({x:a,y:d,defined:h,curve:g});return t?i.a.createElement(i.a.Fragment,null,t({path:b})):i.a.createElement("path",c({ref:m,className:o()("visx-linepath",p),d:b(r)||"",fill:f,strokeLinecap:"round"},x))}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=f;var r=c(n("aWzz")),i=c(n("FGHv")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n("ERkP")),o=c(n("LaGA")),u=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=[];function f(e){var t=e.className,n=e.children,r=e.debounceTime,s=void 0===r?300:r,c=e.ignoreDimensions,f=void 0===c?l:c,p=e.parentSizeStyles,g=void 0===p?{width:"100%",height:"100%"}:p,m=e.enableDebounceLeadingCall,y=void 0===m||m,h=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,u),x=(0,a.useRef)(null),b=(0,a.useRef)(0),v=(0,a.useState)({width:0,height:0,top:0,left:0}),O=v[0],j=v[1],S=(0,a.useMemo)((function(){var e=Array.isArray(f)?f:[f];return(0,i.default)((function(t){j((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),s,{leading:y})}),[s,y,f]);return(0,a.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,r=t.top,i=t.width,a=t.height;b.current=window.requestAnimationFrame((function(){S({width:i,height:a,top:r,left:n})}))}))}));return x.current&&e.observe(x.current),function(){window.cancelAnimationFrame(b.current),e.disconnect(),null!=S&&S.cancel&&S.cancel()}}),[S]),a.default.createElement("div",d({style:g,ref:x,className:t},h),n(d({},O,{ref:x.current,resize:S})))}f.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("zjfJ"),i=n("jg1C"),a=n("yFcC"),o=n.n(a),u=n("ERkP"),s=n.n(u),c=n("jvFD"),d=n.n(c),l=n("i6Tx"),f=n.n(l);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){var t,n,a=e.description,u=e.detailsHeight,c=void 0===u?76:u,l=e.detailsStyles,g=e.exampleProps,m=e.exampleRenderer,y=e.exampleUrl,h=e.tileStyles,x=e.title;return Object(i.jsxs)(i.Fragment,{children:[(t=y,n=Object(i.jsxs)("div",{style:h,className:"jsx-713312509 gallery-tile",children:[Object(i.jsx)("div",{className:"jsx-713312509 image",children:Object(i.jsx)(f.a,{children:function(e){var t=e.width,n=e.height;return s.a.createElement(m,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(x||a?c:0)},g))}})}),(x||a)&&Object(i.jsxs)("div",{style:l,className:"jsx-713312509 details",children:[x&&Object(i.jsx)("div",{className:"jsx-713312509 title",children:x}),a&&Object(i.jsx)("div",{className:"jsx-713312509 description",children:Object(i.jsx)("pre",{className:"jsx-713312509",children:a})})]})]}),t?Object(i.jsx)(d.a,{href:t,children:n}):n),Object(i.jsx)(o.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{g.displayName="GalleryTile",g.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:g.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(m){}},jpI8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("VB+g"),i=n("ZQHj");function a(e,t){if(Object(i.a)(e)&&t)return Object(r.a)(e,t);if(Object(i.b)(e)){var n=e,a=n.target;if(a)return Object(r.a)(a,n)}return null}},"m+Ft":function(e,t,n){"use strict";function r(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function i(e){this._context=e}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}},t.b=function(e){return new i(e)}},"mz/g":function(e,t,n){"use strict";n.r(t);var r=n("jg1C"),i=n("ERkP"),a=n("zjfJ"),o=n("zygG"),u=n("rkTo"),s=n("Q0jm"),c=n("LHst"),d=n("jpI8");function l(e){var t=Object(i.useState)(e),n=t[0],r=t[1],a=Object(i.useRef)(null),o=Object(i.useCallback)((function(e,t){a.current=t||null,r(e)}),[r]);return Object(i.useLayoutEffect)((function(){a.current&&(a.current(n),a.current=null)}),[n]),[n,o]}try{l.displayName="useStateWithCallback",l.__docgenInfo={description:"A hook that exposes a setState(state, callback) API similar to a component class.",displayName:"useStateWithCallback",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/util/useStateWithCallback.ts#useStateWithCallback"]={docgenInfo:l.__docgenInfo,name:"useStateWithCallback",path:"../visx-drag/src/util/useStateWithCallback.ts#useStateWithCallback"})}catch(T){}function f(e,t,n){return Math.min(Math.max(e,t),n)}try{f.displayName="clampNumber",f.__docgenInfo={description:"Clamps number within the inclusive lower and upper bounds.",displayName:"clampNumber",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/util/clampNumber.ts#clampNumber"]={docgenInfo:f.__docgenInfo,name:"clampNumber",path:"../visx-drag/src/util/clampNumber.ts#clampNumber"})}catch(T){}function p(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n,r=e,i=1/0,a=p(t);try{for(a.s();!(n=a.n()).done;){var o=n.value,u=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2));u<i&&(i=u,r={x:o.x,y:o.y})}}catch(s){a.e(s)}finally{a.f()}return r}try{m.displayName="getClosestPoint",m.__docgenInfo={description:"Gets closest point from list of points",displayName:"getClosestPoint",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/util/getClosestPoint.ts#getClosestPoint"]={docgenInfo:m.__docgenInfo,name:"getClosestPoint",path:"../visx-drag/src/util/getClosestPoint.ts#getClosestPoint"})}catch(T){}function y(e,t){var n,r,i,a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.length>0?m(e,t):{x:f(e.x,null!==(n=o.xMin)&&void 0!==n?n:-1/0,null!==(r=o.xMax)&&void 0!==r?r:1/0),y:f(e.y,null!==(i=o.yMin)&&void 0!==i?i:-1/0,null!==(a=o.yMax)&&void 0!==a?a:1/0)}}try{y.displayName="restrictPoint",y.__docgenInfo={description:"Restrict a point to an area, or samples along a path.",displayName:"restrictPoint",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/util/restrictPoint.ts#restrictPoint"]={docgenInfo:y.__docgenInfo,name:"restrictPoint",path:"../visx-drag/src/util/restrictPoint.ts#restrictPoint"})}catch(T){}function h(e){return Object(i.useMemo)((function(){if(!e)return[];var t=e.getCTM()||new DOMMatrix;return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!e)return[];for(var r=[],i=e.getTotalLength(),a=0;a<=i;a+=n){var o=e.getPointAtLength(a).matrixTransform(t);r.push(o)}return r}(e,t)}),[null===e||void 0===e?void 0:e.getTotalLength()])}try{h.displayName="useSamplesAlongPath",h.__docgenInfo={description:"Return samples along a path, relative to the parent SVG",displayName:"useSamplesAlongPath",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/util/useSamplesAlongPath.ts#useSamplesAlongPath"]={docgenInfo:h.__docgenInfo,name:"useSamplesAlongPath",path:"../visx-drag/src/util/useSamplesAlongPath.ts#useSamplesAlongPath"})}catch(T){}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resetOnStart,n=void 0!==t&&t,r=e.snapToPointer,a=void 0===r||r,f=e.onDragEnd,p=e.onDragMove,g=e.onDragStart,m=e.x,x=e.y,v=e.dx,O=e.dy,j=e.isDragging,S=e.restrict,_=void 0===S?{}:S,w=e.restrictToPath,E=Object(i.useRef)({x:m,y:x,dx:v,dy:O}),T=l({x:m,y:x,dx:null!==v&&void 0!==v?v:0,dy:null!==O&&void 0!==O?O:0,isDragging:!1}),D=Object(o.a)(T,2),P=D[0],k=D[1],C=Object(i.useState)(new u.a({x:0,y:0})),A=C[0],R=C[1];Object(i.useEffect)((function(){E.current.x===m&&E.current.y===x&&E.current.dx===v&&E.current.dy===O||(E.current={x:m,y:x,dx:v,dy:O},k((function(e){return b(b({},e),{},{x:m,y:x,dx:null!==v&&void 0!==v?v:0,dy:null!==O&&void 0!==O?O:0})})))})),Object(i.useEffect)((function(){void 0!==j&&P.isDragging!==j&&k((function(e){return b(b({},e),{},{isDragging:j})}))}),[P.isDragging,j,k]);var M=h(w),V=Object(i.useCallback)((function(e){e.persist(),k((function(t){var r=t.x,i=void 0===r?0:r,o=t.y,c=void 0===o?0:o,l=t.dx,f=t.dy,p=new u.a({x:(i||0)+l,y:(c||0)+f}),g=Object(d.a)(e)||new u.a({x:0,y:0}),m=y(a?g:p,M,_);return R(Object(s.a)(p,g)),{isDragging:!0,dx:n?0:t.dx,dy:n?0:t.dy,x:n?m.x:m.x-t.dx,y:n?m.y:m.y-t.dy}}),g&&function(t){g(b(b({},t),{},{event:e}))})}),[g,n,_,M,k,a]),N=Object(i.useCallback)((function(e){e.persist(),k((function(t){if(!t.isDragging)return t;var n=t.x,r=void 0===n?0:n,i=t.y,o=void 0===i?0:i,s=Object(d.a)(e)||new u.a({x:0,y:0}),l=y(a?s:Object(c.a)(s,A),M,_);return b(b({},t),{},{dx:l.x-r,dy:l.y-o})}),p&&function(t){t.isDragging&&p(b(b({},t),{},{event:e}))})}),[k,p,a,A,M,_]),q=Object(i.useCallback)((function(e){e.persist(),k((function(e){return b(b({},e),{},{isDragging:!1})}),f&&function(t){f(b(b({},t),{},{event:e}))})}),[f,k]);return b(b({},P),{},{dragEnd:q,dragMove:N,dragStart:V})}try{v.displayName="useDrag",v.__docgenInfo={description:"Hook for dragging, returns a `UseDrag` object.",displayName:"useDrag",props:{resetOnStart:{defaultValue:{value:!1},description:"Whether to reset drag state upon the start of a new drag.",name:"resetOnStart",required:!1,type:{name:"boolean | undefined"}},onDragEnd:{defaultValue:null,description:"Optional callback invoked upon drag end.",name:"onDragEnd",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragMove:{defaultValue:null,description:"Optional callback invoked upon drag movement.",name:"onDragMove",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragStart:{defaultValue:null,description:"Optional callback invoked upon drag start.",name:"onDragStart",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},x:{defaultValue:null,description:"Optionally set the initial drag x, or override the current drag x.",name:"x",required:!1,type:{name:"number | undefined"}},y:{defaultValue:null,description:"Optionally set the initial drag y, or override the current drag y.",name:"y",required:!1,type:{name:"number | undefined"}},dx:{defaultValue:null,description:"Optionally set the initial drag dx, or override the current drag dx.",name:"dx",required:!1,type:{name:"number | undefined"}},dy:{defaultValue:null,description:"Optionally set the initial drag dy, or override the current drag dy.",name:"dy",required:!1,type:{name:"number | undefined"}},isDragging:{defaultValue:null,description:"If defined, parent controls dragging state.",name:"isDragging",required:!1,type:{name:"boolean | undefined"}},snapToPointer:{defaultValue:{value:!0},description:"Snap element being dragged to middle of pointer.",name:"snapToPointer",required:!1,type:{name:"boolean | undefined"}},restrict:{defaultValue:{value:"{}"},description:"Options for limiting dragging in the x and y plane.",name:"restrict",required:!1,type:{name:"{ xMin?: number | undefined; xMax?: number | undefined; yMin?: number | undefined; yMax?: number | undefined; } | undefined"}},restrictToPath:{defaultValue:null,description:"Limit drag to an SVG path. Overrides `restrict` constraints.",name:"restrictToPath",required:!1,type:{name:"SVGGeometryElement | null | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/useDrag.ts#useDrag"]={docgenInfo:v.__docgenInfo,name:"useDrag",path:"../visx-drag/src/useDrag.ts#useDrag"})}catch(T){}function O(e){var t=e.captureDragArea,n=void 0===t||t,i=e.snapToPointer,a=void 0===i||i,o=e.children,u=e.dx,s=e.dy,c=e.height,d=e.onDragEnd,l=e.onDragMove,f=e.onDragStart,p=e.resetOnStart,g=e.width,m=v({resetOnStart:p,snapToPointer:a,onDragEnd:d,onDragMove:l,onDragStart:f,x:e.x,y:e.y,dx:u,dy:s,isDragging:e.isDragging,restrict:e.restrict,restrictToPath:e.restrictToPath});return Object(r.jsxs)(r.Fragment,{children:[m.isDragging&&n&&Object(r.jsx)("rect",{width:g,height:c,onPointerDown:m.dragStart,onPointerMove:m.dragMove,onPointerUp:m.dragEnd,fill:"transparent"}),o(m)]})}try{O.displayName="Drag",O.__docgenInfo={description:"",displayName:"Drag",props:{resetOnStart:{defaultValue:null,description:"Whether to reset drag state upon the start of a new drag.",name:"resetOnStart",required:!1,type:{name:"boolean | undefined"}},onDragEnd:{defaultValue:null,description:"Optional callback invoked upon drag end.",name:"onDragEnd",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragMove:{defaultValue:null,description:"Optional callback invoked upon drag movement.",name:"onDragMove",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},onDragStart:{defaultValue:null,description:"Optional callback invoked upon drag start.",name:"onDragStart",required:!1,type:{name:"((args: HandlerArgs) => void) | undefined"}},x:{defaultValue:null,description:"Optionally set the initial drag x, or override the current drag x.",name:"x",required:!1,type:{name:"number | undefined"}},y:{defaultValue:null,description:"Optionally set the initial drag y, or override the current drag y.",name:"y",required:!1,type:{name:"number | undefined"}},dx:{defaultValue:null,description:"Optionally set the initial drag dx, or override the current drag dx.",name:"dx",required:!1,type:{name:"number | undefined"}},dy:{defaultValue:null,description:"Optionally set the initial drag dy, or override the current drag dy.",name:"dy",required:!1,type:{name:"number | undefined"}},isDragging:{defaultValue:null,description:"If defined, parent controls dragging state.\nIf defined, parent controls dragging state.",name:"isDragging",required:!1,type:{name:"boolean | undefined"}},snapToPointer:{defaultValue:{value:!0},description:"Snap element being dragged to middle of pointer.",name:"snapToPointer",required:!1,type:{name:"boolean | undefined"}},restrict:{defaultValue:null,description:"Options for limiting dragging in the x and y plane.",name:"restrict",required:!1,type:{name:"{ xMin?: number | undefined; xMax?: number | undefined; yMin?: number | undefined; yMax?: number | undefined; } | undefined"}},restrictToPath:{defaultValue:null,description:"Limit drag to an SVG path. Overrides `restrict` constraints.",name:"restrictToPath",required:!1,type:{name:"SVGGeometryElement | null | undefined"}},children:{defaultValue:null,description:"Children render function which is passed the state of dragging and callbacks for drag start/end/move.",name:"children",required:!0,type:{name:"(args: UseDrag) => ReactNode"}},width:{defaultValue:null,description:"Width of the drag container.",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Height of the drag container.",name:"height",required:!0,type:{name:"number"}},captureDragArea:{defaultValue:{value:!0},description:"Whether to render an invisible rect below children to capture the drag area as defined by width and height.",name:"captureDragArea",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-drag/src/Drag.tsx#Drag"]={docgenInfo:O.__docgenInfo,name:"Drag",path:"../visx-drag/src/Drag.tsx#Drag"})}catch(T){}var j=n("QnPE"),S=n("D5YV"),_=n("sU+B"),w=[v,O],E=[S.default,_.default];t.default=function(){return Object(r.jsx)(j.a,{components:w,examples:E,readme:'# @visx/drag\n\n<a title="@visx/drag npm downloads" href="https://www.npmjs.com/package/@visx/drag">\n  <img src="https://img.shields.io/npm/dm/@visx/drag.svg?style=flat-square" />\n</a>\n\n`@visx/drag` provides `react` components and hooks for making items within an interface (or chart) draggable.\n\n## Installation\n\n```\nnpm install --save @visx/drag\n```\n',visxPackage:"drag"})}},oWfS:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d}));var r=n("Zx3a"),i=n("c6zU"),a=n("yU24"),o=n("V+6I"),u=n("NKRu"),s={ascending:r.a,descending:i.a,insideout:a.a,none:o.a,reverse:u.a},c=Object.keys(s);function d(e){return e&&s[e]||s.none}},rkTo:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));var i=function(){function e(e){var t=e.x,n=void 0===t?0:t,i=e.y,a=void 0===i?0:i;r(this,"x",0),r(this,"y",0),this.x=n,this.y=a}var t=e.prototype;return t.value=function(){return{x:this.x,y:this.y}},t.toArray=function(){return[this.x,this.y]},e}()},w3y7:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n("jg1C"),i=n("yFcC"),a=n.n(i),o=n("ERkP"),u=n.n(o),s=n("D+es"),c=n("Cf/J"),d=n("aWzz"),l=n.n(d),f=n("OSpJ");function p(e){var t=e.captureDragArea,n=void 0===t||t,r=e.snapToPointer,i=void 0===r||r,a=e.children,o=e.dx,s=e.dy,c=e.height,d=e.onDragEnd,l=e.onDragMove,p=e.onDragStart,g=e.resetOnStart,m=e.width,y=e.x,h=e.y,x=e.isDragging,b=e.restrict,v=e.restrictToPath,O=Object(f.a)({resetOnStart:g,snapToPointer:i,onDragEnd:d,onDragMove:l,onDragStart:p,x:y,y:h,dx:o,dy:s,isDragging:x,restrict:b,restrictToPath:v});return u.a.createElement(u.a.Fragment,null,O.isDragging&&n&&u.a.createElement("rect",{width:m,height:c,onPointerDown:O.dragStart,onPointerMove:O.dragMove,onPointerUp:O.dragEnd,fill:"transparent"}),a(O))}p.propTypes={children:l.a.func.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,captureDragArea:l.a.bool,isDragging:l.a.bool};var g=n("201w"),m=function(e){var t=e.width,n=e.height,r=Object(g.a)(.2),i=Object(g.a)(.3),a=Object(g.a)(.4);return new Array(t<360?40:185).fill(1).map((function(e,o){var u=25-20*r();return{id:"".concat(o),radius:u,x:Math.round(i()*(t-2*u)+u),y:Math.round(a()*(n-2*u)+u)}}))},y=m;try{m.displayName="generateCircles",m.__docgenInfo={description:"",displayName:"generateCircles",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-drag-i/generateCircles.ts#generateCircles"]={docgenInfo:m.__docgenInfo,name:"generateCircles",path:"src/sandboxes/visx-drag-i/generateCircles.ts#generateCircles"})}catch(b){}var h=["#025aac","#02cff9","#02efff","#03aeed","#0384d7","#edfdff","#ab31ff","#5924d7","#d145ff","#1a02b1","#e582ff","#ff00d4","#270eff","#827ce2"];function x(e){var t=e.width,n=e.height,i=Object(o.useState)([]),u=i[0],d=i[1];Object(o.useEffect)((function(){t>10&&n>10&&d(y({width:t,height:n}))}),[t,n]);var l=Object(o.useMemo)((function(){return Object(s.a)({range:h,domain:u.map((function(e){return e.id}))})}),[t,n]);return 0===u.length||t<10?null:Object(r.jsxs)("div",{style:{touchAction:"none"},className:"jsx-856181217 Drag",children:[Object(r.jsxs)("svg",{width:t,height:n,className:"jsx-856181217",children:[Object(r.jsx)(c.a,{id:"stroke",from:"#ff00a5",to:"#ffc500"}),Object(r.jsx)("rect",{fill:"#c4c3cb",width:t,height:n,rx:14,className:"jsx-856181217"}),u.map((function(e,i){return Object(r.jsx)(p,{width:t,height:n,x:e.x,y:e.y,onDragStart:function(){d(function(e,t){var n=[].concat(e),r=n.length-1,i=n.splice(t,1)[0];return n.splice(r,0,i),n}(u,i))},children:function(t){var n=t.dragStart,i=t.dragEnd,a=t.dragMove,o=t.isDragging,u=t.x,s=t.y,c=t.dx,d=t.dy;return Object(r.jsx)("circle",{cx:u,cy:s,r:o?e.radius+4:e.radius,fill:o?"url(#stroke)":l(e.id),transform:"translate(".concat(c,", ").concat(d,")"),fillOpacity:.9,stroke:o?"white":"transparent",strokeWidth:2,onMouseMove:a,onMouseUp:i,onMouseDown:n,onTouchStart:n,onTouchMove:a,onTouchEnd:i,className:"jsx-856181217"},"dot-".concat(e.id))}},"drag-".concat(e.id))}))]}),Object(r.jsx)("div",{className:"jsx-856181217 deets",children:Object(r.jsxs)("div",{className:"jsx-856181217",children:["Based on Mike Bostock's"," ",Object(r.jsx)("a",{href:"https://bl.ocks.org/mbostock/c206c20294258c18832ff80d8fd395c3",className:"jsx-856181217",children:"Circle Dragging II"})]})}),Object(r.jsx)(a.a,{id:"856181217",children:[".Drag.jsx-856181217{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","svg.jsx-856181217{margin:1rem 0;}",".deets.jsx-856181217{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:12px;}",".deets.jsx-856181217>div.jsx-856181217{margin:0.25rem;}"]})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-drag-i/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-drag-i/Example.tsx#Example"})}catch(b){}},wEgr:function(e){e.exports=JSON.parse('{"name":"@visx/demo-drag-i","description":"Standalone visx drag demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/drag":"latest","@visx/gradient":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","drag"]}')},zjfJ:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["PL/t",0,2,1,3,4,7,8,9,10,41]]]);