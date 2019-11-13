import React, { Component } from 'react';

class Ticket extends Component {
	render() {
		let origin = this.props.origin;
		let destination = this.props.destination;
		let date = this.props.date;
		let duration = this.props.duration;
		let arrival = this.props.arrival;
		let time = this.props.time;
		let adults = this.props.adults;
		let children = this.props.children;
		let id = this.props.code;

		let price = this.props.adultPrice * adults + this.props.childPrice * children;
		return (
			<li className="ticket">
				<h3>{origin} - {destination}</h3>
				<span><b>Departure:</b> {time} - <b>Arrival:</b> {arrival}</span>
				<span><b>Time:</b> {time} - <b>Durantion:</b> {duration}</span>
				<span><b>Date:</b> {date} - <b>Adults:</b> {adults} | <b>Children:</b> {children}</span>
				<span className="price"><b>Price:</b> {price} £</span>
				<button className="pick" onClick={this.props.pickTicket} id={id}>Pick</button>
			</li>
		);
	}
};

export default Ticket
