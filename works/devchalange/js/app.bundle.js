(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _navHover = require('./src/navHover');

var _navHover2 = _interopRequireDefault(_navHover);

var _carouselSlide = require('./src/carouselSlide');

var _carouselSlide2 = _interopRequireDefault(_carouselSlide);

var _scrollUp = require('./src/scrollUp');

var _scrollUp2 = _interopRequireDefault(_scrollUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Cache DOM elements
*/
var nav = document.getElementById('mainNavigation');
var carousel = document.getElementById('promoCarousel');

if (nav !== null) {
  var initNavigation = new _navHover2.default(nav);
}

if (carousel !== null) {
  var initCarousel = new _carouselSlide2.default(carousel);
}

var initScrollUp = new _scrollUp2.default();

},{"./src/carouselSlide":2,"./src/navHover":3,"./src/scrollUp":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for carousel functionality
 */

var carouselSlide = function () {

    /**
     * Constructor of class
     * @param {selector} carousel - carousel id.
     */

    function carouselSlide(carousel) {
        var _this = this;

        _classCallCheck(this, carouselSlide);

        this.screens = carousel.getElementsByTagName('div'); // get content of each slide

        // Create bullets navigation for slides
        this.bullets = document.createElement('ul');
        this.bullets.classList.add('bullet');

        // Create dots for count of slides
        for (var _i = 0; _i < this.screens.length; _i++) {
            this.dot = document.createElement('li');
            this.dot.classList.add('bullet__item');
            this.dot.dataset.target = _i;
            this.bullets.appendChild(this.dot);
        }

        // append all after slider container
        carousel.parentNode.insertBefore(this.bullets, carousel.nextSibling);

        this.dots = this.bullets.getElementsByTagName('li'); // select all dots

        this.init(this.screens, this.dots); // set first slide active


        // event listner for click on dots 
        for (var _b = 0; _b < this.dots.length; _b++) {
            this.dots[_b].addEventListener('click', function (e) {
                _this.show(e.target.dataset.target); // passing data-target number to function for showing slide
            }, false);
        }
    }

    /**
     * Initialize first apperance of slider 
     * @param {object} slides - object of slides from DOM
     * @param {object} bullets - object of created navigation list
     */

    _createClass(carouselSlide, [{
        key: 'init',
        value: function init(slides, bullets) {
            slides[0].classList.add('carousel__item--active');
            bullets[0].classList.add('bullet__item--active');
        }

        /**
         * Show active slide and hide inactive
         * @param {number} numb - number of current slide
         */

    }, {
        key: 'show',
        value: function show(numb) {

            if (this.screens[numb].classList.contains('carousel__item--active') && this.dots[numb].classList.contains('bullet__item--active')) {
                return false;
            } else {
                for (var _p = 0; _p < this.screens.length; _p++) {
                    this.screens[_p].classList.remove('carousel__item--active');
                    this.dots[_p].classList.remove('bullet__item--active');
                }

                this.screens[numb].classList.add('carousel__item--active');
                this.dots[numb].classList.add('bullet__item--active');
            }
        }
    }]);

    return carouselSlide;
}();

exports.default = carouselSlide;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class to add bottom purple runing line to navigation.
 */
var navHover = function () {

  /**
   * Constructor of class.
   * @param {selector} nav - navigation id.
   */

  function navHover(nav) {
    _classCallCheck(this, navHover);

    /**
     * Create additional markup for bottom line
     */
    this.line = document.createElement('div');
    this.line.className = 'top-nav__line';
    this.marquee = document.createElement('span');
    this.marquee.className = 'top-nav__marquee';
    this.line.appendChild(this.marquee);
    nav.appendChild(this.line);

    /**
     * Create event listner for hover over navigation
     */
    this.list = nav.getElementsByTagName('li'); // obj of all li elements

    for (var _i = 0; _i < this.list.length; ++_i) {
      this.over(this.list[_i]);
      this.leave(this.list[_i]);
    }
  }

  /**
   * Event listner for mouse over
   * @param {object} listItem - current hovered ellement
   */


  _createClass(navHover, [{
    key: 'over',
    value: function over(listItem) {
      listItem.addEventListener('mouseover', this.init.bind(this), false);
    }

    /**
     * Event handler for loose focus
     * @param {object} listItem - last hovered ellement
     */

  }, {
    key: 'leave',
    value: function leave(listItem) {
      listItem.addEventListener('mouseleave', this.clear.bind(this), false);
    }

    /**
     * Function to initialize width and position of marker
     * @param {obj} e - event
     */

  }, {
    key: 'init',
    value: function init(e) {
      this.marquee.style.left = e.toElement.offsetLeft + 'px';
      this.marquee.style.width = e.target.clientWidth + 'px';
    }

    /**
     * Function to clear marquee width when mouse leave element
     * Position remaining the same
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.marquee.style.width = 0;
    }
  }]);

  return navHover;
}();

exports.default = navHover;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Class for scroll up link when offset top is 25%
*/

var scrollUp = function () {

    /**
     * Counstructor of class
     */
    function scrollUp() {
        _classCallCheck(this, scrollUp);

        // create DOM element for link
        this.anchor = document.createElement('a');
        this.anchor.classList.add('scroll-up');
        this.anchor.dataset.text = 'В гору'; // text to display from CSS content
        document.getElementsByTagName('body')[0].appendChild(this.anchor); // append link on bottom

        this.fullHeight = document.body.scrollHeight; // get height of entire page
        this.active = false; // check flag for scroll up link

        window.addEventListener('scroll', this.topDistance.bind(this), false);
        this.anchor.addEventListener('click', this.scrollUp.bind(this), false);
    }

    _createClass(scrollUp, [{
        key: 'topDistance',
        value: function topDistance() {
            this.topOffset = window.pageYOffset; // offset from top

            // calculate 10% ow window height
            this.percentFromTop = this.fullHeight * 10 / 100;

            // scroll time = iteraded scroll duration
            this.scrollDuration = this.topOffset / 10 * 1.5;

            if (this.topOffset >= this.percentFromTop && !this.active) {
                this.anchor.classList.add('scroll-up--shown');
                this.active = true;
            } else if (this.topOffset < this.percentFromTop && this.active) {
                this.anchor.classList.remove('scroll-up--shown');
                this.active = false;
            }
        }
    }, {
        key: 'scrollUp',
        value: function scrollUp(e) {
            e.preventDefault;
            e.stopPropagation;

            var scrollStep = -window.scrollY / (this.scrollDuration / 15),
                scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                } else clearInterval(scrollInterval);
            }, 15);
        }
    }]);

    return scrollUp;
}();

exports.default = scrollUp;

},{}]},{},[1])
//# sourceMappingURL=app.bundle.js.map
