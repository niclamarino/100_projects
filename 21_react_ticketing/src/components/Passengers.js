import React, { Component } from 'react';

export class Passengers extends Component {
	render() {
		return (
			<input type="number" onChange={this.onChange} name={this.props.name} min="1" />
		);
	}
}

// <input type="number" onChange={this.onChange} name={this.props.name} min="1" required={this.props.required} />
