import modalWindow 		from './modules/modalWindow'
import inputLabel 		from './modules/inputLabel'
import fakeSelect 		from './modules/fakeSelect'
import contactForm 		from './modules/contactForm'
import newsFeed 		from './modules/newsFeed'
import fancyGallery 	from './modules/fancyGallery'
import mobileNav 		from './modules/classSwitcher'
import ajaxDummyText 	from './modules/classSwitcher'
import mobileSearch 	from './modules/classSwitcher'
import slideCarousel 	from './modules/slideCarousel'
import searchBox 		from './modules/searchBox'
import tweetFeed 		from './modules/tweetFeed'
import viewMode 		from './modules/viewMode'


/**
* Cache DOM elements
*/
let logInModal 		= document.getElementsByClassName('js-modalOpen'),
	hamburger		= document.getElementsByClassName('hamburger'),
	ajaxSearch		= document.getElementsByClassName('js-search-btn'),
	noAjaxSearch	= document.getElementsByClassName('js-search-mobile'),
	viewChanger		= document.querySelectorAll('.js-viewmode'),
	subscribeForm 	= document.getElementById('subscribeForm'),
	newsCarousel 	= document.getElementById('newsCarousel'),
	tweeterWidget 	= document.getElementById('tweeterWidget'),
	lightBox 		= document.getElementById('lightBox'),	
	slideContainer  = document.getElementById('slideCarousel'),
	slideNavigation = document.getElementById('slideCarouselControl'),
	searchQuery		= document.getElementById('searchQuery'),
	searchResult	= document.getElementById('searchResult'),
	mobSearchForm   = document.getElementById('mobSearchForm') 


if (viewChanger !== null){
	new viewMode(viewChanger)
}

if (tweeterWidget !== null) { 
	new tweetFeed(tweeterWidget)
}

if (searchQuery !== null && searchResult !== null){
	new searchBox(searchQuery, searchResult)
}

if (noAjaxSearch !== null){
	new mobileSearch(noAjaxSearch)
}


if (ajaxSearch !== null) { 
	new ajaxDummyText(ajaxSearch)
}


if (slideContainer !== null) { 
	new slideCarousel(slideContainer, slideNavigation)
}

if (hamburger !== null) { 
	new mobileNav(hamburger)
}

if (lightBox !== null) { 
	new fancyGallery(lightBox)
}

if (newsCarousel !== null) { 
	new newsFeed(newsCarousel)
}

if (logInModal !== null) { 
	new modalWindow(logInModal)
}

if (subscribeForm !== null) { 
	new contactForm(subscribeForm)
} 


new inputLabel()
new fakeSelect()