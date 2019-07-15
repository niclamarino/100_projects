import React, { Component } from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

class Checkout extends Component {
	render() {
		const products = this.props.products;
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
			<div className="checkout">
				<h3>Total</h3><span>{sum}</span>
				<h4>Taxes</h4><span>{taxes.toFixed(2)}</span>
				<Button variant="contained" color="primary">Pay now</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default connect(mapStateToProps)(Checkout);
