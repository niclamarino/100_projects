const initState = [
      {title: "T-shit", size: "XL", price: 44.59, id: 1, stock: true, quantity: 1},
      {title: "Sweater", size: "S", price: 23.99, id: 2, stock: false, quantity: 3},
      {title: "Skirt", size: "M", price: 13.50, id: 3, stock: true, quantity: 2}
]

const productsReducer = (state = initState, action) => {
    switch(action.type) {
    	case 'DELETE_PRODUCT':
    		let newProducts = state.filter(product => {
    			return action.id != product.id;
    		})
        	return newProducts;
        case 'UPDATE_QUANTITY':
        	const updatedProduct = state.map(product => {
        		if(product.id === action.id) {
        			product.quantity++
				    }
            return product;
        	})
          return updatedProduct;
        	// return [...state, updatedProduct]
   		default: 
   			return state
    }
}
export default productsReducer;