import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Product from './Product';

class Products extends Component {
	render() {
		const products = this.props.products;
		return (
			<ul>
			 	{products.map(product => (
              		<Product product={product} key={product.id} />
            	))}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default connect(mapStateToProps)(Products)
