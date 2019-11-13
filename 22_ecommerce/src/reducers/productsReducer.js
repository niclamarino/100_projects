const initState = {
     products: [
     	{
     		title: "Roses",
     		price: 49.99,
     		discount: 39.99,
     		id: 1,
            quantity: 1,
     		url: "roses",
            category: 'flowers',
     		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt repellendus consequuntur aliquid deserunt similique magni, animi tempore, quam neque nemo cupiditate inventore facilis aspernatur eaque repellat! Neque optio maiores deserunt!",
     		short_description: "Consectetur adipisicing elit.",
     		related_products: []
     	},
     	{
     		title: "Daisies",
     		price: 19.99,
     		discount: 9.99,
     		id: 2,
            quantity: 1,
     		url: "daisies",
            category: 'daisies',
     		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt repellendus consequuntur aliquid deserunt similique magni, animi tempore, quam neque nemo cupiditate inventore facilis aspernatur eaque repellat! Neque optio maiores deserunt!",
     		short_description: "Consectetur adipisicing elit.",
     		related_products: []
     	}
     ],
    cartProducts: [
        {
            title: "Roses",
            price: 49.99,
            discount: 39.99,
            id: 1,
            quantity: 1,
            url: "roses",
            category: 'flowers',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Incidunt repellendus consequuntur aliquid deserunt similique magni, animi tempore, quam neque nemo cupiditate inventore facilis aspernatur eaque repellat! Neque optio maiores deserunt!",
            short_description: "Consectetur adipisicing elit.",
            related_products: []
        }],
    wishlistProducts: []
}

const productsReducer = (state = initState, action) => {

    const products = state.products;
    let wishlistProducts = state.wishlistProducts;
    let cartProducts = state.cartProducts;
    let newCartProducts;

    switch(action.type) {
        case 'ADD_TO_CART':
            cartProducts = state.products.filter(product => { return product.id == action.id });
            typeof action.quantity != "undefined" ? cartProducts[0].quantity = action.quantity : cartProducts[0].quantity = 1;
            let newCartProducts;
            let x;

            if (state.cartProducts.filter(e => e.id == action.id).length > 0) {
                newCartProducts = state.cartProducts
            } else {
                newCartProducts = state.cartProducts.concat(cartProducts);
            }
            console.log(x)

            // console.log(action.id == y);
            // console.log('.........................', action.id, y, cartProducts[0].id)

            // if (cartProducts[0].id === action.id) {
            //     console.log(e)
            //     newCartProducts = state.cartProducts;
            // } else {
            //     console.log('ok')
            //     newCartProducts = state.cartProducts.concat(cartProducts);
            // }

            // newCartProducts = state.cartProducts.concat(cartProducts);
          return { products, cartProducts: newCartProducts, wishlistProducts }

        case 'ADD_TO_WISHLIST':
            wishlistProducts = state.products.filter(product => { return product.id == action.id });

            let newWishlistProducts = state.wishlistProducts.concat(wishlistProducts);
          return { products, cartProducts, wishlistProducts: newWishlistProducts }

        case 'DELETE_PRODUCT':
            newCartProducts = state.cartProducts.filter(product => { return product.id != action.id });

            return {products, wishlistProducts, cartProducts: newCartProducts};

       	default:
       		return state
    }
}

export default productsReducer;