/**
 * Class to open modal window
 */
export default class inputLabel {
      
    /**
     * Constructor of class.
     */
    
    constructor() { 
		
		let input = document.getElementsByClassName('js-label')
				
		for(let _i = 0; _i < input.length; _i++){
			input[_i].addEventListener('focus', this.labelActive.bind(this))
			input[_i].addEventListener('blur', this.labelBlur.bind(this))
		}
	
    }
    
    /**
     * Event listner for focus on input
     * @param {selector} input
     */
    labelActive(input){
    	input.target.classList.add('js-label--active')
    }
    
    /**
     * Event handler blur on input
     * @param {selector} input
     */
    labelBlur(input){
		
		if (input.target.value == '') {		
        	input.target.classList.remove('js-label--active')
		}
    }
        
        
}
