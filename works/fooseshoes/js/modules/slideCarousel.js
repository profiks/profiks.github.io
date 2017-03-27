/**
 * Class for toggle mobile menu
 */
export default class slideCarousel {
      
    /**
     * Constructor of class.
     * @param {element} slideContainer
     * @param {element} slideNavigation
     */    
    constructor (slideContainer, slideNavigation){
		
		let click, slides, navs, active = 0
		
		click = ('ontouchstart' in window ? 'touchstart' : 'click')
		
		if( slideNavigation ) {
			slides = slideContainer.getElementsByClassName('slide__item')
			navs = slideNavigation.getElementsByClassName('slide-nav__point')
			
			
			for(let _n = 0; _n < navs.length; _n++){
				navs[_n].addEventListener(click, (e)=>{					
					e.preventDefault()
					
					if(active != _n){
						active = _n
						this.changeNavigation(navs, active)
						this.changeSlide(slides, active)
					}else{
						return false
					}
					
				})
			}
			
		}//end if
		
		
		
    }
	
	
	changeNavigation (navs, active){
		
		for(let _n = 0; _n < navs.length; _n++){
			navs[_n].classList.remove('current')
		}
		
		navs[active].classList.add('current')
		
	}
	
	
	changeSlide (slides, active){
		
		for(let _s = 0; _s < slides.length; _s++){
			slides[_s].classList.remove('active')
		}
		
		setTimeout(()=>{
			slides[active].classList.add('active')
		}, 200)
		
	}
}
