/**
 * Class to change products view mode
 */
export default class viewMode {
      
    /**
     * Constructor of class.
     */
    
    constructor(viewChanger) { 
		
		
		viewChanger.forEach(switcher => {
			
			switcher.addEventListener('click', e => {
				e.preventDefault()
				let container = e.target.dataset.container
				let className = e.target.dataset.class
				let button	  = e.target
				
				if(button.classList.contains('active')){
					return false
				}else{
					this.changer(container, className, switcher, viewChanger)
				}
				
				
			})
			
		})
		
    }
    
     
	changer(container, className, button, viewChanger){
		viewChanger.forEach(item => {
			item.classList.remove('active')
		})
		
		button.classList.add('active')
		
		let grid = document.getElementById(container)
		grid.classList.remove('list')		
		grid.classList.remove('tiles')
		
		grid.classList.add(className)
	}
        
}
