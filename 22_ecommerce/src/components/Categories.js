import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import Category from './Category'

class Categories extends Component {
  render() {
    let products = this.props.products
    products = products.filter(
      (product, index, self) =>
        index === self.findIndex(p => p.category === product.category)
    )
    return (
      <div>
        <h2>Categories</h2>
        <Route path="/category/:category" component={Category} />
        {products.map(product => (
          <Link to={`/category/${product.category}`}>{product.category}</Link>
        ))}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    products: state.products,
  }
};

export default connect(mapStateToProps)(Categories);