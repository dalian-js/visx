_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"3Dge":function(n,t,e){"use strict";e.r(t);var r=e("jg1C"),o=(e("ERkP"),e("6wy5")),i=e("erk3"),c=e("3Ng6");t.default=function(){return Object(r.jsx)(o.a,{component:i.a,title:"Annotation",codeSandboxDirectoryName:"visx-annotation",packageJson:c,children:"import React from 'react';\nimport { Label, Connector, CircleSubject, LineSubject } from '@visx/annotation';\nimport { LinePath } from '@visx/shape';\n\nimport ExampleControls from './ExampleControls';\nimport findNearestDatum from './findNearestDatum';\n\nexport type AnnotationProps = {\n  width: number;\n  height: number;\n  compact?: boolean;\n};\n\nexport const orange = '#ff7e67';\nexport const greens = ['#ecf4f3', '#68b0ab', '#006a71'];\n\nexport default function Example({ width, height, compact = false }: AnnotationProps) {\n  return (\n    <ExampleControls width={width} height={height} compact={compact}>\n      {({\n        AnnotationComponent,\n        annotationPosition,\n        approxTooltipHeight,\n        connectorType,\n        data,\n        editLabelPosition,\n        editSubjectPosition,\n        getDate,\n        getStockValue,\n        horizontalAnchor,\n        labelWidth,\n        setAnnotationPosition,\n        showAnchorLine,\n        subjectType,\n        subtitle,\n        title,\n        verticalAnchor,\n        xScale,\n        yScale,\n      }) => (\n        <svg width={width} height={height}>\n          <rect width={width} height={height} fill={greens[0]} />\n          <LinePath\n            stroke={greens[2]}\n            strokeWidth={2}\n            data={data}\n            x={(d) => xScale(getDate(d)) ?? 0}\n            y={(d) => yScale(getStockValue(d)) ?? 0}\n          />\n          <AnnotationComponent\n            width={width}\n            height={height}\n            x={annotationPosition.x}\n            y={annotationPosition.y}\n            dx={annotationPosition.dx}\n            dy={annotationPosition.dy}\n            canEditLabel={editLabelPosition}\n            canEditSubject={editSubjectPosition}\n            onDragEnd={({ event, ...nextPosition }) => {\n              // snap Annotation to the nearest data point\n              const nearestDatum = findNearestDatum({\n                accessor: subjectType === 'horizontal-line' ? getStockValue : getDate,\n                data,\n                scale: subjectType === 'horizontal-line' ? yScale : xScale,\n                value: subjectType === 'horizontal-line' ? nextPosition.y : nextPosition.x,\n              });\n              const x = xScale(getDate(nearestDatum)) ?? 0;\n              const y = yScale(getStockValue(nearestDatum)) ?? 0;\n\n              // flip label to keep in view\n              const shouldFlipDx =\n                (nextPosition.dx > 0 && x + nextPosition.dx + labelWidth > width) ||\n                (nextPosition.dx < 0 && x + nextPosition.dx - labelWidth <= 0);\n              const shouldFlipDy = // 100 is est. tooltip height\n                (nextPosition.dy > 0 && height - (y + nextPosition.dy) < approxTooltipHeight) ||\n                (nextPosition.dy < 0 && y + nextPosition.dy - approxTooltipHeight <= 0);\n              setAnnotationPosition({\n                x,\n                y,\n                dx: (shouldFlipDx ? -1 : 1) * nextPosition.dx,\n                dy: (shouldFlipDy ? -1 : 1) * nextPosition.dy,\n              });\n            }}\n          >\n            <Connector stroke={orange} type={connectorType} />\n            <Label\n              backgroundFill=\"white\"\n              showAnchorLine={showAnchorLine}\n              anchorLineStroke={greens[2]}\n              backgroundProps={{ stroke: greens[1] }}\n              fontColor={greens[2]}\n              horizontalAnchor={horizontalAnchor}\n              subtitle={subtitle}\n              title={title}\n              verticalAnchor={verticalAnchor}\n              width={labelWidth}\n            />\n            {subjectType === 'circle' && <CircleSubject stroke={orange} />}\n            {subjectType !== 'circle' && (\n              <LineSubject\n                orientation={subjectType === 'vertical-line' ? 'vertical' : 'horizontal'}\n                stroke={orange}\n                min={0}\n                max={subjectType === 'vertical-line' ? height : width}\n              />\n            )}\n          </AnnotationComponent>\n        </svg>\n      )}\n    </ExampleControls>\n  );\n}\n"})}},"67po":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("uKU/"),o=e("xx0A"),i=Object(o.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(n){return i(Object(r.a)(),n)}},BqYg:function(n,t){function e(n,t,e){var r,o,i,c,u;function a(){var l=Date.now()-c;l<t&&l>=0?r=setTimeout(a,t-l):(r=null,e||(u=n.apply(i,o),i=o=null))}null==t&&(t=100);var l=function(){i=this,o=arguments,c=Date.now();var l=e&&!r;return r||(r=setTimeout(a,t)),l&&(u=n.apply(i,o),i=o=null),u};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(u=n.apply(i,o),i=o=null,clearTimeout(r),r=null)},l}e.debounce=e,n.exports=e},LHst:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("rkTo");function o(n,t){return new r.a({x:n.x+t.x,y:n.y+t.y})}},Q0jm:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("rkTo");function o(n,t){return new r.a({x:n.x-t.x,y:n.y-t.y})}},"VB+g":function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("rkTo"),o=e("ZQHj");function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var c={x:0,y:0};function u(n,t){if(!n||!t)return null;var e=function(n){if(!n)return i({},c);if(Object(o.g)(n))return n.changedTouches.length>0?{x:n.changedTouches[0].clientX,y:n.changedTouches[0].clientY}:i({},c);if(Object(o.c)(n))return{x:n.clientX,y:n.clientY};var t=null==n?void 0:n.target,e=t&&"getBoundingClientRect"in t?t.getBoundingClientRect():null;return e?{x:e.x+e.width/2,y:e.y+e.height/2}:i({},c)}(t),u=Object(o.d)(n)?n.ownerSVGElement:n,a=Object(o.e)(u)?u.getScreenCTM():null;if(Object(o.f)(u)&&a){var l=u.createSVGPoint();return l.x=e.x,l.y=e.y,l=l.matrixTransform(a.inverse()),new r.a({x:l.x,y:l.y})}var s=n.getBoundingClientRect();return new r.a({x:e.x-s.left-n.clientLeft,y:e.y-s.top-n.clientTop})}},ZQHj:function(n,t,e){"use strict";function r(n){return!!n&&n instanceof Element}function o(n){return!!n&&(n instanceof SVGElement||"ownerSVGElement"in n)}function i(n){return!!n&&"createSVGPoint"in n}function c(n){return!!n&&"getScreenCTM"in n}function u(n){return!!n&&"changedTouches"in n}function a(n){return!!n&&"clientX"in n}function l(n){return!!n&&(n instanceof Event||"nativeEvent"in n&&n.nativeEvent instanceof Event)}e.d(t,"a",(function(){return r})),e.d(t,"d",(function(){return o})),e.d(t,"f",(function(){return i})),e.d(t,"e",(function(){return c})),e.d(t,"g",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"b",(function(){return l}))},Zbhd:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("PB0s"),o=e("XAd9"),i=e("Cyas"),c=e("VBI3");function u(n,t,e,u){var a,l=Object(r.c)(n,t,e);switch((u=Object(o.a)(null==u?",f":u)).type){case"s":var s=Math.max(Math.abs(n),Math.abs(t));return null!=u.precision||isNaN(a=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(n)))}(l,s))||(u.precision=a),Object(c.b)(u,s);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(a=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(i.a)(t)-Object(i.a)(n))+1}(l,Math.max(Math.abs(n),Math.abs(t))))||(u.precision=a-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(a=function(n){return Math.max(0,-Object(i.a)(Math.abs(n)))}(l))||(u.precision=a-2*("%"===u.type))}return Object(c.a)(u)}},geX1:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("ERkP"),o=e.n(r),i=e("O94r"),c=e.n(i),u=e("dGDr"),a=["children","data","x","y","fill","className","curve","innerRef","defined"];function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function s(n){var t=n.children,e=n.data,r=void 0===e?[]:e,i=n.x,s=n.y,f=n.fill,h=void 0===f?"transparent":f,d=n.className,p=n.curve,b=n.innerRef,v=n.defined,g=void 0===v?function(){return!0}:v,y=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,a),m=Object(u.c)({x:i,y:s,defined:g,curve:p});return t?o.a.createElement(o.a.Fragment,null,t({path:m})):o.a.createElement("path",l({ref:b,className:c()("visx-linepath",d),d:m(r)||"",fill:h,strokeLinecap:"round"},y))}},hdX1:function(n,t,e){"use strict";var r=e("ViZ6"),o=e.n(r);t.a=o()((function(n,t){try{var e=document.getElementById("__react_svg_text_measurement_id");if(!e){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.style.width="0",r.style.height="0",r.style.position="absolute",r.style.top="-100%",r.style.left="-100%",(e=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id","__react_svg_text_measurement_id"),r.appendChild(e),document.body.appendChild(r)}return Object.assign(e.style,t),e.textContent=n,e.getComputedTextLength()}catch(o){return null}}),(function(n,t){return n+"_"+JSON.stringify(t)}))},j1R1:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("ERkP"),o=e("leIH"),i=e.n(o),c=e("hdX1"),u=["verticalAnchor","scaleToFit","angle","width","lineHeight","capHeight","children","style"];function a(n){return"number"===typeof n}function l(n){return"number"===typeof n&&Number.isFinite(n)||"string"===typeof n}function s(n){var t=n.verticalAnchor,e=void 0===t?"end":t,o=n.scaleToFit,s=void 0!==o&&o,f=n.angle,h=n.width,d=n.lineHeight,p=void 0===d?"1em":d,b=n.capHeight,v=void 0===b?"0.71em":b,g=n.children,y=n.style,m=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,u),x=m.x,w=void 0===x?0:x,j=m.y,O=void 0===j?0:j,P=!l(w)||!l(O),E=Object(r.useMemo)((function(){return{wordsWithWidth:(null==g?[]:g.toString().split(/(?:(?!\u00A0+)\s+)/)).map((function(n){return{word:n,wordWidth:Object(c.a)(n,y)||0}})),spaceWidth:Object(c.a)("\xa0",y)||0}}),[g,y]),S=E.wordsWithWidth,T=E.spaceWidth,k=Object(r.useMemo)((function(){return P?[]:h||s?S.reduce((function(n,t){var e=t.word,r=t.wordWidth,o=n[n.length-1];if(o&&(null==h||s||(o.width||0)+r+T<h))o.words.push(e),o.width=o.width||0,o.width+=r+T;else{var i={words:[e],width:r};n.push(i)}return n}),[]):[{words:null==g?[]:g.toString().split(/(?:(?!\u00A0+)\s+)/)}]}),[P,h,s,g,S,T]),M=Object(r.useMemo)((function(){return P?"":"start"===e?i()("calc("+v+")"):"middle"===e?i()("calc("+(k.length-1)/2+" * -"+p+" + ("+v+" / 2))"):i()("calc("+(k.length-1)+" * -"+p+")")}),[P,e,v,k.length,p]),A=Object(r.useMemo)((function(){var n=[];if(P)return"";if(a(w)&&a(O)&&a(h)&&s&&k.length>0){var t=k[0].width||1,e="shrink-only"===s?Math.min(h/t,1):h/t,r=e,o=w-e*w,i=O-r*O;n.push("matrix("+e+", 0, 0, "+r+", "+o+", "+i+")")}return f&&n.push("rotate("+f+", "+w+", "+O+")"),n.length>0?n.join(" "):""}),[P,w,O,h,s,k,f]);return{wordsByLines:k,startDy:M,transform:A}}},jpI8:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("VB+g"),o=e("ZQHj");function i(n,t){if(Object(o.a)(n)&&t)return Object(r.a)(n,t);if(Object(o.b)(n)){var e=n,i=e.target;if(i)return Object(r.a)(i,e)}return null}},m7nO:function(n,t,e){"use strict";e.r(t);var r=e("rkTo");e.d(t,"Point",(function(){return r.a}));var o=e("LHst");e.d(t,"sumPoints",(function(){return o.a}));var i=e("Q0jm");e.d(t,"subtractPoints",(function(){return i.a}))},oHGN:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/annotation",function(){return e("3Dge")}])},rkTo:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return o}));var o=function(){function n(n){var t=n.x,e=void 0===t?0:t,o=n.y,i=void 0===o?0:o;r(this,"x",0),r(this,"y",0),this.x=e,this.y=i}var t=n.prototype;return t.value=function(){return{x:this.x,y:this.y}},t.toArray=function(){return[this.x,this.y]},n}()},"uKU/":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return a}));var r=e("PB0s"),o=e("2+fR"),i=e("W1cA"),c=e("Zbhd");function u(n){var t=n.domain;return n.ticks=function(n){var e=t();return Object(r.a)(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var r=t();return Object(c.a)(r[0],r[r.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var o,i,c=t(),u=0,a=c.length-1,l=c[u],s=c[a],f=10;for(s<l&&(i=l,l=s,s=i,i=u,u=a,a=i);f-- >0;){if((i=Object(r.b)(l,s,e))===o)return c[u]=l,c[a]=s,t(c);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}o=i}return n},n}function a(){var n=Object(o.b)();return n.copy=function(){return Object(o.a)(n,a())},i.b.apply(n,arguments),u(n)}},ue4z:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return s})),e.d(t,"e",(function(){return a})),e.d(t,"f",(function(){return f}));var r=function(n,t){return n<t?-1:n>t?1:n>=t?0:NaN},o=function(n){var t;return 1===n.length&&(t=n,n=function(n,e){return r(t(n),e)}),{left:function(t,e,r,o){for(null==r&&(r=0),null==o&&(o=t.length);r<o;){var i=r+o>>>1;n(t[i],e)<0?r=i+1:o=i}return r},right:function(t,e,r,o){for(null==r&&(r=0),null==o&&(o=t.length);r<o;){var i=r+o>>>1;n(t[i],e)>0?o=i:r=i+1}return r}}};var i=o(r);i.right,i.left;var c=function(n,t){var e,r,o,i=n.length,c=-1;if(null==t){for(;++c<i;)if(null!=(e=n[c])&&e>=e)for(r=o=e;++c<i;)null!=(e=n[c])&&(r>e&&(r=e),o<e&&(o=e))}else for(;++c<i;)if(null!=(e=t(n[c],c,n))&&e>=e)for(r=o=e;++c<i;)null!=(e=t(n[c],c,n))&&(r>e&&(r=e),o<e&&(o=e));return[r,o]},u=Array.prototype,a=(u.slice,u.map,function(n,t,e){n=+n,t=+t,e=(o=arguments.length)<2?(t=n,n=0,1):o<3?1:+e;for(var r=-1,o=0|Math.max(0,Math.ceil((t-n)/e)),i=new Array(o);++r<o;)i[r]=n+r*e;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var l=function(n,t){var e,r,o=n.length,i=-1;if(null==t){for(;++i<o;)if(null!=(e=n[i])&&e>=e)for(r=e;++i<o;)null!=(e=n[i])&&e>r&&(r=e)}else for(;++i<o;)if(null!=(e=t(n[i],i,n))&&e>=e)for(r=e;++i<o;)null!=(e=t(n[i],i,n))&&e>r&&(r=e);return r},s=function(n){for(var t,e,r,o=n.length,i=-1,c=0;++i<o;)c+=n[i].length;for(e=new Array(c);--o>=0;)for(t=(r=n[o]).length;--t>=0;)e[--c]=r[t];return e},f=function(n){if(!(o=n.length))return[];for(var t=-1,e=function(n,t){var e,r,o=n.length,i=-1;if(null==t){for(;++i<o;)if(null!=(e=n[i])&&e>=e)for(r=e;++i<o;)null!=(e=n[i])&&r>e&&(r=e)}else for(;++i<o;)if(null!=(e=t(n[i],i,n))&&e>=e)for(r=e;++i<o;)null!=(e=t(n[i],i,n))&&r>e&&(r=e);return r}(n,h),r=new Array(e);++t<e;)for(var o,i=-1,c=r[t]=new Array(o);++i<o;)c[i]=n[i][t];return r};function h(n){return n.length}},x7Vb:function(n,t,e){"use strict";var r=e("ERkP"),o=e("BqYg");const i=["x","y","top","bottom","left","right","width","height"],c=(n,t)=>i.every(e=>n[e]===t[e]);t.a=function({debounce:n,scroll:t,polyfill:e}={debounce:0,scroll:!1}){const i=e||("undefined"===typeof window?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[u,a]=Object(r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),l=Object(r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:u}),s=n?"number"===typeof n?n:n.scroll:null,f=n?"number"===typeof n?n:n.resize:null,h=Object(r.useRef)(!1);Object(r.useEffect)(()=>(h.current=!0,()=>{h.current=!1}));const[d,p,b]=Object(r.useMemo)(()=>{const n=()=>{if(!l.current.element)return;const{left:n,top:t,width:e,height:r,bottom:o,right:i,x:u,y:s}=l.current.element.getBoundingClientRect(),f={left:n,top:t,width:e,height:r,bottom:o,right:i,x:u,y:s};Object.freeze(f),h.current&&!c(l.current.lastBounds,f)&&a(l.current.lastBounds=f)};return[n,f?Object(o.debounce)(n,f):n,s?Object(o.debounce)(n,s):n]},[a,s,f]);function v(){l.current.scrollContainers&&(l.current.scrollContainers.forEach(n=>n.removeEventListener("scroll",b,!0)),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function g(){l.current.element&&(l.current.resizeObserver=new i(b),l.current.resizeObserver.observe(l.current.element),t&&l.current.scrollContainers&&l.current.scrollContainers.forEach(n=>n.addEventListener("scroll",b,{capture:!0,passive:!0})))}var y,m,x;return y=b,m=Boolean(t),Object(r.useEffect)(()=>{if(m){const n=y;return window.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",n,!0)}}},[y,m]),x=p,Object(r.useEffect)(()=>{const n=x;return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[x]),Object(r.useEffect)(()=>{v(),g()},[t,b,p]),Object(r.useEffect)(()=>v,[]),[n=>{n&&n!==l.current.element&&(v(),l.current.element=n,l.current.scrollContainers=function n(t){const e=[];if(!t||t===document.body)return e;const{overflow:r,overflowX:o,overflowY:i}=window.getComputedStyle(t);[r,o,i].some(n=>"auto"===n||"scroll"===n)&&e.push(t);return[...e,...n(t.parentElement)]}(n),g())},u,d]}},zjfJ:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return r}))}},[["oHGN",0,2,1,3,4,5,6,7,11,12,16,29,44]]]);