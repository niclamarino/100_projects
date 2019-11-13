import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class TopLinks extends Component {
	render() {
		let products;
		if(typeof this.props.cartProducts != "undefined") {
			products = this.props.cartProducts;
		} else {
			products = []
		}
		return (
			<ul>
				<Link to="/cart">Cart <span className="cart-products">{products.length}</span></Link>
				<Link to="/wishlist">Wishlist <span className="wishlist-products">{this.props.wishlistProducts.length}</span></Link>
			</ul>
		);
	}
}

const mapStateToProps = state => {
	console.log(state)
  return {
    cartProducts: state.cartProducts,
    wishlistProducts: state.wishlistProducts,
  };
};

export default connect (mapStateToProps)(TopLinks);
