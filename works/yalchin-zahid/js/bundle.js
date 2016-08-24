!function t(e,o,i){function n(a,l){if(!o[a]){if(!e[a]){var c="function"==typeof require&&require;if(!l&&c)return c(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var r=o[a]={exports:{}};e[a][0].call(r.exports,function(t){var o=e[a][1][t];return n(o?o:t)},r,r.exports,t,e,o,i)}return o[a].exports}for(var s="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(t,e,o){"use strict";var i=t("./modules/animationSvg"),n=t("./modules/colorTheme"),s=t("./modules/offCanvasNav"),a=t("./modules/backgroundAudio"),l=t("./modules/jqueryPlugins"),c=t("./modules/formValidation"),r=t("./modules/videoPopup");n.colorTheme.init(),i.animationSvg.init(),s.offCanvasNav.init(),a.backgroundAudio.init(),l.jqueryPlugins.init(),c.formValidation.init(),r.videoPopup.init()},{"./modules/animationSvg":2,"./modules/backgroundAudio":3,"./modules/colorTheme":4,"./modules/formValidation":5,"./modules/jqueryPlugins":6,"./modules/offCanvasNav":7,"./modules/videoPopup":8}],2:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.animationSvg={init:function(){this.pageLoad()},pageLoad:function(){window.addEventListener?window.addEventListener("load",setTimeout(this.animateLine,1e3),!1):window.attachEvent&&window.attachEvent("onload",setTimeout(this.animateLine,1e3))},animateLine:function(){this.path=document.getElementById("skylinePath"),this.path&&(this.totalLenght=this.path.getTotalLength(),this.path.style.opacity="1",this.path.style.strokeDasharray=this.totalLenght,this.path.style.strokeDashoffset=this.totalLenght,this.path.classList.add("skyline__path--animated"))}}},{}],3:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.backgroundAudio={init:function(){this.pageLoad()},pageLoad:function(){var t=this;window.addEventListener?window.addEventListener("load",this.playAudion(t),!1):window.attachEvent&&window.attachEvent("onload",this.playAudion(t))},playAudion:function(t){var e=this;this.toggle=document.getElementById("bgAudion"),this.click="ontouchstart"in window?"touchstart":"click";var o=new Audio("./audio/background-music.mp3");this.toggle&&(screen.width<500||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?this.toggle.style.display="none":(o.volume=.1,o.loop=!0,t.fadeAudio(o),o.play(),this.toggle.classList.add("equalizer--play"),this.toggle.addEventListener(this.click,function(){o.paused?(o.volume=.1,t.fadeAudio(o),o.play(),e.toggle.classList.add("equalizer--play")):(o.volume=.1,o.pause(),e.toggle.classList.remove("equalizer--play"))},!1)))},fadeAudio:function(t){var e=this;this.vol=.1,this.interval=200;var o=setInterval(function(){e.vol<.6?(e.vol+=.05,t.volume=e.vol):clearInterval(o)},this.interval)}}},{}],4:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.colorTheme={init:function(){this.pageLoad(),this.eventHandler()},pageLoad:function(){window.addEventListener?window.addEventListener("load",this.getColor,!1):window.attachEvent&&window.attachEvent("onload",this.getColor)},eventHandler:function(){this.toggle=document.getElementById("colorSwitch"),this.click="ontouchstart"in window?"touchstart":"click",this.toggle&&this.toggle.addEventListener(this.click,this.changeColor,!1)},changeColor:function(t){switch(this.colorNumb=this.dataset.color,this.colorBody=document.getElementById("colorTheme"),this.colorNumb){case"1":this.dataset.color=2,this.colorBody.classList.remove("color-theme--1","color-theme--3"),this.colorBody.classList.add("color-theme--2"),localStorage.setItem("colorCode","2");break;case"2":this.dataset.color=3,this.colorBody.classList.remove("color-theme--1","color-theme--2"),this.colorBody.classList.add("color-theme--3"),localStorage.setItem("colorCode","3");break;case"3":this.dataset.color=1,this.colorBody.classList.remove("color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--1"),localStorage.setItem("colorCode","1")}},getColor:function(){this.colorCode=localStorage.getItem("colorCode"),this.colorBody=document.getElementById("colorTheme"),this.colorNumb=document.getElementById("colorSwitch"),this.colorBody.classList.remove("color-theme--1","color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--"+this.colorCode),this.colorNumb&&(this.colorNumb.dataset.color=this.colorCode),void 0!==this.colorCode&&null!==this.colorCode||(this.colorBody.classList.remove("color-theme--1","color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--1"),this.colorNumb&&(this.colorNumb.dataset.color=1))}}},{}],5:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.formValidation={init:function(){this.eventHandle()},eventHandle:function(){this.contactForm=document.getElementById("contactForm"),this.contactForm&&this.contactForm.addEventListener("submit",this.validateForm,!1)},validateForm:function(t){console.log("send"),t.preventDefault()},submitForm:function(t,e,o){this.xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),this.xmlhttp.onreadystatechange=function(){4==this.xmlhttp.readyState&&200==this.xmlhttp.status&&console.log(this.xmlhttp.responseText)},this.xmlhttp.open("POST","your_url.php",!0),this.xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.xmlhttp.send("name="+t+"&email="+e+"&msg="+o),this.xmlhttp.send()}}},{}],6:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.jqueryPlugins={init:function(){$(document).ready(function(t){$("html").niceScroll({cursorwidth:"8px",cursorborderradius:"0",cursorborder:"none",cursorcolor:"",horizrailenabled:!1}),$(".video")&&$(".video").fancybox({openEffect:"none",closeEffect:"none",helpers:{media:{}},afterShow:function(){$("#bgAudion").trigger("click")},afterClose:function(){$("#bgAudion").trigger("click")}}),particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})})}}},{}],7:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.offCanvasNav={init:function(){this.eventHandler()},eventHandler:function(){this.toggle=document.getElementById("offCanvasToggle"),this.close=document.getElementById("offCanvasToggleClose"),this.click="ontouchstart"in window?"touchstart":"click",this.toggle&&this.toggle.addEventListener(this.click,this.offCanvas,!1),this.close&&this.close.addEventListener(this.click,this.offCanvas,!1)},offCanvas:function(){this.offCanvas=document.getElementById("colorTheme"),this.offCanvas.classList.contains("canvas-menu--open")?this.offCanvas.classList.remove("canvas-menu--open"):this.offCanvas.classList.add("canvas-menu--open")}}},{}],8:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.videoPopup={init:function(){this.eventHandle()},eventHandle:function(){},playVideo:function(){}}},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
