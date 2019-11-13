import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trains } from '../API/trains';

class SearchButton extends Component {
	render() {
		return (
			<button onClick={this.props.getResults}>Search</button>
		);
	}
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(SearchButton);
