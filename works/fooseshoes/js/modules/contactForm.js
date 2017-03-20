/**
 * Class to validate form and store email to json file
 */
export default class contactForm {
      
    /**
     * Constructor of class.
     * @param {selector} emailForm - form id
     */
    
    constructor(emailForm) { 
		
    	emailForm.addEventListener('submit', this.validateForm.bind(this))
		
    }
    
    /**
     * Event listner for focus on input
     * @param {target} element id
     */
    validateForm(form) {
		form.preventDefault()
		let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		
		if (mailFormat.test(form.srcElement.elements.email.value)){  
			this.sendForm(form)
		}else{ 
			this.errorForm(form)
		}
	}
    
	errorForm(form){
		form.target.classList.add('subscribe--error')		
		// Shake animation takes 1s
		setTimeout(()=>{
			form.target.classList.remove('subscribe--error')
		},1000)
	}
	
    /**
     * Event handler blur on input
     * @param {target} element id
     */
    sendForm(form) {
		
		form.target.reset()
		form.target.classList.add('subscribe--sent')
		
		let greeting = document.createElement('p')  
    	let greetingText = document.createTextNode('Thank You for subscribing.')
    	greeting.appendChild(greetingText)
    	greeting.classList.add('subscribe__greeting')
    	form.target.appendChild(greeting)
		
		console.log('Store to json file')
    }
        
        
}
