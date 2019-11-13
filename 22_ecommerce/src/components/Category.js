import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Category extends React.Component {
  render() {
  	const products = [this.props.products];
  	console.log(products)
    return (
      <div>
		{ products.map(product => {
        	return (
        		<h2>{product.title}</h2>
        	)
        }) }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let category = ownProps.match.params.category;
  return {
    products: state.products.find(product => product.category == category)
  };
};

export default connect( mapStateToProps)(Category);
