import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ticket from './Ticket';
import { getCheckoutData } from '../actions/searchActions';
import { trains } from '../API/trains';

let trainsList;
let filterTrains = (origin, destination, passengers) => {
	if(origin !== undefined) {
		trainsList = trains.filter(train => {
			return train.origin === origin.originName && train.destination === destination.destinationName
		});
	}
}

class Tickets extends Component {
	state = {
		trains: trainsList,
		inbound: {},
		trip: []
	}
	handlePickTicket = e => {
		let ticket = trains.filter(train => {
          	return train.id === e.target.id
        });

       	let trainsList = trains.filter((train) => {
        	return train.origin === ticket[0].destination && train.destination === ticket[0].origin
        });

        let inbound = [ticket[0]];
        let trip = this.state.trip.concat(inbound);

        this.setState(
        	{trip},
        	() => {this.props.getCheckoutData(this.state.trip)}
        );

        if(this.state.trip.length == 1) {
        	this.props.showCheckout();
        }
	}
	render() {
		/* Filter results based on input values */
		let [origin, destination, passengers] = this.props.state;

		/* Change heading based on ticket */
		let heading = 'Pick inbound';
		
		filterTrains(origin, destination);

		let availableTrains;
		if(trainsList !== undefined) {
			availableTrains = trainsList;
		}

		if(this.state.trains === undefined) {
			this.state.trains = trainsList;
		}

		let message;
		if(trainsList === undefined) {
			message = ''
		} else {
			message = 'Ops! There are no trains matching your criteria!'
		}

		return (
			<div>
				{heading}
				{this.props.showResults && trains.length > 0 ? 
					this.state.trains.map(train =>
						<Ticket
					 		origin={train.origin}
					 		destination={train.destination}
					 		date={train.date}
					 		duration={train.duration}
					 		arrival={train.arrival}
					 		time={train.time}
					 		key={train.id}
					 		code={train.id}
					 		adults={passengers.adults}
					 		children={passengers.children}
					 		adultPrice={train.adultPrice}
					 		childPrice={train.childPrice}
					 		pickTicket={this.handlePickTicket}
					 		/> 
					) : message
				}
			}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getCheckoutData: (payload) => { dispatch(getCheckoutData(payload)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
