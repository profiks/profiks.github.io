/**
 * Class for display news feed loaded from json file
 */
export default class newsFedd {
      
    /**
     * Constructor of class.
     * @param {selector} feedContainer is id of carousel on the page
     */    
    constructor(feedContainer) { 
		
		/* Configuration for carousel functionality */
		let config = {
				position : 0,
				step 	 : 102,
				pause 	 : false,
				count 	 : 0,
				interval : 5000
			}, 
			interval
		
		/* Call functions to render news and interval, after loading json object  */
		const serverResponse = this.loadNews().then((feed)=>{
			
			feed.news.forEach((item)=>{  
				this.renderNews(item, feedContainer)
			})
			
			config.count = feed.news.length
			
		}).then((feed)=>{			
			
			interval = setInterval( ()=>{
				this.mouveSlider(config, feedContainer)
			}, config.interval + 500)
			
		})
		
    }
    
    /**
     * Load news from json file
     * @returns {promise}
     */
    loadNews(){		
		let newsUrl = 'js/news.json'
		
		return fetch(newsUrl).then((response) => {			
			return response.json()			
		})
    }
    
	/**
     * Render parsed news on page
     * @param {object} news
     * @param {selector} feedContainer
     */	
	renderNews(news, feedContainer){
		
		let content = `
		<div class="news__item">
			<span class="date">
				<span class="date__month">${news.month}</span>
				<span class="date__day">${news.day}</span>
			</span>						
			<div class="news__content">
				<h3><a href="#" class="news__link">${news.header}</a></h3>
				<p class="news__desc">${news.body}</p>
			</div>
		</div>`
		
       	feedContainer.innerHTML += content;
	}
	
	
	/**
	 * Change slide position and simulate fade in/out effect
	 * @param {object} config
	 * @param {selector} feedContainer
	 */
	mouveSlider (config, feedContainer){  
				
		if(!config.pause){
			config.position += config.step
			feedContainer.style.opacity = 0			
			
			setTimeout(()=>{
				feedContainer.style.top = `-${config.position}px`
				feedContainer.style.opacity = 1
			}, 500)

			if(config.position == ((config.count * config.step) / 2) ){
				this.resetSlider(config, feedContainer)
			} 
		}
		            
    	this.pauseSlider(config, feedContainer)
    }
	
	
	/**
	 * Pause changing slides when user hover links
	 * @param {object}   config
	 * @param {selector} feedContainer
	 */
	pauseSlider (config, feedContainer){		
		
		feedContainer.addEventListener("mouseover", () => {
			config.pause = true
		})

		feedContainer.addEventListener("mouseleave", () => {
			config.pause = false
		})
	}
	
	/**
	 * Reset slider position
	 * @param {object} config
	 * @param {object} feedContainer
	 */
	resetSlider (config, feedContainer){
		config.position = 0;
        feedContainer.style.top = `-${config.position}px`;  
	}
    
	
        
        
}
