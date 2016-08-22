!function e(t,o,i){function n(s,l){if(!o[s]){if(!t[s]){var c="function"==typeof require&&require;if(!l&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var r=o[s]={exports:{}};t[s][0].call(r.exports,function(e){var o=t[s][1][e];return n(o?o:e)},r,r.exports,e,t,o,i)}return o[s].exports}for(var a="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t,o){"use strict";var i=e("./modules/animationSvg"),n=e("./modules/colorTheme"),a=e("./modules/offCanvasNav"),s=e("./modules/backgroundAudio"),l=e("./modules/jqueryPlugins");n.colorTheme.init(),i.animationSvg.init(),a.offCanvasNav.init(),s.backgroundAudio.init(),l.jqueryPlugins.init()},{"./modules/animationSvg":2,"./modules/backgroundAudio":3,"./modules/colorTheme":4,"./modules/jqueryPlugins":5,"./modules/offCanvasNav":6}],2:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.animationSvg={init:function(){this.pageLoad()},pageLoad:function(){window.addEventListener?window.addEventListener("load",setTimeout(this.animateLine,1e3),!1):window.attachEvent&&window.attachEvent("onload",setTimeout(this.animateLine,1e3))},animateLine:function(){this.path=document.getElementById("skylinePath"),this.path&&(this.totalLenght=this.path.getTotalLength(),this.path.style.opacity="1",this.path.style.strokeDasharray=this.totalLenght,this.path.style.strokeDashoffset=this.totalLenght,this.path.classList.add("skyline__path--animated"))}}},{}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.backgroundAudio={init:function(){this.pageLoad()},pageLoad:function(){var e=this;window.addEventListener?window.addEventListener("load",this.playAudion(e),!1):window.attachEvent&&window.attachEvent("onload",this.playAudion(e))},playAudion:function(e){var t=this;this.toggle=document.getElementById("bgAudion"),this.click="ontouchstart"in window?"touchstart":"click";var o=new Audio("../audio/background-music.mp3");this.toggle&&(screen.width<500||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?this.toggle.style.display="none":(o.volume=.1,o.loop=!0,e.fadeAudio(o),o.play(),this.toggle.classList.add("equalizer--play"),this.toggle.addEventListener(this.click,function(){o.paused?(o.volume=.1,e.fadeAudio(o),o.play(),t.toggle.classList.add("equalizer--play")):(o.volume=.1,o.pause(),t.toggle.classList.remove("equalizer--play"))},!1)))},fadeAudio:function(e){var t=this;this.vol=.1,this.interval=200;var o=setInterval(function(){t.vol<.6?(t.vol+=.05,e.volume=t.vol):clearInterval(o)},this.interval)}}},{}],4:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.colorTheme={init:function(){this.pageLoad(),this.eventHandler()},pageLoad:function(){window.addEventListener?window.addEventListener("load",this.getColor,!1):window.attachEvent&&window.attachEvent("onload",this.getColor)},eventHandler:function(){this.toggle=document.getElementById("colorSwitch"),this.click="ontouchstart"in window?"touchstart":"click",this.toggle&&this.toggle.addEventListener(this.click,this.changeColor,!1)},changeColor:function(e){switch(this.colorNumb=this.dataset.color,this.colorBody=document.getElementById("colorTheme"),this.colorNumb){case"1":this.dataset.color=2,this.colorBody.classList.remove("color-theme--1","color-theme--3"),this.colorBody.classList.add("color-theme--2"),localStorage.setItem("colorCode","2");break;case"2":this.dataset.color=3,this.colorBody.classList.remove("color-theme--1","color-theme--2"),this.colorBody.classList.add("color-theme--3"),localStorage.setItem("colorCode","3");break;case"3":this.dataset.color=1,this.colorBody.classList.remove("color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--1"),localStorage.setItem("colorCode","1")}},getColor:function(){this.colorCode=localStorage.getItem("colorCode"),this.colorBody=document.getElementById("colorTheme"),this.colorNumb=document.getElementById("colorSwitch"),this.colorBody.classList.remove("color-theme--1","color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--"+this.colorCode),this.colorNumb&&(this.colorNumb.dataset.color=this.colorCode),void 0!==this.colorCode&&null!==this.colorCode||(this.colorBody.classList.remove("color-theme--1","color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--1"),this.colorNumb&&(this.colorNumb.dataset.color=1))}}},{}],5:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.jqueryPlugins={init:function(){$(document).ready(function(e){$("html").niceScroll({cursorwidth:"8px",cursorborderradius:"0",cursorborder:"none",cursorcolor:"",horizrailenabled:!1}),particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})})}}},{}],6:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.offCanvasNav={init:function(){this.eventHandler()},eventHandler:function(){this.toggle=document.getElementById("offCanvasToggle"),this.close=document.getElementById("offCanvasToggleClose"),this.click="ontouchstart"in window?"touchstart":"click",this.toggle&&this.toggle.addEventListener(this.click,this.offCanvas,!1),this.close&&this.close.addEventListener(this.click,this.offCanvas,!1)},offCanvas:function(){this.offCanvas=document.getElementById("colorTheme"),this.offCanvas.classList.contains("canvas-menu--open")?this.offCanvas.classList.remove("canvas-menu--open"):this.offCanvas.classList.add("canvas-menu--open")}}},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
