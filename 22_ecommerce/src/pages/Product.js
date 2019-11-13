import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishlist } from '../actions/productsActions';
import { calcDiscount } from '../utils/price';

class Product extends Component {
	handleAddToCart = e => {
		const id = e.target.parentNode.id;
		let quantity = document.getElementById("quantity").value;

		if(quantity == "") {
			quantity = 1 ;
		}

		this.props.addToCart(id, quantity);
	};
	handleAddToWishlist = e => {
		const id = e.target.parentNode.id;
		this.props.addToWishlist(id);
	}
	render() {
		const product = this.props.product;
		let discount = calcDiscount(product.price, product.discount);
		return (
			<div id={product.id}>
				<h1>{product.title}</h1>
				<p>{product.short_description}</p>
				<span className="price">{product.price}</span>
				<span className="discount"></span>
				<input type="number" min="1" id="quantity" />
				<button onClick={this.handleAddToCart}>Add to cart</button>
				<button onClick={this.handleAddToWishlist}>Add to wishlist</button>

				<div className="details">
					<p>{product.description}</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  let url = ownProps.match.params.product_url;
  return {
    product: state.products.find(product => product.url == url)
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, quantity) => { dispatch({type: 'ADD_TO_CART', id, quantity}) },
        addToWishlist: id => { dispatch({type: 'ADD_TO_WISHLIST', id }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
