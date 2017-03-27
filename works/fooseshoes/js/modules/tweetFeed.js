/**
 * Class for display news feed loaded from json file
 */
export default class tweetFeed {
      
    /**
     * Constructor of class.
     * @param {selector} feedContainer is id of carousel on the page
     */    
    constructor(feedContainer) { 
		
		/* Configuration for carousel functionality */
		let config = {
				position : 0,
				step 	 : 170,
				pause 	 : false,
				count 	 : 0,
				interval : 5000
			}, 
			interval
		
		/* Call functions to render news and interval, after loading json object  */
		const serverResponse = this.loadNews().then((feed)=>{
			
			feed.forEach((item)=>{  
				this.renderNews(item, feedContainer)
			})
			
			config.count = feed.length
			
		}).then((feed)=>{	
			
			this.pauseSlider(config, feedContainer)
			
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
		const newsUrl = 'js/tweeter.json'
		
		return fetch(newsUrl).then((response) => {			
			return response.json()			
		})
    }
    
	/**
     * Render parsed news on page
     * @param {object} news
     * @param {selector} feedContainer
     */	
	renderNews(tweet, feedContainer){
		
		let content = `
		<li class="twitter-widget__item">
			<p class="widget__text"> <a href="#" class="widget__evident">@${tweet.nickname}</a> ${tweet.text}</p>
			<span class="widget__date">${tweet.date}</span>
		</li>`
		
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
			feedContainer.style.top = `-${config.position}px`

			if(config.position == ((config.count * config.step) / 2) ){
				this.resetSlider(config, feedContainer)
			} 
		}
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
        feedContainer.style.top = `-${config.position}px`
	}
    
	
        
        
}
