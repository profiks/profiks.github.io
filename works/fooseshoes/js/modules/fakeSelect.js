/**
 * Class to make fake selet boxes
 */
export default class fakeSelect {
      
    /**
     * Constructor of class.
     * @param {selector} modal - modal id
     */
    
    constructor() { 
		
		
		const selectBoxes = document.getElementsByClassName('js-select')
		
		if(selectBoxes !== null){
			
			let elements = []
			
			for(let _s = 0; _s < selectBoxes.length; _s++ ){

				let clone = {
					id : selectBoxes[_s].id,
					class : selectBoxes[_s].dataset.addclass,
					default : selectBoxes[_s].querySelector('option[selected]').textContent,
					options : selectBoxes[_s].querySelectorAll('option'),
					parrentClass : selectBoxes[_s].parentElement.className
				}

				elements.push(this.initSelect(clone))

			}
			
			elements.forEach((select)=>{
				this.setOption(select)
			})
			
		}//end if
	
    }
    
	
	initSelect(selectObj) {
		
		let select = document.getElementById(selectObj.id)
		select.style.display = 'none'
		let parent = select.parentNode
		
		
		let list = document.createElement('ul')
		list.className = selectObj.class
		list.id = selectObj.id + 'List'	
		
		let link = document.createElement('a')
		link.setAttribute('href', '#')
		link.dataset.target = list.id
		link.className = `${parent.className}__link`
		link.textContent = selectObj.default
		
		
		let carret = document.createElement('span')
		carret.className = 'carret'
		carret.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>'
		
		link.appendChild(carret)
		
		let items = []
		
		selectObj.options.forEach((item)=>{
			let listItem = document.createElement('li')
			listItem.className = `${selectObj.class}__item`
			listItem.innerHTML = item.value
			list.appendChild(listItem)
			items.push(listItem)
		})
		
		
		
		
		parent.insertBefore(list, select)
		parent.insertBefore(link, list)
		
		return {
			items,
			list,
			link			
		}
		
	}
	
 
    setOption(select) {
		
		select.link.addEventListener('click', (e)=>{
			e.preventDefault()
			this.toggleClass(select)
		})
		
		window.addEventListener('click', (e)=>{
			if(e.target !== select.link && e.target !== select.list){
				this.closeDropDown(select)
			}
		})
		
		select.items.forEach((element)=>{
			element.addEventListener('click', (e)=>{
				e.stopPropagation()
				e.preventDefault()
				
				if(select.link.textContent == e.target.textContent){
					
					return false
					
				} else{
					
					select.link.textContent = e.target.textContent
				
					let carret = document.createElement('span')
					carret.className = 'carret'
					carret.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>'

					select.link.appendChild(carret)

					this.closeDropDown(select)
				}
				
				
			})
		})
		
		
    }
	
	
	toggleClass(select){
		select.link.classList.toggle('opened')
		select.list.classList.toggle('expanded')
	}
	
	
	closeDropDown(select){
		select.link.classList.remove('opened')
		select.list.classList.remove('expanded')
	}
        
}
