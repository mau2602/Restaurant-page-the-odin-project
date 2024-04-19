(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,".button {\n    font-family: 'Antipasto Pro';\n    font-size: 20px;\n    border: none;\n    border-radius: 5px;\n    background-color: #2c3e50; \n    color: white;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: background-color 0.6s ease;\n    padding: 10px;\n}\n\n#button-station {\n    display: flex;\n    justify-content: center;\n    padding-bottom: 60px;\n}\n\n.button:hover {\n    background-color: #34495e; \n}\n\n#aboutP {\n    font-size: 30px;\n    text-align: center;\n    padding-top: 50px;\n    color: white;\n    font-family: 'coco gothic';\n}\n\n#menuDiv {\n    background-color: gray;\n    background-color: rgba(128, 128, 128, 0.5);\n    padding: 20px;\n}\n\n#dish {\n    color: white;\n    text-align: center;\n    position: relative;\n    font-size: 25px;\n    font-family: 'coco gothic';\n    opacity: 1;\n}\n\n",""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var l=r(e,o),s=0;s<i.length;s++){var d=t(i[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{let e=document.getElementById("home"),n=document.getElementById("content");function r(){n.innerHTML="";let e=document.createElement("div"),t=document.createElement("p"),r=document.createElement("p");t.innerHTML="Ristorante  Siracusa",t.style.color="white",t.style.fontSize="50px",t.style.position="relative",t.style.textAlign="center",t.style.padding="20px",t.style.fontWeight="700",t.style.fontFamily="Parisienne",r.innerText="Experience the best of Michelin-starred dining in Syracuse,\n with exquisite dishes highlighting modern Sicilian-Mediterranean inspired cuisine\n delivered with flawless service in beautiful surroundings.",r.style.color="white",r.style.textAlign="center",r.style.position="relative",r.style.fontSize="20px",r.style.fontFamily="coco gothic",e.appendChild(r),n.appendChild(t),n.appendChild(e)}e.addEventListener("click",(()=>{r()}));let o=document.getElementById("menu"),i=document.getElementById("content"),a=document.getElementById("content"),c=document.getElementById("about");var l=t(72),s=t.n(l),d=t(825),u=t.n(d),p=t(659),m=t.n(p),f=t(56),h=t.n(f),y=t(540),v=t.n(y),g=t(113),x=t.n(g),b=t(365),E={};E.styleTagTransform=x(),E.setAttributes=h(),E.insert=m().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=v(),s()(b.A,E),b.A&&b.A.locals&&b.A.locals,function(){let e=document.getElementById("background"),n=document.createElement("img");n.src="../src/img/pexels-pixabay-260922.jpg",n.style.width="100%",n.style.height="100%",n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.zIndex="-1",e.appendChild(n),r()}(),r(),o.addEventListener("click",(()=>{i.innerHTML="";let e=document.createElement("div");function n(n){e.appendChild(n),n.id="dish"}e.id="menuDiv";let t=document.createElement("p");t.innerText="Gin and Salt of Mothia-Marinated Red Shrimps \n on Oyster Mayonnaise and Crispy Algae, \n Smoked with Juniper",n(t);let r=document.createElement("p");r.innerText="Syracuse Potato Cream, with Sea Lettuce Algae \n    and Cooked-Raw Oyster Sponge",n(r);let o=document.createElement("p");o.innerText="Cuttlefish ink Crepe Roll \n with Langoustine in Sea Urchin Sauce",n(o);let a=document.createElement("p");a.innerText="Mancini Mezze Maniche Pasta \n with Smokend Prawns with Flakes of Jack Daniel’s \n Barrels and Egg Yolk Cream",n(a);let c=document.createElement("p");c.innerText="Sicilian Tuna “Tortelli” \n on Tomato Cream Datterino with Mint",n(c);let l=document.createElement("p");l.innerText="Cod Fillet with Iblea Saffron and Zucchini Cream",n(l),i.appendChild(e)})),c.addEventListener("click",(()=>{a.innerHTML="";let e=document.createElement("div"),n=document.createElement("p");n.id="aboutP",n.innerText="Contact Us!",e.appendChild(n),a.appendChild(e)}))})()})();