!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return v.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(h,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&i?y(e):(i=o=void 0,u)}function T(){var e=g(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),O=S.querySelector('input[name="email"]'),h=S.querySelector('textarea[name="message"]'),w="feedback-form-state";S.addEventListener("input",e(t)((function(){var e;e={email:O.value,message:h.value},localStorage.setItem(w,JSON.stringify(e))}),500)),function(){var e=localStorage.getItem(w);if(e){var t=JSON.parse(e);O.value=t.email,h.value=t.message}}(),S.addEventListener("submit",(function(e){e.preventDefault();var t={email:O.value,message:h.value};console.log(t),localStorage.removeItem(w),O.value="",h.value=""}))}();
//# sourceMappingURL=03-feedback.fecce20e.js.map
