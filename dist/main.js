(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),l=new URL(n(162),n.b),u=a()(o()),d=s()(l);u.push([e.id,"@font-face {\n\n    font-family: 'MyFont';\n  \n    src: url("+d+");\n    font-style: normal;\n  \n  }\nbody{\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    background-color: #EFEFEF;\n    color: #A9A9A9;\n    font-family: 'MyFont';\n}\nheader{\n    margin: 6rem 0 0 0;\n}\n#appTitle{\n    font-size: 3rem;\n    font-weight: 500;\n    padding-left: 5rem;\n    color: #A9A9A9;\n}\n#unitsTemp{\n    font-size: 1rem;\n    margin-right: 1rem;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n}\nbutton{\n    background-color: #FF3B3F;\n    color: #EFEFEF;\n    font-weight: 700;\n    border: none;\n}\n#submitCity{\n    margin-left: 1rem;\n    font-size: 1rem;\n    padding: 0.25rem 0.75rem;\n}\n#inputLocation{\n    display: flex;\n    justify-content: center;\n    margin-bottom: 1rem;\n   \n}\n#city{\n    font-size: 1rem;\n    width: 25rem;\n    height: 2rem;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 2px solid #FF3B3F;\n    background-color: #EFEFEF;\n    color: #A9A9A9;\n    font-weight: 700;\n} \n#weatherContainer > p{\n    padding: 0;\n}\n.city{\n    grid-column: 1/2;\n    grid-row: 1/2;\n    margin: auto 0 0 auto;\n    font-size: 2rem;\n}\n.description{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n.currentTemp{\n    grid-column: 1/3;\n    grid-row: 2/3;\n    margin: 0.5rem auto 0 auto;\n    font-size: 2rem;\n}\n.image{\n    grid-column: 3/4;\n    grid-row: 1/3;\n    margin: auto;\n    width: 8rem;\n    height: 5rem;\n}\n.groupDiv{\n    display: flex;\n    grid-column: 1/4;\n    grid-row: 3/4;\n    justify-content: space-evenly;\n    font-size: 1rem;\n}\n.center-div{\n    align-self: center;\n    margin-top: 1rem;\n}\n#weatherContainer{\n    width: 40vw;\n    height: 30vh;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr 0.5fr 1fr;\n}\ninput:focus, textarea:focus, select:focus{\n    outline: none;\n}\n",""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},162:(e,t,n)=>{e.exports=n.p+"452096e0fc6c44651530.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),s=n.n(c),l=n(216),u=n.n(l),d=n(589),p=n.n(d),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class f{constructor(e,t,n,r,o,i){this.location=e,this.currentTemp=t,this.highTemp=n,this.lowTemp=r,this.humidity=o,this.weatherDescription=i}setLocation(){const e=document.querySelector("#weatherContainer");let t=document.createElement("p");t.innerText=this.location,t.className="city",e.appendChild(t)}tempCurrent(){const e=document.querySelector("#weatherContainer");let t=document.querySelector("#unitsTemp").textContent,n=document.createElement("p");n.textContent=Math.round(this.currentTemp)+"°"+t,n.className="currentTemp",e.appendChild(n)}extraData(){const e=document.querySelector("#weatherContainer"),t=document.createElement("div");t.className="groupDiv";let n=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p");n.innerText=`Today's high: ${Math.round(this.highTemp)}°`,r.innerText=`Today's low: ${Math.round(this.lowTemp)}°`,o.innerText=`Humidity: ${Math.round(this.humidity)}%`,n.className="tempHigh",r.className="tempLow",o.className="humidity",t.appendChild(n),t.appendChild(r),t.appendChild(o),e.appendChild(t)}descriptionWeather(){const e=document.querySelector("#weatherContainer");let t=document.createElement("p");t.innerText=this.weatherDescription,t.className="description",e.appendChild(t)}async descriptionGIPHY(){const e=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=TbPeltjV90S63QgT73a8WFJcqM6aXkR4&s=${this.weatherDescription}`,{mode:"cors"});let t=(await e.json()).data.images.preview_gif.url;const n=document.querySelector("#weatherContainer"),r=document.createElement("img");r.className="image",r.src=t,n.appendChild(r)}clearData(){const e=document.querySelector("#weatherContainer");for(;e.firstElementChild;)e.removeChild(e.firstElementChild)}buildApp(){this.setLocation(),this.descriptionWeather(),this.tempCurrent(),this.extraData(),this.descriptionGIPHY()}}let g="imperial",v="Las Vegas";const y=document.querySelector("#submitCity"),w=document.querySelector("#unitsTemp"),b=document.querySelector("#city");function C(e,t){fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&appid=1003f232be7e2d8830d4130f042fe209`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){let t=e.weather,n=new f(e.name,e.main.temp,e.main.temp_max,e.main.temp_min,e.main.humidity,t[0].description);n.clearData(),n.buildApp()})).catch((function(e){e&&alert("Location not available.")}))}w.addEventListener("click",(e=>{let t=e.target.textContent;e.preventDefault(),"F"===t?(e.target.textContent="C",g="metric",C(v,g)):(e.target.textContent="F",g="imperial",C(v,g))})),C(v,g),y.addEventListener("click",(e=>{b.value&&(v=b.value,C(v,g),b.value="")}))})()})();