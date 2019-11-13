import React, { Component } from 'react';
import { connect } from "react-redux";

class Summary extends Component {
	render() {
		let products;
		if (typeof this.props.products !=  'undefined') {
			products = this.props.products;
		} else {
			products = []
		}

		for (var i = products.length - 1; i >= 0; i--) {
			if(products[i].stock === false) {
                products[i].price = 0
			}
		}

		let sum = 0;
		for (var i = 0; i < products.length; i++) {
        	sum += products[i].price * products[i].quantity;
    	}

		const taxes = sum * .22;

		return (
			<div className="summary">
				<h3>Total</h3><span>{sum}</span>
				<h4>Taxes</h4><span>{taxes.toFixed(2)}</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        products: state.cartProducts
    }
}

export default connect(mapStateToProps)(Summary);
