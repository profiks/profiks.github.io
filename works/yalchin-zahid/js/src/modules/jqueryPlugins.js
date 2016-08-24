export var jqueryPlugins = {  
        
    init : function (){        
        $(document).ready(function(self) { 
            
            $("html").niceScroll({
                cursorwidth: "8px",
                cursorborderradius: "0",
                cursorborder: "none",
                cursorcolor: "",
                horizrailenabled: false
            });
            
            /*if($(".aside")){
               $(".aside").niceScroll({
                   cursorwidth: "8px",
                   cursorborderradius: "0",
                   cursorborder: "none",
                   cursorcolor: "",
                   horizrailenabled: false,
                   touchbehavior: true,
                   preventmultitouchscrolling: false
               });  
            }*/
            
           /* if($('.video')){
              
                 $('.video').fancybox({
                    openEffect  : 'none',
                    closeEffect : 'none',
                    helpers : {
                        media : {}
                    },
                    afterShow: function() {
                        $( "#bgAudion" ).trigger( "click" );
                    },
                    afterClose : function(){
                        $( "#bgAudion" ).trigger( "click" );
                    }
                });
                
            }*/
            
           
            
            
            
            particlesJS("particles-js", {
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 150,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            });

            
            
            
        });
    }

}