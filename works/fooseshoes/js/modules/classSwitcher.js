/**
 * Class for toggle mobile menu
 */
export default class classSwitcher {
      
    /**
     * Constructor of class.
     * @param {element}
     */    
    constructor(toggleElement) { 
		
		let click, clickEnd, switcher, targetEl, target, state = false
		
		click = ('ontouchstart' in window ? 'touchstart' : 'click')
		clickEnd = ('ontouchend' in window ? 'touchend' : 'click')
		switcher = toggleElement[0]		
		targetEl = switcher.dataset.target		
		target = document.getElementById(targetEl)
		
		switcher.addEventListener(click, (e)=>{
			e.preventDefault()
			this.toggleClass(target, switcher)
		})
		
		window.addEventListener(clickEnd, (e)=>{
			
			let clickedEl = e.target			
		 	if (clickedEl.parentElement !== target && target.classList.contains('active') && clickedEl !== switcher) {
				this.toggleClass (target, switcher)			
		 	} 
			
		}, false)
		
    }
	
	toggleClass (target, switcher){
		target.classList.toggle('active')
		switcher.classList.toggle('opened')
	}
}
