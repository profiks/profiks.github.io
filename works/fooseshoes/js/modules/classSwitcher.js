/**
 * Class for toggle mobile menu
 */
export default class classSwitcher {
      
    /**
     * Constructor of class.
     * @param {element}
     */    
    constructor(toggleElement) { 
		
		let click, switcher, targetEl, target, state = false
		
		click = ('ontouchstart' in window ? 'touchstart' : 'click')
		switcher = toggleElement[0]		
		targetEl = switcher.dataset.target		
		target = document.getElementById(targetEl)
		
		switcher.addEventListener(click, (e)=>{
			e.preventDefault()
			target.classList.toggle('active')
			switcher.classList.toggle('opened')
		})
		
    } 
}
