parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".page__body"),t=document.querySelector(".header__menu-opener"),n=document.querySelector(".header__menu-closer"),l=document.querySelector(".header__nav"),o=document.querySelector(".header__logo"),r=document.querySelector(".header__nav-list"),c=document.querySelector(".contact-section__form");t.addEventListener("click",function(){l.style.left="0",e.style.overflow="hidden"}),n.addEventListener("click",function(){l.style.left="",e.style.overflow=""}),o.addEventListener("click",function(){l.style.left="",e.style.overflow=""}),r.addEventListener("click",function(t){"A"===t.target.tagName&&(l.style.left="",e.style.overflow="")}),c.addEventListener("submit",function(e){e.preventDefault(),c.name.value="",c.email.value="",c.message.value="",window.alert("Submitted")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c84ed3ed.js.map