!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function S(e){return l=e,f=setTimeout(j,t),s?y(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function j(){var e=g();if(h(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-c);return d?p(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=g(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(j,t),y(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=O(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?c(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),h=document.querySelector('[type="email"]'),j=document.querySelector('[name="message"]'),w=localStorage.getItem("feedback-form-state"),T={};w&&function(){JSON.parse(w).hasOwnProperty("email")&&(h.value=JSON.parse(w).email);JSON.parse(w).hasOwnProperty("message")&&(j.value=JSON.parse(w).message)}(),S.addEventListener("input",(function(e){T[e.target.getAttribute("name")]=e.target.value;var t=JSON.stringify(T);localStorage.setItem("feedback-form-state",t)})),S.addEventListener("submit",n((function(e){e.preventDefault(),console.log("email: ".concat(h.value,", message: ").concat(j.value)),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}),500))}();
//# sourceMappingURL=03-feedback.3bbbdc4e.js.map
