/**
 * Class for display suggestions for search
 */
export default class searchBox {
      
    /**
     * Constructor of class.
     */    
    constructor(searchQuery, searchResult) {
		
		const endpoint = 'js/products.json'
			
		let products = fetch(endpoint)
			.then( blob => blob.json())
			.then( (data) => {				
				return data.products
			} )
				
		
		const placeholder = `
			<a href="#" class="search__result-item">Men shoes</a>
			<a href="#" class="search__result-item">Kids</a>
			<a href="#" class="search__result-item">New collection</a>
		`
		
		searchQuery.addEventListener('keyup', (e) => {
			
			const query = e.target.value
			
			if (query !== ''){
					products.then(data => {
					const matches = this.findMatches(query, data)
					const result = this.renderSuggestions(matches, query)				
					searchResult.innerHTML = result
				})
			} else {
				searchResult.innerHTML = placeholder
			}
			
			
		})
		
		
    }
	
	findMatches(wordToMatch, productList){	
		
		return productList.filter(product => {		
			const regex = new RegExp(wordToMatch, 'gi')
			return product.title.match(regex)		
		})
		
	}
	
	renderSuggestions (products, query){
		const html = products.map(product => {	
			
			const regex = new RegExp(query, 'gi')
			const pickout = product.title.replace(regex, `<span class="search__pickout">${query}</span>`)
			
			return `
				<a href="${product.link}" class="search__result-item">${pickout}</a>
			`
		}).join('')
		
		if (html){
			return html
		} else {
			return `<a href="#" class="search__result-item">Nothing found</a>`
		}
	}
	
	
}
