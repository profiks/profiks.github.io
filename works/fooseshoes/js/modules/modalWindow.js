/**
 * Class for modal window
 */
export default class modalWindow {
      
    /**
     * Constructor of class.
     * @param {selector} modal - modal id
     */
    
    constructor(modalOpen) { 
		        
        let click = ('ontouchstart' in window ? 'touchstart' : 'click')
        
        let openModal = document.getElementsByClassName('js-modalOpen')
        let modal = document.getElementById('logInModal')        
        let closeModal = document.getElementsByClassName('js-modalClose')
        
        if(modal){
            
             	for (var i = 0; i < openModal.length; i++) { 
            
                    openModal[i].addEventListener(click, (e)=>{

                        e.preventDefault();
                        e.stopPropagation();

                        this.showPopup(modal);

                    }, false);
                }


                closeModal[0].addEventListener(click, (e)=>{
						e.preventDefault();
                        e.stopPropagation();
                        this.hidePopup(modal);
                }, false);


                window.addEventListener(click, (e)=>{
                    if (e.target == modal) {
                        this.hidePopup(modal);
                    }
                }, false);
            
        }
       
    }
    
    /**
     * Event listner for open modal
     * @param {selector} modalOpen
     */
    showPopup(modal){
        modal.classList.remove('modal--close');
        modal.classList.add('modal--open');
		document.body.classList.add('js-popup')
    }
    
    /**
     * Event handler for close modal
     * @param {selector} modalClose
     */
    hidePopup(modal){
        modal.classList.add('modal--close');
        setTimeout(()=>{
        	modal.classList.remove('modal--open');
			document.body.classList.remove('js-popup')
        },300);
    }
        
        
}
