import modalWindow from './modules/modalWindow'
import inputLabel from './modules/inputLabel'
import dropDown from './modules/dropDown'
import contactForm from './modules/contactForm'
import newsFeed from './modules/newsFeed'
import fancyGallery from './modules/fancyGallery'
import mobileNav from './modules/classSwitcher'


/**
* Cache DOM elements
*/
let logInModal 		= document.getElementsByClassName('js-modalOpen'),
	subscribeForm 	= document.getElementById('subscribeForm'),
	newsCarousel 	= document.getElementById('newsCarousel'),
	lightBox 		= document.getElementById('lightBox'),
	hamburger		= document.getElementsByClassName('hamburger')


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
new dropDown()