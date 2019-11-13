export const addToCart = payload => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

export const addToWishlist = id => {
    return {
        type: 'ADD_TO_WHISHLIST',
        id
    }
}

export const deleteProduct = id => {
	return {
		type: 'DELETE_PRODUCT',
		id
	}
}