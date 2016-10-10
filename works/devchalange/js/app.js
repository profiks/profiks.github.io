import navHover from './src/navHover';
import carouselSlide from './src/carouselSlide';
import scrollUp from './src/scrollUp';

/**
* Cache DOM elements
*/
let nav = document.getElementById('mainNavigation');
let carousel = document.getElementById('promoCarousel');



if (nav !== null) { let initNavigation = new navHover(nav); }   

if (carousel !== null) { let initCarousel = new carouselSlide(carousel); } 

let initScrollUp = new scrollUp();  