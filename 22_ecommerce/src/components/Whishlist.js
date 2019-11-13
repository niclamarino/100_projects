import React, { Component } from 'react';
import { connect } from "react-redux";

class Wishlist extends Component {
	render() {
		return (
			<div>
				{this.props.products.map(product => {
					return (
						<div>
							<span>{product.title} / {product.price}</span>
							<span>quantity: {product.quantity}</span>
						</div>
					)
				})}
			</div>
		);
	}
};

const mapStateToProps = state => {
  return {
    products: state.wishlistProducts,
  };
};

export default connect(mapStateToProps)(Wishlist);
