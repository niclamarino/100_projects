import React, { Component } from 'react';
import Locations from './Locations';
import SearchButton from './SearchButton';
import { TripDate } from './DatePicker';
import { TripTime } from './TripTime';
import { Passengers } from './Passengers';
import { connect } from 'react-redux';
import { getData } from '../actions/searchActions';

export class TicketingForm extends Component {
	state = {
		checked: false,
	}
	handleGetFares = e => {
		e.preventDefault();
		let originName = e.target.origin.value;
		let destinationName = e.target.destination.value;

		let originDate = e.target.originDate.value;
		let originTime = e.target.originTime.value;

		let destinationDate, destinationTime;
		if(this.state.checked) {
			destinationTime = e.target.outboundTime.value;
			destinationDate = e.target.outboundDate.value;
		} else {
			destinationTime = '';
			destinationDate = '';
		}

		/* Passengers */
		let adults = e.target.adults.value;
		let children = e.target.children.value;

		let origin = {originName, originDate, originTime};
		let destination = {destinationName, destinationDate, destinationTime};
		let passengers = {adults, children}

		if(originName.length > 0 && destinationName.length > 0) {
			this.props.getData([origin, destination, passengers]);
		}

		this.props.getResults();
	}
	returnCheck = () => {
		this.setState({
      		checked: !this.state.checked
   		})
	}
	render() {
		return (
			<div className="searchForm">
			<form onSubmit={this.handleGetFares}>
				<div className="trip">
					<label htmlFor="origin">From</label>
					<Locations name="origin" text="Dynamic text"/>
					<label htmlFor="destination">To</label>
					<Locations name="destination" text="Dynamic text"/>
				</div>
				<div className="outbound">
					<label htmlFor="returnCheck">Return trip</label>
					<input type="checkbox" name="returnCheck" onClick={this.returnCheck} />
					{this.state.checked ? 
						<div>
							<label htmlFor="outboundDate">Outbound</label>
							<TripDate name="outboundDate" />
							<TripTime name="outboundTime" />
						</div> : ''}
				</div>
				<div className="dates">
					<TripDate name="originDate" />
					<TripTime name="originTime" />
				</div>
				<div className="passengers">
					<div>
						<label htmlFor="adults">Adults</label>
						<Passengers name="adults" required='k' />
					</div>
					<div>
						<label htmlFor="children">Children</label>
						<Passengers name="children" />
					</div>
				</div>
				<SearchButton />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getData: (payload) => { dispatch(getData(payload)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketingForm)