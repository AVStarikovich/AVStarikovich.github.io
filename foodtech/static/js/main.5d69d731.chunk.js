(this.webpackJsonpfoodtech=this.webpackJsonpfoodtech||[]).push([[0],{106:function(e){e.exports=JSON.parse('{"name":"foodtech","version":"0.0.1","description":"Food Tech fullscreen app","private":true,"scripts":{"start":"REACT_APP_ENVIRONMENT=development EXTEND_ESLINT=true react-app-rewired start","start:staging":"REACT_APP_ENVIRONMENT=staging EXTEND_ESLINT=true react-app-rewired start","start:production":"REACT_APP_ENVIRONMENT=production EXTEND_ESLINT=true react-app-rewired start","start:test":"PORT=6969 REACT_APP_ENVIRONMENT=test EXTEND_ESLINT=true react-app-rewired start","build":"REACT_APP_ENVIRONMENT=production react-app-rewired build","build:development":"REACT_APP_ENVIRONMENT=development EXTEND_ESLINT=true react-app-rewired build","build:staging":"REACT_APP_ENVIRONMENT=staging EXTEND_ESLINT=true react-app-rewired build","build:production":"REACT_APP_ENVIRONMENT=production EXTEND_ESLINT=true react-app-rewired build","test":"REACT_APP_NEW_APP_BASE_URL=/ react-app-rewired test --env=jsdom","test:ci":"CI=true react-app-rewired test","test:coverage":"CI=true react-app-rewired test --coverage","lint":"lint-staged","eject":"react-app-rewired eject","cy:run":"cypress run","test:cypress":"start-server-and-test start:test http://localhost:6969 cy:run","storybook":"start-storybook -p 9009 -s public","build-storybook":"build-storybook -s public"},"cssPrefix":"fdt-","lint-staged":{"*.{js,jsx,tsx,ts}":"eslint"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!<rootDir>/node_modules/"],"coverageReporters":["html"],"snapshotSerializers":["<rootDir>/node_modules/enzyme-to-json/serializer"]},"browserslist":{"production":["last 1 chrome version"],"development":["last 1 chrome version"]},"dependencies":{"connected-react-router":"6.8.0","history":"^4.10.1","immer":"6.0.9","react":"^16.12.0","react-content-loader":"5.0.4","react-dom":"^16.12.0","react-redux":"7.2.0","react-router":"5.2.0","react-scripts":"^3.3.0","redux":"4.0.5","styled-components":"5.1.1","stylelint-scss":"^3.17.0","typescript":"^3.6.4"},"devDependencies":{"@storybook/addon-actions":"^5.3.14","@storybook/addon-links":"^5.3.14","@storybook/addons":"^5.3.14","@storybook/preset-create-react-app":"^2.0.0","@storybook/react":"^5.3.14","@types/jest":"^25.1.4","@types/node":"^13.9.0","@types/react":"^16.9.11","@types/react-dom":"^16.9.4","@types/react-redux":"7.1.9","@types/react-router":"5.1.7","@types/styled-components":"5.1.0","customize-cra":"^0.9.1","cypress":"^3.8.2","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.2","enzyme-to-json":"^3.4.3","eslint-config-airbnb":"^18.0.1","husky":"^2.7.0","lint-staged":"^8.2.1","node-sass-utils":"^1.1.2","react-app-rewired":"^2.1.5","react-test-renderer":"^16.12.0","sass":"^1.26.5","start-server-and-test":"^1.10.6"},"license":"Copyright Sberbank\xae"}')},107:function(e,t,n){e.exports=n.p+"static/media/cart.4441295b.svg"},112:function(e,t,n){e.exports=n.p+"static/media/map.14a1524d.png"},113:function(e,t,n){e.exports=n.p+"static/media/minus.b31f8712.svg"},114:function(e,t,n){e.exports=n.p+"static/media/figure-2.a3044c99.svg"},115:function(e,t,n){e.exports=n.p+"static/media/figure-3.7084a68e.svg"},116:function(e,t,n){e.exports=n.p+"static/media/figure-4.74f25c1b.svg"},117:function(e,t,n){e.exports=n.p+"static/media/figure-6.1cf5f7c7.svg"},118:function(e,t,n){e.exports=n.p+"static/media/figure-7.ef978761.svg"},119:function(e,t,n){e.exports=n.p+"static/media/figure-8.dcc5e538.svg"},120:function(e,t,n){e.exports=n.p+"static/media/figure-9.fb8b47f7.svg"},121:function(e,t,n){e.exports=n(259)},249:function(e,t,n){},250:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t){!function(){if("navigate"in window)return;const e={37:"left",38:"up",39:"right",40:"down"};let t=null,n=null,a={element:null,rect:null};function o(){window.addEventListener("keydown",a=>{const o=parent&&parent.__spatialNavigation__.keyMode||window.__spatialNavigation__.keyMode,r=document.activeElement,l=e[a.keyCode];if(9===a.keyCode&&(n=null),!(!o||"NONE"===o||"SHIFTARROW"===o&&!a.shiftKey||"ARROW"===o&&a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)&&!a.defaultPrevented){let o={left:!0,up:!0,right:!0,down:!0};"INPUT"!==r.nodeName&&"TEXTAREA"!==r.nodeName||(o=function(t){const n=document.activeElement,a=n.selectionStart,o=n.selectionEnd,i={left:!1,up:!1,right:!1,down:!1},r=e[t.keyCode];if(void 0===r)return i;(!["email","date","month","number","time","week"].includes(n.getAttribute("type"))||"up"!==r&&"down"!==r)&&(["password","text","search","tel","url",null].includes(n.getAttribute("type"))||"TEXTAREA"===n.nodeName)?a===o&&(0===a&&(i.left=!0,i.up=!0),o===n.value.length&&(i.right=!0,i.down=!0)):i[r]=!0;return i}(a)),o[l]&&(a.preventDefault(),t=new Map,i(l),t=null,n=null)}}),document.addEventListener("mouseup",e=>{n={x:e.clientX,y:e.clientY}}),window.addEventListener("focusin",e=>{e.target!==window&&(a.element=e.target,a.rect=e.target.getBoundingClientRect())})}function i(e){const t=function(){let e=document.activeElement;if(!e||e===document.body&&!document.querySelector(":focus")){if(a.element&&e!==a.element){const t=window.getComputedStyle(a.element,null),n=["hidden","collapse"];if(a.element.disabled||n.includes(t.getPropertyValue("visibility")))return e=a.element,e}e=document.documentElement}!a.element||0!==U(a.element).height&&0!==U(a.element).width||(n=(a.left+a.right)/2,a.top,a.bottom);if(!_(e)){const t=f(e);if(t&&t===window)return t}return e}();console.log(t);let o=t,i=null;n&&(i=document.elementFromPoint(n.x,n.y),null===i&&(i=document.body),M(i)&&!y(i)?n=null:o=y(i)?i:i.getSpatialNavigationContainer()),o!==window&&o!==document&&o!==document.documentElement||(o=document.body||document.documentElement);let l=null;if((y(o)||"BODY"===o.nodeName)&&"INPUT"!==o.nodeName){"IFRAME"===o.nodeName&&(o=o.contentDocument.documentElement),l=l===window?document.body:o;let n=null;if(document.activeElement===t||document.activeElement===document.body&&t===document.documentElement){if(n=o.spatialNavigationSearch(e,{container:o,candidates:c(o,{mode:"all"})}),r(n,e))return}else l=l.getSpatialNavigationContainer()}l=o.getSpatialNavigationContainer();let s=l.parentElement?l.getSpatialNavigationContainer():null;s||window.location===window.parent.location||(s=window.parent.document.documentElement),E(o,l,s,e,"all")}function r(e,t){if(e){if(!h("beforefocus",e,null,t))return!0;const a=e.getSpatialNavigationContainer();return a!==window?e.focus():e.focus({preventScroll:!0}),n=null,!0}return!1}function l(e,t){return N(e,t)&&!A(e,t)?(w(e,t),!0):!e.parentElement&&!O(e,t)&&(w(e.ownerDocument.documentElement,t),!0)}function c(e,t={mode:"visible"}){let n=[];if(e.childElementCount>0){e.parentElement||(e=e.getElementsByTagName("body")[0]||document.body);const t=e.children;for(const e of t)v(e)?n.push(e):M(e)?(n.push(e),!y(e)&&e.childElementCount&&(n=n.concat(c(e,{mode:"all"})))):e.childElementCount&&(n=n.concat(c(e,{mode:"all"})))}return"all"===t.mode?n:n.filter(S)}function s(e,t,n,a){const o=e;return a=a||o.getSpatialNavigationContainer(),u(o,n=!n||n.length<=0?c(a):n,t,a)}function d(e,t){const a=this;let o,i=[],r=[],l=function(e){const t=e.getSpatialNavigationContainer().focusableAreas(),n=[];return t.forEach(t=>{e!==t&&T(t,e)&&n.push(t)}),n}(a);t||(t={});const d=a.getSpatialNavigationContainer();let u=c(d);const g=t.container||d;t.container&&d.contains(t.container)&&(u=u.concat(c(g)));const f=t.candidates&&t.candidates.length>0?t.candidates.filter(e=>g.contains(e)):u.filter(e=>g.contains(e)&&g!==e);if(f&&f.length>0){f.forEach(e=>{e!==a&&(a.contains(e)&&a!==e?i:r).push(e)});let t=l.filter(e=>!i.includes(e)),d=f.filter(e=>y(e)&&T(a,e)).map(e=>e.focusableAreas()).flat().filter(e=>e!==a);if(i=i.concat(t).filter(e=>g.contains(e)),r=r.concat(d).filter(e=>g.contains(e)),r.length>0&&(r=s(a,e,r,g)),i&&i.length>0&&"INPUT"!==a.nodeName&&(o=function(e,t,a){return m(e,t,a,n?$:z)}(a,i,e)),o=o||p(a,r,e),o&&v(o)){const t=c(o,{mode:"all"}),n=t.length>0?a.spatialNavigationSearch(e,{candidates:t,container:o}):null;n?o=n:M(o)||(f.splice(f.indexOf(o),1),o=f.length?a.spatialNavigationSearch(e,{candidates:f,container:g}):null)}return o}return null}function u(e,t,n,a){const o=e.getSpatialNavigationContainer();let i;return void 0===n?t:(i=o.parentElement&&a!==o&&!S(e)?U(o):U(e),!y(e)&&"BODY"!==e.nodeName||"INPUT"===e.nodeName?t.filter(t=>{const o=U(t),r="IFRAME"===t.nodeName?t.contentDocument.body:null;return a.contains(t)&&t!==e&&r!==e&&R(o,i,n)&&!I(i,o)}):t.filter(t=>{const o=U(t);return a.contains(t)&&(e.contains(t)&&I(i,o)&&t!==e||R(o,i,n))}))}function p(e,t,n){const a=e.getSpatialNavigationContainer(),o=getComputedStyle(a).getPropertyValue("--spatial-navigation-function"),i=U(e);let r,l;switch(o){case"grid":l=t.filter(e=>L(i,U(e),n)),l.length>0&&(t=l),r=V;break;default:r=F}return m(e,t,n,r)}function m(e,t,n,a){let o=null;window.location===window.parent.location||"BODY"!==e.nodeName&&"HTML"!==e.nodeName?o=e.getBoundingClientRect():(o=window.frameElement.getBoundingClientRect(),o.x=0,o.y=0);let i=Number.POSITIVE_INFINITY,r=[];if(t)for(let l=0;l<t.length;l++){const e=a(o,U(t[l]),n);e<i?(i=e,r=[t[l]]):e===i&&r.push(t[l])}return 0===r.length?null:r.length>1&&a===V?m(e,r,n,H):r[0]}function g(){let e=this;do{if(!e.parentElement){e=window.location!==window.parent.location?window.parent.document.documentElement:window.document.documentElement;break}e=e.parentElement}while(!y(e));return e}function f(e){let t=e;do{if(!t.parentElement){t=window.location!==window.parent.location?window.parent.document.documentElement:window.document.documentElement;break}t=t.parentElement}while(!k(t)||!S(t));return t!==document&&t!==document.documentElement||(t=window),t}function b(e={mode:"visible"}){const t=this.parentElement?this:document.body,n=Array.prototype.filter.call(t.getElementsByTagName("*"),M);return"all"===e.mode?n:n.filter(S)}function h(e,t,n,a){if(["beforefocus","notarget"].includes(e)){const o=new CustomEvent("nav"+e,{bubbles:!0,cancelable:!0,detail:{causedTarget:n,dir:a}});return t.dispatchEvent(o)}}function x(e,t){return getComputedStyle(e).getPropertyValue(`--${t}`).trim()}function E(e,t,n,a,o){let i={candidates:c(t,{mode:o}),container:t};for(;n;){if(r(e.spatialNavigationSearch(a,i),a))return;if("visible"===o&&l(t,a))return;{if(!h("notarget",t,e,a))return;t===document||t===document.documentElement?window.location!==window.parent.location&&(t=(e=window.frameElement).ownerDocument.documentElement):t=n,i={candidates:c(t,{mode:o}),container:t};let r=t.getSpatialNavigationContainer();n=r!==t?r:null}}i={candidates:c(t,{mode:o}),container:t},!n&&t&&r(e.spatialNavigationSearch(a,i),a)||h("notarget",i.container,e,a)}function w(e,t,n=0){if(e)switch(t){case"left":e.scrollLeft-=40+n;break;case"right":e.scrollLeft+=40+n;break;case"up":e.scrollTop-=40+n;break;case"down":e.scrollTop+=40+n}}function y(e){return!e.parentElement||"IFRAME"===e.nodeName||k(e)||function(e){return"contain"===x(e,"spatial-navigation-contain")}(e)}function v(e){return"delegable"===x(e,"spatial-navigation-contain")}function k(e){const t=window.getComputedStyle(e,null),n=t.getPropertyValue("overflow-x"),a=t.getPropertyValue("overflow-y");return!!("visible"!==n&&"clip"!==n&&P(e,"left")||"visible"!==a&&"clip"!==a&&P(e,"down"))}function N(e,t){if(e&&"object"===typeof e){if(t&&"string"===typeof t){if(P(e,t)){const n=window.getComputedStyle(e,null),a=n.getPropertyValue("overflow-x"),o=n.getPropertyValue("overflow-y");switch(t){case"left":case"right":return"visible"!==a&&"clip"!==a&&"hidden"!==a;case"up":case"down":return"visible"!==o&&"clip"!==o&&"hidden"!==o}}return!1}return"HTML"===e.nodeName||"BODY"===e.nodeName||k(e)&&P(e)}}function P(e,t){if(e&&"object"===typeof e){if(!t||"string"!==typeof t)return e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;switch(t){case"left":case"right":return e.scrollWidth>e.clientWidth;case"up":case"down":return e.scrollHeight>e.clientHeight}return!1}}function O(e,t){let n=!1;switch(t){case"left":n=0===e.scrollLeft;break;case"right":n=e.scrollWidth-e.scrollLeft-e.clientWidth===0;break;case"up":n=0===e.scrollTop;break;case"down":n=e.scrollHeight-e.scrollTop-e.clientHeight===0}return n}function A(e,t){if(N(e,t)){const n=e.scrollTop,a=e.scrollLeft,o=e.scrollHeight-e.clientHeight,i=e.scrollWidth-e.clientWidth;switch(t){case"left":return 0===a;case"right":return Math.abs(a-i)<=1;case"up":return 0===n;case"down":return Math.abs(n-o)<=1}}return!1}function _(e){const t=e.getBoundingClientRect();let n=f(e),a=null;return a=n!==window?U(n):new DOMRect(0,0,window.innerWidth,window.innerHeight),!(!I(a,t)||!I(a,t))}function M(e){return!(e.tabIndex<0||function(e){return"A"===e.tagName&&null===e.getAttribute("href")&&null===e.getAttribute("tabIndex")}(e)||function(e){return!!["BUTTON","INPUT","SELECT","TEXTAREA","OPTGROUP","OPTION","FIELDSET"].includes(e.tagName)&&e.disabled}(e)||function(e){return e.inert&&!e.ownerDocument.documentElement.inert}(e)||!function(e){return!!C(e.parentElement)&&!(!C(e)||"0"===e.style.opacity||"0px"===window.getComputedStyle(e).height||"0px"===window.getComputedStyle(e).width)}(e))&&(!!(!e.parentElement||N(e)&&P(e)||e.tabIndex>=0)||void 0)}function S(e){return!e.parentElement||C(e)&&function(e){const t=U(e);if("IFRAME"!==e.nodeName&&(t.top<0||t.left<0||t.top>e.ownerDocument.documentElement.clientHeight||t.left>e.ownerDocument.documentElement.clientWidth))return!1;let n=parseInt(e.offsetWidth)/10,a=parseInt(e.offsetHeight)/10;n=isNaN(n)?1:n,a=isNaN(a)?1:a;const o={middle:[(t.left+t.right)/2,(t.top+t.bottom)/2],leftTop:[t.left+n,t.top+a],rightBottom:[t.right-n,t.bottom-a]};for(const i in o){const t=e.ownerDocument.elementFromPoint(...o[i]);if(e===t||e.contains(t))return!0}return!1}(e)}function T(e,t){const n=U(e),a=U(t||e.getSpatialNavigationContainer());return!(n.left<a.left||n.right>a.right||n.top<a.top||n.bottom>a.bottom)}function C(e){const t=window.getComputedStyle(e,null),n=t.getPropertyValue("visibility");return"none"!==t.getPropertyValue("display")&&!["hidden","collapse"].includes(n)}function I(e,t){const n=e.left<t.right&&e.right>=t.right,a=e.left<=t.left&&e.right>t.left,o=e.top<=t.top&&e.bottom>t.top,i=e.top<t.bottom&&e.bottom>=t.bottom;return(n||a)&&(o||i)}function R(e,t,n){switch(n){case"left":return j(t,e);case"right":return j(e,t);case"up":return D(t,e);case"down":return D(e,t);default:return!1}}function j(e,t){return e.left>=t.right||e.left>=t.left&&e.right>t.right&&e.bottom>t.top&&e.top<t.bottom}function D(e,t){return e.top>=t.bottom||e.top>=t.top&&e.bottom>t.bottom&&e.left<t.right&&e.right>t.left}function L(e,t,n){switch(n){case"left":case"right":return e.bottom>t.top&&e.top<t.bottom;case"up":case"down":return e.right>t.left&&e.left<t.right;default:return!1}}function $(e,t,a){const o=B(a,n,t),i=Math.abs(o.entryPoint.x-o.exitPoint.x),r=Math.abs(o.entryPoint.y-o.exitPoint.y);return Math.sqrt(Math.pow(i,2)+Math.pow(r,2))}function z(e,t,n){const a={left:"right",right:"left",up:"bottom",down:"top"}[n];return Math.abs(e[a]-t[a])}function F(e,t,n){let a=0,o=0;const i=B(n,e,t),r=Math.abs(i.entryPoint.x-i.exitPoint.x),l=Math.abs(i.entryPoint.y-i.exitPoint.y),c=Math.sqrt(Math.pow(r,2)+Math.pow(l,2));let s,d;const u=function(e,t){const n={width:0,height:0,area:0},a=[Math.max(e.left,t.left),Math.max(e.top,t.top)],o=[Math.min(e.right,t.right),Math.min(e.bottom,t.bottom)];n.width=Math.abs(a[0]-o[0]),n.height=Math.abs(a[1]-o[1]),a[0]>=o[0]||a[1]>=o[1]||(n.area=Math.sqrt(n.width*n.height));return n}(e,t),p=u.area;switch(n){case"left":case"right":L(e,t,n)?o=Math.min(u.height/e.height,1):a=e.height/2,s=30*(l+a),d=5*o;break;case"up":case"down":L(e,t,n)?o=Math.min(u.width/e.width,1):a=e.width/2,s=2*(r+a),d=5*o;break;default:s=0,d=0}return c+s-d-p}function H(e,t,n){const a=B(n,e,t),o=Math.abs(a.entryPoint.x-a.exitPoint.x),i=Math.abs(a.entryPoint.y-a.exitPoint.y);return Math.sqrt(Math.pow(o,2)+Math.pow(i,2))}function V(e,t,n){const a=B(n,e,t);return"left"===n||"right"===n?Math.abs(a.entryPoint.x-a.exitPoint.x):Math.abs(a.entryPoint.y-a.exitPoint.y)}function B(e="down",t,a){const o={entryPoint:{x:0,y:0},exitPoint:{x:0,y:0}};if(n){switch(o.exitPoint=t,e){case"left":o.entryPoint.x=a.right;break;case"up":o.entryPoint.y=a.bottom;break;case"right":o.entryPoint.x=a.left;break;case"down":o.entryPoint.y=a.top}switch(e){case"left":case"right":n.y<=a.top?o.entryPoint.y=a.top:n.y<a.bottom?o.entryPoint.y=n.y:o.entryPoint.y=a.bottom;break;case"up":case"down":n.x<=a.left?o.entryPoint.x=a.left:n.x<a.right?o.entryPoint.x=n.x:o.entryPoint.x=a.right}}else{switch(e){case"left":o.exitPoint.x=t.left,o.entryPoint.x=a.right<t.left?a.right:t.left;break;case"up":o.exitPoint.y=t.top,o.entryPoint.y=a.bottom<t.top?a.bottom:t.top;break;case"right":o.exitPoint.x=t.right,o.entryPoint.x=a.left>t.right?a.left:t.right;break;case"down":o.exitPoint.y=t.bottom,o.entryPoint.y=a.top>t.bottom?a.top:t.bottom}switch(e){case"left":case"right":D(t,a)?(o.exitPoint.y=t.top,o.entryPoint.y=a.bottom<t.top?a.bottom:t.top):D(a,t)?(o.exitPoint.y=t.bottom,o.entryPoint.y=a.top>t.bottom?a.top:t.bottom):(o.exitPoint.y=Math.max(t.top,a.top),o.entryPoint.y=o.exitPoint.y);break;case"up":case"down":j(t,a)?(o.exitPoint.x=t.left,o.entryPoint.x=a.right<t.left?a.right:t.left):j(a,t)?(o.exitPoint.x=t.right,o.entryPoint.x=a.left>t.right?a.left:t.right):(o.exitPoint.x=Math.max(t.left,a.left),o.entryPoint.x=o.exitPoint.x)}}return o}function U(e){let n=t&&t.get(e);if(!n){const a=e.getBoundingClientRect();n={top:Number(a.top.toFixed(2)),right:Number(a.right.toFixed(2)),bottom:Number(a.bottom.toFixed(2)),left:Number(a.left.toFixed(2)),width:Number(a.width.toFixed(2)),height:Number(a.height.toFixed(2))},t&&t.set(e,n)}return n}function W(e){const t=window.__spatialNavigation__&&window.__spatialNavigation__.keyMode;window.__spatialNavigation__=!1===e?G():Object.assign(G(),function(){function e(e,t){return N(e,t)&&!A(e,t)||!e.parentElement&&!O(e,t)}function t(t,n,a,o){let i=n,r=null;if(i!==document&&i!==document.documentElement||(i=document.body||document.documentElement),(y(i)||"BODY"===i.nodeName)&&"INPUT"!==i.nodeName){"IFRAME"===i.nodeName&&(i=i.contentDocument.body);const n=c(i,o);if(Array.isArray(n)&&n.length>0)return t?s(i,a,n):i.spatialNavigationSearch(a,{candidates:n});if(e(i,a))return t?[]:i}let l=i.getSpatialNavigationContainer(),d=l.parentElement?l.getSpatialNavigationContainer():null;for(d||window.location===window.parent.location||(d=window.parent.document.documentElement);d;){const n=u(i,c(l,o),a,l);if(Array.isArray(n)&&n.length>0){if(r=i.spatialNavigationSearch(a,{candidates:n,container:l}),r)return t?n:r}else{if(e(l,a))return t?[]:i;if(l===document||l===document.documentElement){if(l=window.document.documentElement,window.location!==window.parent.location){if(i=window.frameElement,l=window.parent.document.documentElement,!l.parentElement){d=null;break}d=l.getSpatialNavigationContainer()}}else{if(M(l)&&(i=l),l=d,!l.parentElement){d=null;break}d=l.getSpatialNavigationContainer()}}}if(!d&&l){const e=u(i,c(l,o),a,l);if(Array.isArray(e)&&e.length>0&&(r=i.spatialNavigationSearch(a,{candidates:e,container:l}),r))return t?e:r}if(e(l,a))return r=i,r}return{isContainer:y,isScrollContainer:k,isVisibleInScroller:_,findCandidates:t.bind(null,!0),findNextTarget:t.bind(null,!1),getDistanceFromTarget:(e,t,n)=>(y(e)||"BODY"===e.nodeName)&&"INPUT"!==e.nodeName&&c(e).includes(t)?z(U(e),U(t),n):F(U(e),U(t),n)}}()),window.__spatialNavigation__.keyMode=t,Object.seal(window.__spatialNavigation__)}function G(){return{enableExperimentalAPIs:W,get keyMode(){return this._keymode?this._keymode:"ARROW"},set keyMode(e){this._keymode=["SHIFTARROW","ARROW","NONE"].includes(e)?e:"ARROW"},setStartingPoint:function(e,t){n=e&&t?{x:e,y:t}:null}}}window.__getSpatNavState=()=>({mapOfBoundRect:t,startingPoint:n,savedSearchOrigin:a,searchOriginRect:null}),window.navigate=i,window.Element.prototype.spatialNavigationSearch=d,window.Element.prototype.focusableAreas=b,window.Element.prototype.getSpatialNavigationContainer=g,window.CSS&&CSS.registerProperty&&(""===window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-contain")&&CSS.registerProperty({name:"--spatial-navigation-contain",syntax:"auto | contain",inherits:!1,initialValue:"auto"}),""===window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-action")&&CSS.registerProperty({name:"--spatial-navigation-action",syntax:"auto | focus | scroll",inherits:!1,initialValue:"auto"}),""===window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-function")&&CSS.registerProperty({name:"--spatial-navigation-function",syntax:"normal | grid",inherits:!1,initialValue:"normal"})),W(!0),window.addEventListener("load",()=>{o()})}();document.addEventListener("navbeforefocus",e=>{if(e.target instanceof HTMLElement){e.preventDefault();let{target:t}=e;requestAnimationFrame(async()=>{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),await new Promise(e=>{new IntersectionObserver(([t])=>{t.isIntersecting&&e()},{threshold:1}).observe(t)}),t.focus()})}}),document.addEventListener("keyup",e=>{13===e.keyCode&&(e.preventDefault(),!document.activeElement||document.activeElement instanceof HTMLButtonElement||document.activeElement.click())})},259:function(e,t,n){"use strict";n.r(t),n.d(t,"renderApp",(function(){return ln}));n(122),n(139),n(140),n(141),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(183),n(184),n(185),n(188),n(190),n(191),n(192),n(193),n(194),n(195),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(225),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236);var a=n(0),o=n.n(a),i=n(53),r=n.n(i),l=n(1),c=n(28),s=n(16),d=n(32),u=n(36),p=n(102),m=n(13),g=n(23);let f;!function(e){e.CATALOG="/catalog",e.CART="/cart",e.STATUS="/status",e.ADDRESS_SIMPLE="/address-simple",e.PROMO="/promo",e.NO_AREA="/no-area",e.SCREEN_SAVER="/screen-saver"}(f||(f={}));var b=n(105);const h={cart:{minimalPrice:2e4,itemsMap:{},order:[],totalCount:0,totalPrice:0,orderId:""},products:{itemsMap:{}},router:void 0,user:{customer_name:"",phone_num:"",address:{address_string:"",apartment:0,building:0,city:"",confirmed:!1,door_code:0,entrance:0,floor:0,house:0,latitude:0,longitude:0,street:""}},catalogPage:{selectedItemId:"",order:[],itemsMap:{}},cartPage:{wrapperYShift:0,selectedItemIndex:0,topGradientHidden:!0,bottomGradientHidden:!1,order:[],itemsMap:{},totalPrice:"",toMinimumPrice:0,isOrderStatusWaiting:!1,makePurchaseButton:{disabled:!1}}},x=e=>Object.values(e.itemsMap).reduce((e,t)=>e+=t.count,0),E=(e,t)=>e.order.reduce((n,a)=>{const o=t.itemsMap[a];return n+=e.itemsMap[a].count*Number(o.price)},0),w=(e,t)=>{const{cart:n,products:a}=e;switch(t.type){case"ADD_ITEM":{const{count:e,item:o}=t.payload,i=Number(e),r=a.itemsMap[o],l=r.quantityLeft;if(!r)return;const c=n.itemsMap[o];c?c.count=Math.min(l,c.count+i):i<=l&&(n.itemsMap[o]={itemId:o,count:i},n.order.push(o)),n.totalCount=x(n),n.totalPrice=E(n,a);break}case"REMOVE_ITEM":{const{item:e,count:o,shouldRemoveMention:i}=t.payload,r=Number(o),l=n.itemsMap[e],c=a.itemsMap[e];if(!l||!c)return;l.count=Math.max(0,l.count-r),n.totalCount=x(n),n.totalPrice=E(n,a),!l.count&&i&&(delete n.itemsMap[e],n.order=n.order.filter(t=>t!==e));break}case"REMOVE_ALL":e.cart=h.cart;break;case"GO_TO_CATALOG":t.payload.clear&&(e.cart=h.cart);break;case"VALIDATION_OK":e.cart.orderId=t.payload.order_id}},y=e=>Object.keys(e).reduce((t,n)=>{var a;return t[n]={name:(a=e[n]).name,id:a.guid,price:Number(a.price),quantityLeft:Number(a.quantity_left),imageUrl:a.images_urls[0]},t},{}),v=(e,t)=>{switch(t.type){case"SHOW_ITEMS":e.products.itemsMap=y(t.payload.stock)}},k=(e,t)=>{switch(t.type){case"UPDATE_USER":e.user={...e.user,...t.payload};break;case"GO_TO_CATALOG":e.user=t.payload.address}},N=({cart:e,products:t},n)=>{const a=e.itemsMap[n],o=t.itemsMap[n];return 0===o.quantityLeft?{type:"sold-out"}:a&&a.count===o.quantityLeft?{type:"few-left"}:void 0},P=({cart:e,catalogPage:t},n)=>{const a=e.itemsMap[n];return a?a.count:0},O=({cart:e,products:t},n)=>{const a=t.itemsMap[n],o=e.itemsMap[n];return o&&o.count===a.quantityLeft},A=e=>{const{products:t}=e;return Object.keys(t.itemsMap).reduce((t,n,a)=>(t[n]=((e,t,n)=>{const{products:a,cart:o,catalogPage:i}=e,r=a.itemsMap[t],l=o.itemsMap[t];return{shouldFocusOnMount:i.selectedItemId===t,imageUrl:r.imageUrl,name:r.name,id:t,price:(c=r.price,Math.ceil(c/100)),index:n+1,quantityLeft:r.quantityLeft,count:l&&l.count,badge:N(e,t),buttonDisabled:O(e,t),disabled:0===r.quantityLeft};var c})(e,n,a),t),{})},_=(e,t)=>{const{products:n,catalogPage:a}=e;switch(t.type){case"SHOW_ITEMS":{a.order=Object.keys(n.itemsMap);const[t]=a.order;a.selectedItemId=t,a.itemsMap=A(e);break}case"ADD_ITEM":{const{item:n}=t.payload,o=a.itemsMap[n];o.count=P(e,n),o.buttonDisabled=O(e,n),o.badge=N(e,n);break}case"REMOVE_ITEM":{const{item:n}=t.payload,o=a.itemsMap[n];o.count=P(e,n),o.buttonDisabled=O(e,n),o.badge=N(e,n);break}case"REMOVE_ALL":a.itemsMap=A(e);break;case"catalog/SELECT_ITEM":e.catalogPage.selectedItemId=t.payload}},M=e=>String(e).split("").reduceRight((e,t,n,a)=>((n-(a.length-1))%3===0&&(e=` ${e}`),t+e),""),S=(e,t)=>{let n=0;return()=>{n||(n=setTimeout(()=>{n=0,e()},t))}},T=({cartPage:{selectedItemIndex:e,order:t}})=>{if(-1===e)return 0;let n=Math.max(0,e-1);return n=Math.min(Math.max(0,t.length-4),n),152*n},C=(e,t)=>{const{imageUrl:n,name:a,price:o,quantityLeft:i}=((e,t)=>e.products.itemsMap[t])(e,t),r=((e,t)=>e.cart.itemsMap[t])(e,t);if(r)return{imageUrl:n,name:a,price:Math.ceil(o/100),count:r.count,disabled:0===i,moreButtonDisabled:i===r.count}},I=e=>{const{cart:{totalPrice:t,minimalPrice:n},cartPage:{isOrderStatusWaiting:a}}=e;return{disabled:a||t<n}},R=({cart:{minimalPrice:e,totalPrice:t}})=>Math.max(0,e-t),j=({cart:{totalPrice:e}})=>M(Math.ceil(e/100)),D=(e,t)=>{const{cart:n,cartPage:a}=e;switch(t.type){case"ADD_ITEM":{const{item:o}=t.payload,i=C(e,o);i&&(a.itemsMap[o]=i),a.order=n.order,a.totalPrice=j(e),a.toMinimumPrice=R(e);break}case"REMOVE_ITEM":{const{item:o}=t.payload,i=C(e,o);i?a.itemsMap[o]=i:delete a.itemsMap[o],a.order=n.order,a.totalPrice=j(e),a.toMinimumPrice=R(e),a.wrapperYShift=T(e),a.makePurchaseButton=I(e);break}case"REMOVE_ALL":e.cartPage=h.cartPage,a.makePurchaseButton=I(e);break;case"cart/SELECT_ITEM":a.selectedItemIndex=a.order.indexOf(t.payload),a.wrapperYShift=T(e),a.topGradientHidden=(({cartPage:{selectedItemIndex:e}})=>0===e)(e),a.bottomGradientHidden=(({cartPage:{selectedItemIndex:e,order:t}})=>e===t.length-1)(e);break;case"MAKE_PURCHASE":a.isOrderStatusWaiting=!0,a.makePurchaseButton=I(e);break;case"VALIDATION_OK":a.isOrderStatusWaiting=!1,a.makePurchaseButton=I(e)}};function L(e,t){return{type:e,payload:t}}function $(e){return{type:e}}const z=e=>L("ADD_ITEM",e),F=e=>L("REMOVE_ITEM",e),H=()=>$("ASK_FOR_ORDER_STATUS"),V=Object(g.a)(),B=[Object(p.a)(V),()=>e=>t=>{switch(t.type){case"ASK_FOR_STOCK":case"ASK_FOR_ORDER_STATUS":case"MAKE_PURCHASE":case"GO_TO_CART":window.AssistantClient.sendData({action_id:t.type})}return e(t)}];const U=Object(u.d)((e=>{const t=(e=>{const t=Object(d.b)(e);return(e,n)=>{e.router=t(e.router,n)}})(e);return(e=h,n)=>Object(b.a)(e,e=>{[v,k,t,w,_,D].forEach(t=>t(e,n))})})(V),Object(u.c)(Object(u.a)(...B))),{dispatch:W}=U;const G=({smart_app_data:e})=>{switch(e.command){case"SHOW_ITEMS":W(L("SHOW_ITEMS",e));break;case"ADD_ITEM":W(z(e));break;case"REMOVE_ALL":W($("REMOVE_ALL"));break;case"REMOVE_ITEM":W(F({...e,shouldRemoveMention:!0}));break;case"GO_TO_CATALOG":W((e=>L("GO_TO_CATALOG",e))(e)),W(Object(m.e)(f.CATALOG));break;case"GO_TO_NO_AREA":W(Object(m.e)(f.NO_AREA));break;case"GO_TO_VALIDATION":W(Object(m.e)(f.CART));break;case"VALIDATION_OK":W((e=>L("VALIDATION_OK",e))(e)),W(Object(m.e)(f.STATUS));break;case"GO_TO_WAIT":W($("GO_TO_WAIT")),W(H());break;case"GO_BACK":W($("GO_BACK")),W(Object(m.c)());break;case"ASK_AGAIN_FOR_ORDER_STATUS":W($("ASK_AGAIN_FOR_ORDER_STATUS")),setTimeout(()=>W(H()),2e3)}};function K(){const e=o.a.useRef(null);return o.a.useLayoutEffect(()=>{e.current instanceof HTMLElement&&e.current.focus()},[]),e}window.AssistantClient=window.AssistantClient||{},window.AssistantClient.onStart=function(){0},window.AssistantClient.onData=function(e){G(e)},window.AssistantClient.sendData=e=>{window.AssistantHost&&"function"===typeof window.AssistantHost.sendData&&window.AssistantHost.sendData(JSON.stringify(e),null)},window.AssistantClient.onRequestState=()=>{const e=(()=>{const{cart:e,user:t,router:n}=U.getState();return{foodtech:{currentScreen:n.location.pathname.substring(1),products:Object.keys(e.itemsMap).map(t=>({id:t,quantity:e.itemsMap[t].count})),totalPrice:{value:e.totalPrice,discountValue:e.totalPrice},address:t.address}}})(),t=JSON.stringify(e);window.AssistantHost&&"function"===typeof window.AssistantHost.updateState&&window.AssistantHost.updateState(t)},window.AssistantHost&&"function"===typeof window.AssistantHost.ready&&window.AssistantHost.ready();const q=()=>Object(c.d)();function Y(e){return Object(c.e)(e)}const X=n(106).cssPrefix;var J=(e,t="__",n="_")=>{function a(...n){return n.length?n.map(n=>X+e+t+n).join(" "):X+e}return a.elem=(a,o,i)=>X+e+t+a+n+o+(i?n+i:""),a.mod=(t,a)=>X+e+n+t+(a?n+a:""),a.modify=(a={},o)=>{const i=o?e+t+o:e;return[X,i," ",Object.entries(a).map(([e,t])=>Boolean(t)&&X+i+n+e).filter(Boolean).join(" ")].join("")},a.all=(...e)=>e.join(" "),a},Q=(e,t)=>(n,a)=>o.a.createElement(e,Object.assign({},n,{context:a,bem:J(t||e.name)}));n(249);const Z=Q(({bem:e,title:t,children:n,className:a})=>o.a.createElement("div",{className:e.all(e(),a||"")},window.history.length?o.a.createElement("span",{className:e("back")}):"",o.a.createElement("div",{className:e("section")},o.a.createElement("div",{className:e("logo")}),o.a.createElement("div",{className:e("title")},t)),o.a.createElement("div",{className:e("section")},n)),"Header");n(250);const ee=Q(({bem:e})=>{const t=q(),{address:{address_string:n}}=Y(({user:e})=>e),a=n;return o.a.createElement("div",{className:e(),tabIndex:0,onClick:S(()=>t(Object(m.e)(f.ADDRESS_SIMPLE)),200)},o.a.createElement("div",{className:e("icon")}),o.a.createElement("div",{className:e("text")},a))},"HeaderAddress");var te=n(107),ne=n.n(te);const ae=l.b.div`
    display: flex;
    align-items: center;
    margin-left: 8px;
    border-radius: 40px;
    padding: 20px 40px;
    height: 80px;
    box-sizing: border-box;
    transition: 0.2s ease-in-out;
    will-change: background-color;

    &:focus {
        background: #08a652;
    }
`,oe=l.b.div`
    position: relative;
    width: 40px;
    height: 36px;
    background-image: url('${ne.a}');
    background-repeat: no-repeat;
    background-size: contain;
`,ie=l.b.span`
    position: absolute;
    top: -14px;
    right: -12px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    line-height: 28px;

    font-size: 20px;

    box-sizing: border-box;

    color: #fff;
    border-radius: 50%;
    background: #08a652;

    transition: 0.2s ease-in-out;
    will-change: background-color;

    ${ae}:focus & {
        color: #08a652;

        background: #fff;
        border: 2px solid #08a652;
    }
`,re=l.b.div`
    height: 48px;
    margin-left: 16px;
    font-size: 32px;
    font-weight: 600;
    line-height: 50px;
    color: #fff;
`,le=()=>{const e=q(),{totalCount:t,totalPrice:n}=Y(({cart:e})=>e);return o.a.createElement(ae,{tabIndex:0,onClick:S(()=>{e(Object(m.e)(f.CART)),e($("GO_TO_CART"))},200)},o.a.createElement(oe,null,t>0&&o.a.createElement(ie,null,t)),o.a.createElement(re,null,M(Math.ceil(n/100))," \u20bd"))},ce={"sold-out":"\u0420\u0430\u0441\u043a\u0443\u043f\u0438\u043b\u0438","few-left":"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043c\u0430\u043b\u043e",sale:"\u0421\u043a\u0438\u0434\u043a\u0430"},se={"sold-out":"#080808","few-left":"#F6650A",sale:"#08A652"},de=l.b.div`
    padding: 8px 16px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    border-radius: 16px;
    background-color: ${e=>se[e.type]};
`;var ue=n(39),pe=n.n(ue);const me=l.b.div`
    position: relative;
    padding: 32px 32px 36px;
    box-sizing: border-box;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
`,ge=l.b.div`
    height: 80px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 500;
    color: #fff;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`,fe=l.b.div`
    margin-top: 12px;
    display: flex;
`,be=l.b.div`
    height: 40px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
`,he=l.b.div`
    height: 40px;
    line-height: 40px;
    margin-left: 8px;
    font-size: 32px;
    font-weight: 600;
    color: #08a652;
`,xe=l.b.div`
    display: block;
    height: 392px;
    width: 392px;

    background-image: url('${e=>e.imageUrl}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`,Ee=l.b.div`
    position: absolute;
    left: 16px;
    top: 16px;

    height: 64px;
    width: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 28px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.55);

    background: #eaeaec;
    border-radius: 40px;
`,we=l.b.div`
    position: absolute;
    top: -52px;
    right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    opacity: 0;
    border-radius: 50%;
    background: ${({disabled:e})=>e?"#3b4b5e":"#08a652"};
    transition: opacity 0.2s ease-in-out;

    &::before {
        content: '';

        display: block;

        height: 32px;
        width: 32px;

        opacity: ${({disabled:e})=>e?"0.5":"1"};

        transition: background 0.2s ease-in-out, opacity 0.2s ease-in-out;

        background-image: url('${pe.a}');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
`,ye=Object(l.b)(({type:e,children:t,...n})=>o.a.createElement(de,Object.assign({type:e},n),ce[e]," ",t))`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1;
`,ve=l.b.div`
    position: relative;
    width: 392px;
    height: 592px;

    margin-right: 32px;

    display: flex;
    flex-direction: column;

    overflow: hidden;
    border-radius: 24px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);

    transition: 0.4s ease-in-out;
    will-change: transform;
    will-change: background-color;

    &:focus {
        transform: scale(1.08);

        background-color: rgba(255, 255, 255, 0.1);

        ${we} {
            opacity: 1;
        }
    }

    ${({disabled:e})=>e&&l.a`
            ${me},
            ${xe} {
                opacity: 0.5;
            }
        `}
`,ke=({shouldFocusOnMount:e,imageUrl:t,index:n,count:a,name:i,id:r,price:l,badge:c,disabled:s,buttonDisabled:d})=>{const u=q(),p=o.a.useCallback(S(()=>u(z({item:r,count:"1"})),150),[u,r]),m=o.a.useCallback(()=>u(L("catalog/SELECT_ITEM",r)),[u,r]),g=K();return o.a.createElement(ve,{ref:e?g:void 0,tabIndex:s?-1:0,disabled:s,onFocus:m,onClick:p},c?o.a.createElement(ye,c):"",o.a.createElement(Ee,null,n),o.a.createElement(xe,{imageUrl:t}),o.a.createElement(me,null,o.a.createElement(we,{disabled:d}),o.a.createElement(ge,null,i),o.a.createElement(fe,null,o.a.createElement(be,null,l," \u20bd"),a?o.a.createElement(he,null,"\xd7",a):"")))},Ne=l.b.div`
    margin-left: 112px;
    margin-top: 72px;
    height: 640px;
    overflow: hidden;
`,Pe=l.b.div`
    display: flex;
    padding: 24px 16px 44px;
    height: 660px;
    box-sizing: border-box;
    overflow-x: scroll;
    --spatial-navigation-contain: contain;
    transition: transform 0.4s ease-in-out;
`,Oe=Q(()=>{const{itemsMap:e,order:t}=Y(({catalogPage:e})=>e),n=o.a.useMemo(()=>t.map(t=>e[t]),[t,e]);return o.a.createElement(Ne,null,o.a.createElement(Pe,null,n.map(e=>o.a.createElement(ke,Object.assign({key:e.id},e)))))},"CatalogList");var Ae=n(111);const _e=({itemWidth:e,itemHeight:t,borderRadius:n,rowCount:a,columnCount:i,paddingBetweenColumns:r,paddingBetweenRows:l,...c})=>{const s=Array.from(Array(i)).map((i,c)=>Array.from(Array(a)).map((a,i)=>o.a.createElement("rect",{key:`${c} ${i}`,x:c*(e+r),y:i*(t+l),width:e,height:t,rx:n,ry:n})));return o.a.createElement(Ae.a,c,s)};n(252);const Me=Q(({bem:e})=>o.a.createElement("div",{className:e()},o.a.createElement(_e,{viewBox:"0 0 2088 592",width:"100%",height:"100%",backgroundColor:"#262828",foregroundColor:"#414545",itemWidth:392,itemHeight:592,borderRadius:24,rowCount:2,columnCount:5,paddingBetweenRows:32,paddingBetweenColumns:32,speed:2})),"CatalogSkeleton"),Se=()=>{const e=q(),{cart:t,catalogPage:{order:n}}=Y(({cart:e,products:t,catalogPage:n})=>({cart:e,products:t,catalogPage:n}));return o.a.useEffect(()=>{e($("ASK_FOR_STOCK"))},[e]),o.a.useEffect(()=>{0},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{title:"\u0421\u0430\u043c\u043e\u043a\u0430\u0442"},o.a.createElement(ee,null),t.totalCount>0?o.a.createElement(le,null):""),n.length?o.a.createElement(Oe,null):o.a.createElement(Me,null))};var Te=n(112),Ce=n.n(Te);const Ie=l.b.button`
    padding: 20px 40px;
    border-radius: 40px;
    display: flex;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 32px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease-in-out;

    &:focus {
        background-color: #08a652;
    }

    &[disabled] {
        opacity: 0.5;
    }
`,Re=({className:e,shouldFocusOnMount:t,...n})=>{const a=K();return o.a.createElement(Ie,Object.assign({className:e,ref:t?a:null,type:"button"},n))},je=l.b.div`
    position: relative;
    display: flex;
    padding-top: 48px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    width: 776px;
`,De=l.b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 132px;
    height: 124px;
`,Le=l.b.div`
    position: relative;
    width: 132px;
    height: 86px;
    background: #e12d39;
    border-radius: 108px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,$e=l.b.div`
    color: #fff;
    height: 34px;
    font-size: 32px;
    font-weight: 600;
    line-height: 34px;
    text-align: center;
`,ze=l.b.div`
    height: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
`,Fe=l.b.div`
    height: 34px;
    width: 4px;
    background: #e12d39;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`,He=l.b.div`
    margin-top: -2px;
    width: 74px;
    height: 6px;
    background: #06182e;
    filter: blur(6px);
    display: flex;
    justify-content: center;
`,Ve=l.b.div`
    margin-top: -4px;
    width: 50px;
    height: 4px;
    background: #06182e;
    filter: blur(4px);
`,Be=l.b.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 56px;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: #fff;
`,Ue=l.b.div`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,We=l.b.div`
    margin-top: 8px;
    height: 40px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    color: #fff;
`,Ge=l.b.div`
    margin-top: 60px;
    height: 56px;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: #fff;
`,Ke=l.b.div`
    margin-top: 8px;
    height: 40px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    color: #fff;
`,qe=l.b.div`
    margin-top: 14px;
    text-align: center;
    font-size: 32px;
    line-height: 44px;
    color: rgba(255, 255, 255, 0.74);
`,Ye=Object(l.b)(Re)`
    margin-top: 64px;

    padding: 20px 40px;
    border-radius: 40px;

    display: flex;

    border: none;

    color: #fff;

    font-weight: 600;
    font-size: 32px;

    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.1);

    transition: background-color 0.3s ease-in-out;

    &:focus {
        background-color: #08a652;
    }
`,Xe=()=>{const e=q(),{phone_num:t,address:{address_string:n,building:a,confirmed:i},customer_name:r}=Y(({user:e})=>e),{makePurchaseButton:l}=Y(({cartPage:e})=>e),c=t,s=r,d=n;return o.a.createElement(je,null,o.a.createElement(De,null,o.a.createElement(Le,null,o.a.createElement($e,null,"15-30"),o.a.createElement(ze,null,"\u043c\u0438\u043d")),o.a.createElement(Fe,null),o.a.createElement(He,null),o.a.createElement(Ve,null)),o.a.createElement(Be,null,d),i?o.a.createElement(o.a.Fragment,null,o.a.createElement(Ue,null,o.a.createElement(We,null,a),o.a.createElement(Ge,null,c),o.a.createElement(Ke,null,s)),o.a.createElement(Ye,Object.assign({},l,{shouldFocusOnMount:!0,onClick:S(()=>e($("MAKE_PURCHASE")),200)}),"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435")):o.a.createElement(o.a.Fragment,null,o.a.createElement(qe,null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0443, \u043f\u043e\u0434\u044a\u0435\u0437\u0434 \u0438 \u0434\u0440\u0443\u0433\u0443\u044e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"),o.a.createElement(Ye,{shouldFocusOnMount:!0,onClick:S(()=>e(L("UPDATE_USER",{location:"\u043f\u043e\u0434\u044a\u0435\u0437\u0434 1, \u043a\u043e\u0440\u043f\u0443\u0441 \u0413",phoneNumber:"+7 910 345 67 89",name:"\u0421\u0435\u0440\u0433\u0435\u0439"})),200)},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441")))};var Je=n(113),Qe=n.n(Je);const Ze=l.b.div`
    position: absolute;
    left: 8px;
    top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    font-size: 28px;
    font-weight: 600;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.55);
    background-color: #eaeaec;
`,et=l.b.div`
    height: 120px;
    width: 120px;
    border-radius: 16px;
    margin-right: 32px;
    background-image: url('${({imageUrl:e})=>e}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`,tt=l.b.div`
    width: 384px;
    margin-right: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,nt=l.b.div`
    line-height: 40px;
    font-size: 32px;
    font-weight: 500;
    color: #fff;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    ${({oneLine:e})=>e&&l.a`
            -webkit-line-clamp: 1;
        `}
`,at=l.b.div`
    margin-top: 4px;
    height: 36px;
    line-height: 36px;
    font-size: 28px;
    color: rgba(255, 255, 255, 0.47);
`,ot=l.b.div`
    margin-top: 4px;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    color: #f6650a;
`,it=l.b.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
    box-sizing: border-box;

    width: 216px;
    height: 80px;
    border-radius: 40px;

    will-change: background-color;

    transition: 0.2s ease-in-out;

    ${({focused:e})=>e&&l.a`
            background: rgba(255, 255, 255, 0.05);
        `}
`,rt=l.b.div`
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    color: #fff;
`,lt=Object(l.b)(Re)`
    background: rgba(255, 255, 255, 0.05);

    &:focus {
        background-color: #e12d39;
    }
`,ct=l.b.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 32px;
    height: 64px;
    width: 64px;
    border: none;
    will-change: background-color;
    transition: 0.2s ease-in-out;

    &::before {
        content: '';

        height: 24px;
        width: 24px;

        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    &[disabled] {
        opacity: 0.4;
    }

    ${({view:e})=>"less"===e&&l.a`
            &:focus {
                background: #08a652;
            }

            &::before {
                background-image: url('${Qe.a}');
            }
        `}

    ${({view:e})=>"more"===e&&l.a`
            &:focus {
                background: #08a652;
            }

            &::before {
                background-image: url('${pe.a}');
            }
        `}

    ${({view:e})=>"remove"===e&&l.a`
            transform: rotate(45deg);

            &:focus {
                background-color: #e12d39;
            }

            &::before {
                background-image: url('${pe.a}');
            }
        `}
`,st=l.b.div`
    position: relative;
    display: flex;
    height: 152px;
    width: 832px;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;

    ${({disabled:e})=>e&&l.a`
            ${Ze}
            ${et}
            ${nt}
            ${at} {
                    opacity: .24;
            }

            ${at} {
                color: #fff;
        `}
`,dt=({index:e,id:t})=>{const{imageUrl:n,name:a,price:i,count:r,disabled:l,moreButtonDisabled:c}=Y(({cartPage:{itemsMap:e}})=>e[t]),s=q(),d=o.a.useCallback(S(()=>{s(F({item:t,count:"1",shouldRemoveMention:!r}))},100),[s,t,r]),u=o.a.useCallback(S(()=>{s(z({item:t,count:"1"}))},100),[s,t]),p=o.a.useCallback(S(()=>{s(F({item:t,count:String(r),shouldRemoveMention:!0}))},100),[s,t,r]),m=o.a.useCallback(()=>s(L("cart/SELECT_ITEM",t)),[s,t]);return o.a.createElement(st,null,o.a.createElement(Ze,null,e),o.a.createElement(et,{imageUrl:n}),o.a.createElement(tt,null,o.a.createElement(nt,null,a),o.a.createElement(at,null,i," \u20bd"),l?o.a.createElement(ot,null,"\u0420\u0430\u0441\u043a\u0443\u043f\u0438\u043b\u0438"):""),l?o.a.createElement(lt,{onFocus:m,onClick:p},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"):o.a.createElement(it,null,o.a.createElement(ct,{type:"button","aria-label":"less",view:r?"less":"remove",onFocus:m,onClick:d}),o.a.createElement(rt,null,r),o.a.createElement(ct,{type:"button","aria-label":"more",view:"more",disabled:c,onFocus:m,onClick:u})))},ut=e=>{e.currentTarget.scrollTop=0},pt=l.b.div`
    position: relative;
    height: 792px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,mt=l.b.div`
    position: relative;
    width: 832px;
    max-height: 608px;
    overflow: hidden;
    --spatial-navigation-contain: contain;
`,gt=l.b.div`
    overflow-x: hidden;
    width: 832px;
    padding-right: 10px;
    will-change: transform;
    transition: transform 0.5s ease-in-out;

    transform: translateY(-${({YShift:e})=>e}px);
`,ft=l.b.div`
    margin-top: 32px;
    margin-left: 16px;
    line-height: 56px;
    font-size: 48px;
    font-weight: 600;
    color: #fff;
`,bt=l.b.div`
    margin: 8px 0 0 16px;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #f6650a;
`,ht=l.b.div`
    position: absolute;
    left: 0;
    right: 0;
    height: 160px;
    z-index: 1;
    background: linear-gradient(0, #001124 0%, rgba(0, 17, 36, 0) 89.09%);
    transition: opacity .2s ease-in-out;

    ${({view:e})=>"top"===e&&l.a`
            top: -1px;

            transform: rotate(180deg);
        `}

    ${({view:e})=>"bottom"===e&&l.a`
            bottom: -1px;
        `}

    opacity: ${({hidden:e})=>e?"0":"1"};
`,xt=()=>{const{order:e,totalPrice:t,toMinimumPrice:n,topGradientHidden:a,bottomGradientHidden:i,wrapperYShift:r}=Y(({cartPage:e})=>e);return o.a.useEffect(()=>{0},[]),o.a.createElement(pt,null,o.a.createElement(mt,{onScroll:ut},o.a.createElement(ht,{view:"top",hidden:a}),o.a.createElement(gt,{YShift:r},e.map((e,t)=>o.a.createElement(dt,{key:e,index:t+1,id:e}))),o.a.createElement(ht,{view:"bottom",hidden:i})),o.a.createElement(ft,null,"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430 ",t," \u20bd"),n?o.a.createElement(bt,null,"\u0414\u043e \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430 \u0435\u0449\u0435 ",n," \u20bd"):"")},Et=l.b.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url('${Ce.a}');

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        background: linear-gradient(90.98deg, #001124 50.03%, rgba(0, 17, 36, 0) 99.56%);
    }
`,wt=l.b.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 112px;
`,yt=l.b.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.6);

    &::before {
        content: 'Здесь будет крутиться роскошный спиннер';
        font-size: 56px;
        color: #fff;
    }
`,vt=()=>{const{isOrderStatusWaiting:e}=Y(({cartPage:e})=>e);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Et,null),o.a.createElement(Z,{title:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),o.a.createElement(wt,null,o.a.createElement(xt,null),o.a.createElement(Xe,null)),e?o.a.createElement(yt,null):"")};var kt=n(72),Nt=n.n(kt),Pt=n(114),Ot=n.n(Pt),At=n(115),_t=n.n(At),Mt=n(116),St=n.n(Mt),Tt=n(117),Ct=n.n(Tt),It=n(118),Rt=n.n(It),jt=n(119),Dt=n.n(jt),Lt=n(120),$t=n.n(Lt);const zt=Object(l.b)(Re)`
    margin-top: 60px;
`,Ft=l.b.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 206px 0 0;
`,Ht=l.b.div`
    font-size: 32px;
    font-weight: 600;
    line-height: 44px;
    color: rgba(255, 255, 255, 0.74);
`,Vt=l.b.div`
    margin-top: 16px;
    font-weight: bold;
    font-size: 64px;
    line-height: 72px;
    text-align: center;
    color: #fff;
`,Bt=l.b.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`,Ut=Object(l.b)(Bt)`
    position: absolute;
    top: 92px;
    left: 834px;

    height: 61px;
    width: 61px;

    background-image: url('${Nt.a}');
`,Wt=Object(l.b)(Bt)`
    position: absolute;
    top: 0;
    left: 482px;

    height: 61px;
    width: 61px;

    background-image: url('${Ot.a}');
`,Gt=Object(l.b)(Bt)`
    position: absolute;
    top: 280px;
    left: 236px;

    height: 46px;
    width: 46px;

    background-image: url('${_t.a}');
`,Kt=Object(l.b)(Bt)`
    position: absolute;
    top: 158px;
    left: 1487px;

    height: 53px;
    width: 53px;

    background-image: url('${St.a}');
`,qt=Object(l.b)(Bt)`
    position: absolute;
    top: 594px;
    left: 340px;

    height: 53px;
    width: 53px;

    transform: rotate(90deg);

    background-image: url('${Nt.a}');
`,Yt=Object(l.b)(Bt)`
    position: absolute;
    top: 500px;
    left: 652px;

    height: 60px;
    width: 60px;

    background-image: url('${Ct.a}');
`,Xt=Object(l.b)(Bt)`
    position: absolute;
    top: 705px;
    left: 1044px;

    height: 40px;
    width: 40px;

    background-image: url('${Rt.a}');
`,Jt=Object(l.b)(Bt)`
    position: absolute;
    top: 492px;
    left: 1268px;

    height: 40px;
    width: 40px;

    background-image: url('${Dt.a}');
`,Qt=Object(l.b)(Bt)`
    position: absolute;
    top: 590px;
    left: 1604px;

    height: 90px;
    width: 90px;

    background-image: url('${$t.a}');
`,Zt=()=>{const{orderId:e}=Y(({cart:e})=>e);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{title:"\u0421\u0430\u043c\u043e\u043a\u0430\u0442"}),o.a.createElement(Ft,null,o.a.createElement(Ht,null,"\u0417\u0430\u043a\u0430\u0437 #",e," \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d"),o.a.createElement(Vt,null,"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437!",o.a.createElement("br",null),"\u0411\u0443\u0434\u0435\u043c \u0443 \u0432\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 15-30 \u043c\u0438\u043d\u0443\u0442."),o.a.createElement(zt,{shouldFocusOnMount:!0},"\u041e\u0447\u0435\u043d\u044c \u0436\u0434\u0443"),o.a.createElement(Ut,null),o.a.createElement(Wt,null),o.a.createElement(Gt,null),o.a.createElement(Kt,null),o.a.createElement(qt,null),o.a.createElement(Yt,null),o.a.createElement(Xt,null),o.a.createElement(Jt,null),o.a.createElement(Qt,null)))};n(253);const en=Q(({bem:e})=>{K();const[t,n]=o.a.useState(0);var a,i;return a=()=>n(3===t?0:t+1),i=3e3,o.a.useEffect(()=>{const e=setInterval(a,i);return()=>clearInterval(e)}),o.a.createElement("div",{className:e.modify({[`type-${t+1}`]:!0})},o.a.createElement("div",{className:e("glow")},o.a.createElement("div",{className:e.modify({[`type-${t+1}`]:!0},"glow-1")}),o.a.createElement("div",{className:e.modify({[`type-${t+1}`]:!0},"glow-2")}),o.a.createElement("div",{className:e.modify({[`type-${t+1}`]:!0},"glow-3")}),o.a.createElement("div",{className:e.modify({[`type-${t+1}`]:!0},"glow-4")})),o.a.createElement("div",{className:e("title")},"\u041f\u043e\u043f\u043a\u043e\u0440\u043d \u0438 \u043d\u0430\u043f\u0438\u0442\u043a\u0438",o.a.createElement("br",null),"\u043a \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0443 \u0444\u0438\u043b\u044c\u043c\u043e\u0432",o.a.createElement("br",null),"\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432"),o.a.createElement("div",{className:e("subtitle")},"\u0414\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15-30 \u043c\u0438\u043d\u0443\u0442 \u0434\u043b\u044f \u041c\u043e\u0441\u043a\u0432\u044b \u0438 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430"),Array.from(Array(4)).map((n,a)=>o.a.createElement("div",{key:a,className:e.modify({[`type-${a+1}`]:!0,hidden:a!==t},"image")})),o.a.createElement("div",{className:e("button-container")},o.a.createElement(Re,{className:e("button"),shouldFocusOnMount:!0},"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441"),o.a.createElement(Re,{className:e("button")},"\u041d\u0435 \u0441\u0435\u0439\u0447\u0430\u0441")))},"Promo");n(254);const tn=Q(({bem:e})=>{const{address:t}=Y(({user:e})=>e);return o.a.createElement("div",{className:e()},o.a.createElement(Z,{className:e("header"),title:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),o.a.createElement("div",{className:e("container")},o.a.createElement("div",{className:e("badge")},o.a.createElement("div",{className:e("badge-body")}),o.a.createElement("div",{className:e("badge-kernel")}),o.a.createElement("div",{className:e.modify({big:!0},"badge-shadow")}),o.a.createElement("div",{className:e.modify({small:!0},"badge-shadow")})),o.a.createElement("div",{className:e("title")},t),o.a.createElement("div",{className:e("subtitle")},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0430\u0434\u0440\u0435\u0441\u0443"),o.a.createElement(Re,{shouldFocusOnMount:!0,className:e("button")},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),o.a.createElement("div",{className:e("background")}))},"NoArea");n(255);const nn=Q(({bem:e})=>o.a.createElement("div",{className:e()},"\u042d\u0442\u043e \u0441\u043a\u0440\u0438\u043d\u0441\u0435\u0439\u0432\u0435\u0440",o.a.createElement("br",null),"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0440\u043e\u0441\u043a\u043e\u0448\u043d\u044b\u0439 \u043f\u0440\u0435\u043b\u043e\u0430\u0434\u0435\u0440 \u0441 \u043f\u043e\u043f\u043a\u043e\u0440\u043d\u043e\u043c"),"ScreenSaver");n(256);const an=Q(({bem:e})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{title:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),o.a.createElement("div",{className:e("container")},o.a.createElement("input",{type:"text"}))),"AddressSimple");n(257);const on=l.b.div`
    transform: ${""};
`,rn=l.b.div`
    overflow: hidden;
    width: 100%;
    height: 100vh;
    outline: none;
    font-family: 'SB Sans Text', Helvetica, Arial, sans-serif;
    background: #001124;

    ${""}
`;n(258);const ln=e=>{r.a.render(o.a.createElement(e,null),document.getElementById("application_root"))};ln(()=>o.a.createElement(c.a,{store:U},o.a.createElement(d.a,{history:V},o.a.createElement(on,null,o.a.createElement(rn,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{path:f.CATALOG},o.a.createElement(Se,null)),o.a.createElement(s.a,{path:f.CART},o.a.createElement(vt,null)),o.a.createElement(s.a,{path:f.STATUS},o.a.createElement(Zt,null)),o.a.createElement(s.a,{path:f.ADDRESS_SIMPLE},o.a.createElement(an,null)),o.a.createElement(s.a,{path:f.PROMO},o.a.createElement(en,null)),o.a.createElement(s.a,{path:f.NO_AREA},o.a.createElement(tn,null)),o.a.createElement(s.a,{path:f.SCREEN_SAVER},o.a.createElement(nn,null))))))))},39:function(e,t,n){e.exports=n.p+"static/media/plus.1b914755.svg"},72:function(e,t,n){e.exports=n.p+"static/media/figure-1.cad64c9b.svg"}},[[121,1,2]]]);
//# sourceMappingURL=main.5d69d731.chunk.js.map