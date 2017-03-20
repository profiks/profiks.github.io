/**
 * Class to create lightbox gallery
 */
export default class fancyGallery {
      
    /**
     * Constructor of class
     */    
    constructor(lightbox) { 
		
		let imagesObj, imagesArr, gallery, count, state = false, current = 0, click
		
		click 		= ('ontouchstart' in window ? 'touchstart' : 'click')
		imagesObj  	= lightbox.getElementsByTagName('a')		
		imagesArr 	= Object.keys(imagesObj).map(key => imagesObj[key]) // Transform NodeList into array of values
		
		gallery = this.initModal()
		
		count = imagesArr.length
		
		
		/**
		 * Observe events
		 */
		
		imagesArr.forEach((item, index)=>{
			
			let info = {
				index,
				imgSrc : item.getAttribute('href'),
				count,
				caption : item.dataset.caption
			}			
			
			item.addEventListener('click', (e)=>{
				e.preventDefault()
				state = this.openModal(gallery.modal, state)				
				current = this.injectSlide(gallery.gallery, info)
			}, false)			
			
		})
		
		
		gallery.closeBtn.addEventListener(click, (e)=>{
			e.preventDefault()
			state = this.closeModal(gallery.modal, state)
		})
		
		document.addEventListener('keyup', (e) =>{
			if (e.keyCode == 27 && state) {
				state = this.closeModal(gallery.modal, state)
			}
		})
		
		gallery.nextBtn.addEventListener(click, (e)=>{
			e.preventDefault()			
			let slide = (current >= count - 1 ? 0 : current + 1)			
			let info = {
				index : slide,
				imgSrc : imagesArr[slide].getAttribute('href'),
				count,
				caption : imagesArr[slide].dataset.caption
			}			
			current = this.injectSlide(gallery.gallery, info)
			
		})
		
		gallery.prevBtn.addEventListener(click, (e)=>{
			e.preventDefault()			
			let slide = (current <= 0 ? count - 1 : current - 1)			
			let info = {
				index : slide,
				imgSrc : imagesArr[slide].getAttribute('href'),
				count,
				caption : imagesArr[slide].dataset.caption
			}			
			current = this.injectSlide(gallery.gallery, info)
		})
		
    }
	
	/**
	 * Inject markup for gallery into DOM
	 * @returns {object} - created elements
	 */
	initModal(){
		
		let modal, closeBtn, nextBtn, prevBtn, gallery
		
		modal = document.createElement('div')
		modal.className = 'modal gallery-widget modal--close'
		modal.id = 'generatedModal'
		
		closeBtn = document.createElement('a')
		closeBtn.classList.add('gallery-widget__close')
		closeBtn.innerHTML = 'x'
		closeBtn.setAttribute('href', '#')
		
		nextBtn = document.createElement('span')
		nextBtn.innerHTML = '<i class="fa fa-angle-right" aria-hidden="true"></i>'
		nextBtn.classList.add('gallery-widget__next')
		
		prevBtn = document.createElement('span')
		prevBtn.innerHTML = '<i class="fa fa-angle-left" aria-hidden="true"></i>'
		prevBtn.classList.add('gallery-widget__prev')
		
		gallery = document.createElement('div')
		gallery.classList.add('gallery-widget__content')
		gallery.id = 'generatedModalGallery'	
		
		modal.appendChild(closeBtn)
		modal.appendChild(prevBtn)
		modal.appendChild(nextBtn)
		modal.appendChild(gallery)		
		
		document.body.appendChild(modal)
		
		return {
			modal,
			closeBtn,
			nextBtn,
			prevBtn,
			gallery
		}
		
	}
	
	/**
	 * Add classes to open full page gallery
	 * @param {element} modal
	 * @param {boolean} state
	 * @return {boolean}
	 */
	openModal (modal, state){		
		document.body.classList.add('js-gallery')		
		modal.classList.remove('modal--close')
		modal.classList.add('modal--open')
		
		return state = true
	}
	
	/**
	 * Remouve classes from active popup
	 * @param {element} modal
	 * @param {boolean} stat
	 * @return {boolean}
	 */
	closeModal (modal, state){
		document.body.classList.remove('js-gallery')		
		modal.classList.add('modal--close')
		modal.classList.remove('modal--open')
		
		return state = false
	}
	
	/**
	 * Insert content in gallery
	 * @param   {element} gallery
	 * @param   {object} info
	 * @returns {number} current open slide
	 */
	injectSlide (gallery, info){
		
		let modalContent = `
			<h3 class="gallery-widget__caption">Image ${info.index + 1} of ${info.count}</h3>
			<img src="${info.imgSrc}" class="gallery-widget__modal-image">
			<p class="gallery-widget__caption">${info.caption}</p>		
		`
		gallery.innerHTML = modalContent
		
		return info.index
	}
	
	
	
	
	
        
}
