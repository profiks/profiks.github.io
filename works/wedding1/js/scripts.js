$(document).ready(function(){function e(){var e=$(".scroll-top"),n=$(window);$(document).on("scroll",function(){n.scrollTop()>1e3?e.show():e.hide()})}$(".js-h1").fitText(1.2,{minFontSize:"25px",maxFontSize:"40px"}),$(".js-h2").fitText(1.2,{minFontSize:"22px",maxFontSize:"30px"}),$(".js-h3").fitText(1.2,{minFontSize:"18px",maxFontSize:"25px"}),$(".js-h4").fitText(1.2,{minFontSize:"16px",maxFontSize:"23px"}),$("#tel").mask("(999) 999-9999"),0!==$("#subscribeForm").length&&$("#subscribeForm").validate({rules:{name:{required:!0,minlength:2,maxlength:50},email:{email:!0,required:!0}},messages:{name:{required:"",minlength:"",maxlength:""},email:{required:"",email:""}}}),0!==$(".owl-carousel").length&&$(".owl-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:3,nav:!1},1e3:{items:5,nav:!0,loop:!1}},nav:!0,navText:["<span class='icon-l'><</span>","<span class='icon-r'>></span>"]}),0!==$(".scroll-top").length&&(e(),$(".scroll-top").click(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},600),!1})),wow=new WOW({animateClass:"animated",offset:100}),wow.init();var n="http://profiks.github.io/works/wedding1/js/vendor/jquery.elipsis.js",i=document.createElement("script");i.src=n,document.body.appendChild(i)});