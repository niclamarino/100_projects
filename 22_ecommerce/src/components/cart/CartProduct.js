import React, { Component } from 'react';
// import { deleteProduct } from '../actions/productsActions';
import { connect } from "react-redux";

class CartProduct extends Component {
	state = {
		// quantity: this.props.product.quantity
	}
	handleDelete = e => {
		const id = e.target.parentNode.id;
		this.props.deleteProduct(id);
	}
	handleUpdateQuantity = () => {
		// this.setState({
		// 	quantity: this.state.quantity + 1
		// })
		// this.props.updateQuantity(this.props.product.id, parseInt(this.state.quantity));
	}
	render() {
		let products = this.props.products;
		return (
			<li>{typeof products != "undefined" ?
					products.map(product => {
						return (
							<ul>
								<li id={product.id}>
									{product.title} -
									{product.quantity === 0 ? 'out' : 'in stock'}
									<button onClick={this.handleDelete}>X</button>
								</li>
							</ul>
						)
					}) : 'No products in cart'}
			</li>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
    	deleteProduct: id => { dispatch({type: 'DELETE_PRODUCT', id }) },
        // deleteProduct: id => { dispatch(deleteProduct(id))},
        // updateQuantity: (id, quantity) => {dispatch(updateQuantity(id, quantity))}
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cartProducts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
