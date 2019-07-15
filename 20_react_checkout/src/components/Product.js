import React, { Component } from 'react';
import { deleteProduct, updateQuantity } from '../actions/productsActions';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

class Product extends Component {
	state = {
		quantity: this.props.product.quantity
	}
	handleDelete = () => {
		this.props.deleteProduct(this.props.product.id)
	}
	handleUpdateQuantity = () => {
		this.setState({
			quantity: this.state.quantity + 1
		})
		this.props.updateQuantity(this.props.product.id, parseInt(this.state.quantity));
	}
	render() {
		const product = this.props.product;
		let stock;
		if(product.stock === false) {
			stock = 'out'
		} else {
			stock = 'in'
		}
		return (
			<li>
				<h2>{product.title}</h2>
				<span className="size"><b>Size</b> {product.size}</span>
				<span className={stock}>{product.stock === false ? 'Out of stock' : 'In stock'}</span>
				<span className="product-price">{product.price} €</span>
				<Button variant="contained" color="primary" onClick={this.handleDelete}>Delete</Button>
				<input onChange={this.handleUpdateQuantity} value={this.state.quantity} type="number"/>
			</li>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: id => { dispatch(deleteProduct(id))},
        updateQuantity: (id, quantity) => {dispatch(updateQuantity(id, quantity))}
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
