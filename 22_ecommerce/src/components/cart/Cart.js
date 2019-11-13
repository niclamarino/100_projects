import React, { Component } from 'react';
import Summary from './Summary';
import CartProduct from './CartProduct';

class Cart extends Component {
	render() {
		return (
			<div>
				<CartProduct />
				<Summary />
			</div>
		);
	}
}
export default Cart