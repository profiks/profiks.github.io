!function t(e,o,i){function n(s,d){if(!o[s]){if(!e[s]){var l="function"==typeof require&&require;if(!d&&l)return l(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=o[s]={exports:{}};e[s][0].call(c.exports,function(t){var o=e[s][1][t];return n(o?o:t)},c,c.exports,t,e,o,i)}return o[s].exports}for(var a="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,o){"use strict";var i=t("./modules/animationSvg"),n=t("./modules/colorTheme"),a=t("./modules/offCanvasNav"),s=t("./modules/backgroundAudio"),d=t("./modules/formValidation"),l=t("./modules/videoPopup"),c=t("./modules/fullPageSlide"),r=t("./modules/canvasAnimation"),u=t("./modules/animatedLogo"),h=t("./modules/scrollNext"),m=(t("./modules/preventCopy"),t("./modules/videoInner")),g=t("./modules/jqueryPlugins");n.colorTheme.init(),m.videoInner.init(),i.animationSvg.init(),a.offCanvasNav.init(),s.backgroundAudio.init(),d.formValidation.init(),l.videoPopup.init(),c.fullPageSlide.init(),u.animatedLogo.init(),h.scrollNext.init(),(0,r.canvasAnimation)(),g.jqueryPlugins.init()},{"./modules/animatedLogo":2,"./modules/animationSvg":3,"./modules/backgroundAudio":4,"./modules/canvasAnimation":5,"./modules/colorTheme":6,"./modules/formValidation":7,"./modules/fullPageSlide":8,"./modules/jqueryPlugins":9,"./modules/offCanvasNav":10,"./modules/preventCopy":11,"./modules/scrollNext":12,"./modules/videoInner":13,"./modules/videoPopup":14}],2:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.animatedLogo={init:function(){this.pageLoad()},pageLoad:function(){window.addEventListener?window.addEventListener("load",this.animateLogoLines,!1):window.attachEvent&&window.attachEvent("onload",this.animateLogoLines)},animateLogoLines:function(){this.animLogo=document.getElementById("animatedLogo"),this.animLogo&&this.animLogo.classList.add("animated-logo--shown")}}},{}],3:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.animationSvg={init:function(){this.pageLoad()},pageLoad:function(){window.addEventListener?(window.addEventListener("load",this.animateLogo,!1),window.addEventListener("load",setTimeout(this.animateLine,3e3),!1)):window.attachEvent&&(window.attachEvent("onload",this.animateLogo),window.attachEvent("onload",setTimeout(this.animateLine,3e3)))},animateLine:function(){this.path=document.getElementById("skylinePath"),this.path&&(this.totalLenght=this.path.getTotalLength(),this.path.style.opacity="1",this.path.style.strokeDasharray=this.totalLenght,this.path.style.strokeDashoffset=2*this.totalLenght,this.path.classList.add("skyline__path--animated"))},animateLogo:function(){this.logo=document.getElementById("animatedLogoIntro"),this.logo&&this.logo.classList.add("animated-intro-logo--animated")}}},{}],4:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.backgroundAudio={init:function(){this.pageLoad()},pageLoad:function(){var t=this;window.addEventListener?window.addEventListener("load",this.playAudion(t),!1):window.attachEvent&&window.attachEvent("onload",this.playAudion(t))},playAudion:function(t){var e=this;this.toggle=document.getElementById("bgAudion"),this.click="ontouchstart"in window?"touchstart":"click";var o=new Audio("./audio/background-music.mp3");this.audioPlay=localStorage.getItem("audio"),this.toggle&&(screen.width<500||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?this.toggle.style.display="none":(void 0!==this.audioPlay&&null!==this.audioPlay||(localStorage.setItem("audio","1"),this.audioPlay=localStorage.getItem("audio")),"1"==this.audioPlay&&(o.volume=.1,o.loop=!0,t.fadeAudio(o),o.play(),this.toggle.classList.add("equalizer--play")),this.toggle.addEventListener(this.click,function(){o.paused?(o.volume=.1,t.fadeAudio(o),o.play(),e.toggle.classList.add("equalizer--play"),localStorage.setItem("audio","1")):(o.volume=.1,o.pause(),e.toggle.classList.remove("equalizer--play"),localStorage.setItem("audio","0"))},!1)))},fadeAudio:function(t){var e=this;this.vol=.1,this.interval=200;var o=setInterval(function(){e.vol<.6?(e.vol+=.05,t.volume=e.vol):clearInterval(o)},this.interval)}}},{}],5:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.canvasAnimation=function(){function t(){r=window.innerWidth,u=window.innerHeight,f={x:r/2,y:u/2},h.width=r,h.height=u,m=h.getContext("2d"),g=[];for(var t=0;t<r;t+=r/10)for(var e=0;e<u;e+=u/10){var o=t+Math.random()*r/10,i=e+Math.random()*u/10,n={x:o,originX:o,y:i,originY:i};g.push(n)}for(var a=0;a<g.length;a++){for(var s=[],d=g[a],v=0;v<g.length;v++){var p=g[v];if(d!=p){for(var y=!1,w=0;w<5;w++)y||void 0==s[w]&&(s[w]=p,y=!0);for(var w=0;w<5;w++)y||c(d,p)<c(d,s[w])&&(s[w]=p,y=!0)}}d.closest=s}for(var a in g){var L=new l(g[a],2+2*Math.random(),"rgba(0,0,0,0.8)");g[a].circle=L}}function e(){"ontouchstart"in window||window.addEventListener("mousemove",o),window.addEventListener("resize",i)}function o(t){var e=0,o=0;t.pageX||t.pageY?(e=t.pageX-(document.body.scrollLeft+document.documentElement.scrollLeft),o=t.pageY-(document.body.scrollTop+document.documentElement.scrollTop)):(t.clientX||t.clientY)&&(e=t.clientX,o=t.clientY),f.x=e,f.y=o}function i(){r=window.innerWidth,u=window.innerHeight,h.width=r,h.height=u}function n(){a();for(var t in g)s(g[t])}function a(){if(v){m.clearRect(0,0,r,u);for(var t in g)Math.abs(c(f,g[t]))<4e3?(g[t].active=.3,g[t].circle.active=.6):Math.abs(c(f,g[t]))<2e4?(g[t].active=.1,g[t].circle.active=.3):Math.abs(c(f,g[t]))<4e4?(g[t].active=.02,g[t].circle.active=.1):(g[t].active=0,g[t].circle.active=0),d(g[t]),g[t].circle.draw()}requestAnimationFrame(a)}function s(t){TweenLite.to(t,1+1*Math.random(),{x:t.originX-50+100*Math.random(),y:t.originY-50+100*Math.random(),ease:l.easeInOut,onComplete:function(){s(t)}})}function d(t){if(t.active)for(var e in t.closest)m.beginPath(),m.moveTo(t.x,t.y),m.lineTo(t.closest[e].x,t.closest[e].y),m.strokeStyle="rgba(51,51,51,"+t.active+")",m.stroke()}function l(t,e,o){var i=this;!function(){i.pos=t||null,i.radius=e||null,i.color=o||null}(),this.draw=function(){i.active&&(m.beginPath(),m.arc(i.pos.x,i.pos.y,i.radius,0,2*Math.PI,!1),m.fillStyle="rgba(51,51,51,"+i.active+")",m.fill())}}function c(t,e){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)}var r,u,h,m,g,f,v=!0;h=document.getElementById("bgAnimation"),h&&(t(),n(),e())}},{}],6:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.colorTheme={init:function(){this.pageLoad(),this.eventHandler()},pageLoad:function(){window.addEventListener?window.addEventListener("load",this.getColor,!1):window.attachEvent&&window.attachEvent("onload",this.getColor)},eventHandler:function(){this.toggle=document.getElementById("colorSwitch"),this.click="ontouchstart"in window?"touchstart":"click",this.toggle&&this.toggle.addEventListener(this.click,this.changeColor,!1)},changeColor:function(t){switch(this.colorNumb=this.dataset.color,this.colorBody=document.getElementById("colorTheme"),this.colorNumb){case"1":this.dataset.color=2,this.colorBody.classList.remove("color-theme--1","color-theme--3"),this.colorBody.classList.add("color-theme--2"),localStorage.setItem("colorCode","2");break;case"2":this.dataset.color=3,this.colorBody.classList.remove("color-theme--1","color-theme--2"),this.colorBody.classList.add("color-theme--3"),localStorage.setItem("colorCode","3");break;case"3":this.dataset.color=1,this.colorBody.classList.remove("color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--1"),localStorage.setItem("colorCode","1")}},getColor:function(){this.colorCode=localStorage.getItem("colorCode"),this.colorBody=document.getElementById("colorTheme"),this.colorNumb=document.getElementById("colorSwitch"),this.colorBody.classList.remove("color-theme--1","color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--"+this.colorCode),this.colorNumb&&(this.colorNumb.dataset.color=this.colorCode),void 0!==this.colorCode&&null!==this.colorCode||(this.colorBody.classList.remove("color-theme--1","color-theme--2","color-theme--3"),this.colorBody.classList.add("color-theme--1"),localStorage.setItem("colorCode","1"),this.colorNumb&&(this.colorNumb.dataset.color=1))}}},{}],7:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.formValidation={init:function(){this.eventHandle()},eventHandle:function(){this.contactForm=document.getElementById("contactForm"),this.contactForm&&this.contactForm.addEventListener("submit",this.validateForm,!1)},validateForm:function(t){console.log("send"),t.preventDefault()},submitForm:function(t,e,o){this.xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),this.xmlhttp.onreadystatechange=function(){4==this.xmlhttp.readyState&&200==this.xmlhttp.status&&console.log(this.xmlhttp.responseText)},this.xmlhttp.open("POST","your_url.php",!0),this.xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.xmlhttp.send("name="+t+"&email="+e+"&msg="+o),this.xmlhttp.send()}}},{}],8:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.fullPageSlide={init:function(){this.eventHandle()},eventHandle:function(){window.addEventListener?window.addEventListener("load",this.carousel,!1):window.attachEvent&&window.attachEvent("onload",this.carousel)},carousel:function(){var t=this,e=this;this.slideIndex=0,this.slideTime=6e3,this.slideHolder=document.getElementById("slideImg"),this.slideHolder&&(this.arrayData=this.slideHolder.getAttribute("data-image"),this.arrayData=this.arrayData.split(",")),this.loadSlide=function(){t.slideIndex==t.arrayData.length&&(t.slideIndex=0),t.slideHolder.style.backgroundImage="url("+t.arrayData[t.slideIndex]+")",t.slideIndex++,setTimeout(e.loadSlide,t.slideTime)},this.slideHolder&&this.loadSlide()}}},{}],9:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.jqueryPlugins={init:function(){$(document).ready(function(t){$("html").niceScroll({cursorwidth:"8px",cursorborderradius:"0",cursorborder:"none",cursorcolor:"",horizrailenabled:!1})})}}},{}],10:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.offCanvasNav={init:function(){this.eventHandler()},eventHandler:function(){this.toggle=document.getElementById("offCanvasToggle"),this.close=document.getElementById("offCanvasToggleClose"),this.click="ontouchstart"in window?"touchstart":"click",this.toggle&&this.toggle.addEventListener(this.click,this.offCanvas,!1),this.close&&this.close.addEventListener(this.click,this.offCanvas,!1)},offCanvas:function(){this.offCanvas=document.getElementById("colorTheme"),this.animateMenu=document.getElementById("animatedLogoAside"),this.offCanvas.classList.contains("canvas-menu--open")?this.offCanvas.classList.remove("canvas-menu--open"):this.offCanvas.classList.add("canvas-menu--open"),this.animateMenu.classList.contains("animated-aside-logo--animated")?this.animateMenu.classList.remove("animated-aside-logo--animated"):this.animateMenu.classList.add("animated-aside-logo--animated")}}},{}],11:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.preventCopy={init:function(){this.pageLoad()},pageLoad:function(){document.addEventListener("contextmenu",function(t){t.preventDefault()},!1)}}},{}],12:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.scrollNext={init:function(){this.eventHandler()},eventHandler:function(){this.toggle=document.getElementById("scrollTo"),this.click="ontouchstart"in window?"touchstart":"click",this.toggle&&this.toggle.addEventListener(this.click,this.goTo,!1)},goTo:function(t){function e(){var t;d=(Date.now()-s)/a,d>=1&&(clearInterval(o),d=1),t=d*n+i,window.scrollBy(0,t-window.pageYOffset)}this.block=this.dataset.block,this.target=document.getElementById(this.block),this.fromTop=this.target.offsetTop;var o,i=window.pageYOffset,n=this.fromTop-window.pageYOffset,a=1e3,s=Date.now(),d=0;o&&clearInterval(o),o=setInterval(e,10)}}},{}],13:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.videoInner={init:function(){this.pageLoad()},pageLoad:function(){window.addEventListener("scroll",this.playVideoBg)},playVideoBg:function(){if(this.video=document.getElementById("videoInner"),this.videoBg=document.getElementById("videoInnerBg"),screen.width<500||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))this.video.style.display="none",this.videoBg.style.display="none";else if(this.video)if(this.audioBg=document.getElementById("bgAudion"),this.audioPlay=localStorage.getItem("audio"),this.scrollTop=$(window).scrollTop(),this.elementOffset=$("#videoInner").offset().top,this.distance=this.elementOffset-this.scrollTop,this.distance<100){if(this.video.play(),"1"!=this.audioPlay)return"0"==this.audioPlay&&"1"==localStorage.getItem("audioAfterVideoBg")?void 0:void localStorage.setItem("audioAfterVideoBg","0");localStorage.setItem("audioAfterVideoBg","1"),this.audioBg.click()}else if(this.distance>100&&"1"==localStorage.getItem("audioAfterVideoBg")||this.distance>100&&"0"==localStorage.getItem("audioAfterVideoBg")){if(this.video.pause(),this.audioAfterVideoBg=localStorage.getItem("audioAfterVideoBg"),"1"!=this.audioAfterVideoBg)return;this.audioBg.click(),localStorage.setItem("audioAfterVideoBg","0")}}}},{}],14:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.videoPopup={init:function(){this.injectYoutube(),this.eventHandle()},injectYoutube:function(){this.tag=document.createElement("script"),this.tag.src="//www.youtube.com/player_api",this.firstScriptTag=document.getElementsByTagName("script")[0],this.firstScriptTag.parentNode.insertBefore(this.tag,this.firstScriptTag)},eventHandle:function(){var t=this;if(this.click="ontouchstart"in window?"touchstart":"click",this.openModal=document.getElementsByClassName("video__play"),this.modal=document.getElementById("videoModal"),this.closeModal=document.getElementById("closeModal"),this.modal){for(var e=0;e<this.openModal.length;e++)this.openModal[e].addEventListener(this.click,function(e){e.preventDefault(),e.stopPropagation(),t.showPopup(t.modal)},!1),this.openModal[e].addEventListener(this.click,this.getVideo,!1);this.closeModal.addEventListener(this.click,function(){t.hidePopup(t.modal)},!1),window.addEventListener(this.click,function(e){e.target==t.modal&&t.hidePopup(t.modal)},!1)}},showPopup:function(t){return this.audioPlay=localStorage.getItem("audio"),t.classList.remove("modal--close"),t.classList.add("modal--open"),"1"!=this.audioPlay?void localStorage.setItem("audioAfterVideo","0"):(localStorage.setItem("audioAfterVideo","1"),void this.pauseAudio())},hidePopup:function(t){this.audioPlay=localStorage.getItem("audio"),this.audioAfterVideo=localStorage.getItem("audioAfterVideo"),t.classList.add("modal--close"),setTimeout(function(){t.classList.remove("modal--open")},300),this.videoPlay=document.getElementById("videoPlay"),this.videoPlay.setAttribute("src",""),"1"==this.audioAfterVideo&&this.playAudio()},pauseAudio:function(){this.audioBg=document.getElementById("bgAudion"),this.audioBg.click()},playAudio:function(){this.audioBg=document.getElementById("bgAudion"),this.audioBg.click()},getVideo:function(t){t.stopPropagation(),t.preventDefault(),this.link=this.getAttribute("href"),this.videoPlay=document.getElementById("videoPlay"),this.videoPlay.setAttribute("src",this.link+"&autoplay=1")},playVideo:function(){this.player.playVideo()},stopVideo:function(){this.player.pauseVideo()}}},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
