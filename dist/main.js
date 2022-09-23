(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"* {\r\n    margin: 0px;\r\n    border: 0px;\r\n    background-color: #333;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.text {\r\n    background-color: #444;\r\n    color: white;  \r\n    margin: 20px;  \r\n    font-size: 130%; \r\n}\r\n#content {\r\n    height: 100vh;\r\n    min-height: 600px;\r\n}\r\n#header {    \r\n    position: relative;\r\n    display: flex;    \r\n    justify-content: center;\r\n    height: 20vh;\r\n    min-height: 120px;\r\n    background-color: #444;    \r\n}    \r\n    #title {\r\n        background-color: #444;\r\n        color: white; \r\n        line-height: 15vh;\r\n        font-size: 360%;\r\n    }\r\n#menu {\r\n    position: absolute;\r\n    display: flex;\r\n    width: 40vw;  \r\n    min-width: 300px;            \r\n    height: 50px;\r\n    background-color: #333;\r\n    border-radius: 30px 30px 0px 0px;\r\n    top: calc(100% - 50px); \r\n    justify-content: space-around;\r\n    align-items: center;       \r\n}\r\n    .btn {\r\n        color: white;\r\n        font-size: 110%;\r\n        width: 100px;\r\n        height: 30px;        \r\n        border-radius: 30px;\r\n    }\r\n    .btn:hover {\r\n        cursor: pointer;\r\n        color: red;\r\n    }\r\n#page {    \r\n    min-height: 600px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;    \r\n}    \r\n    #welcome-img {\r\n        flex: 1;    \r\n        height: 500px;    \r\n        border-radius: 40px;\r\n        margin: 30px;\r\n        margin-left: 15px;\r\n        margin-right: 15px;\r\n        box-shadow: 10px 10px 0px 0px rgba(255, 255, 255, 0.165);        \r\n    } \r\n    #welcome-text {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex: 2;\r\n        height: 500px;\r\n        width: calc(60% - 90px); \r\n        max-width: 800px;\r\n        min-width: 500px;       \r\n        background-color: #444;\r\n        box-shadow: 10px 10px 0px 0px rgba(255, 255, 255, 0.165);   \r\n        border-radius: 40px;\r\n        margin: 30px;\r\n        margin-left: 15px;\r\n        margin-right: 30px; \r\n        text-align: center;\r\n        overflow: auto;     \r\n        padding: 10px;    \r\n    }\r\n#footer {\r\n    height: 150px;    \r\n    background-color: #444;\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<r.length;p++){var l=[].concat(r[p]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],p=t.base?s[0]+t.base:s[0],l=a[p]||0,u="".concat(p," ").concat(l);a[p]=l+1;var d=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),p=0;p<a.length;p++){var l=e(a[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.nc=void 0,(()=>{var r={};e.r(r);var n=e(379),t=e.n(n),o=e(795),a=e.n(o),i=e(569),c=e.n(i),s=e(565),p=e.n(s),l=e(216),u=e.n(l),d=e(589),f=e.n(d),h=e(426),x={};x.styleTagTransform=f(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=u(),t()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals,(0,r.default)()})()})();