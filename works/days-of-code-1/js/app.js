require('../css/style.css')
import runningLine from './modules/runningLine'

/**
* Cache DOM elements
*/
let nav = document.getElementById('mainNavigation')

if (nav !== null) { let initNavigation = new runningLine(nav) }   



