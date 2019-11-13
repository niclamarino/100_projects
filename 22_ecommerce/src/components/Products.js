import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addToWishlist } from '../actions/productsActions';
import { calcDiscount } from '../utils/price';

class Products extends React.Component {
	handleAddToCart = e => {
		const id = e.target.parentNode.id;
		this.props.addToCart(id);
	};
	handleAddToWishlist = e => {
		const id = e.target.parentNode.id;
		this.props.addToWishlist(id);
	}
	render() {
		return (
			<ul>
				{this.props.products.map(product => {
					let discount = calcDiscount(product.price, product.discount);
					return (
						<li id={product.id}>
						    <Link
                				to={`products/${product.url}`}
                				key={product.id}
              				>
								<h2>{product.title}</h2>
								<span className="price">{product.price} £</span>
								<span className="discount-price">{product.discount} £</span>
								<span className="discount">{discount} %</span>
							</Link>
							<button onClick={this.handleAddToCart}>Add to cart</button>
							<button onClick={this.handleAddToWishlist}>Add to wishlist</button>
						</li>
					)
				})}
			</ul>
		);
	}
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: id => { dispatch({type: 'ADD_TO_CART', id: id}) },
        addToWishlist: id => { dispatch({type: 'ADD_TO_WISHLIST', id }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
