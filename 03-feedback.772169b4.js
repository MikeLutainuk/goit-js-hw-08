function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var o,r,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=y();if(b(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&o?v(e):(o=r=void 0,a)}function w(){var e=y(),n=b(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(T,t),s?v(e):a}(l);if(d)return f=setTimeout(T,t),v(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,j(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const T="feedback-form-state",h=document.querySelector(".feedback-form"),w=document.querySelector("input"),O=document.querySelector("textarea");h.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:w.value,message:O.value}),e.currentTarget.reset(),localStorage.clear()})),h.addEventListener("input",e(t)((function(){const e={email:h.elements.email.value,message:h.elements.message.value};localStorage.setItem(T,JSON.stringify(e))}),500)),function(){const e=localStorage.getItem(T);if(e){const t=JSON.parse(e);w.value=t.email,O.value=t.message}}();
//# sourceMappingURL=03-feedback.772169b4.js.map
