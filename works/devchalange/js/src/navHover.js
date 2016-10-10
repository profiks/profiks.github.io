/**
 * Class to add bottom purple runing line to navigation.
 */
export default class navHover {
      
    /**
     * Constructor of class.
     * @param {selector} nav - navigation id.
     */
    
    constructor(nav) { 
        /**
         * Create additional markup for bottom line
         */
        this.line               = document.createElement('div');
        this.line.className     = 'top-nav__line';
        this.marquee            = document.createElement('span');
        this.marquee.className  = 'top-nav__marquee';
        this.line.appendChild(this.marquee); 
        nav.appendChild(this.line);
        
        /**
         * Create event listner for hover over navigation
         */
        this.list = nav.getElementsByTagName('li'); // obj of all li elements
        
        for (let _i = 0; _i < this.list.length; ++_i) {
            this.over(this.list[_i]);
            this.leave(this.list[_i]);
        }
        
    }
    
    /**
     * Event listner for mouse over
     * @param {object} listItem - current hovered ellement
     */
    over(listItem){
        listItem.addEventListener('mouseover', this.init.bind(this), false);
    }
    
    /**
     * Event handler for loose focus
     * @param {object} listItem - last hovered ellement
     */
    leave(listItem){
        listItem.addEventListener('mouseleave', this.clear.bind(this), false);
    }
    
    /**
     * Function to initialize width and position of marker
     * @param {obj} e - event
     */
    init(e){
        this.marquee.style.left = `${e.toElement.offsetLeft}px`;
        this.marquee.style.width = `${e.target.clientWidth}px`;
    }
    
    /**
     * Function to clear marquee width when mouse leave element
     * Position remaining the same
     */
    clear(){
        this.marquee.style.width = 0;
    }
        
        
}
