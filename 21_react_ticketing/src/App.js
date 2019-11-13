import React, { Component } from 'react';
import './App.css';
import TicketingForm from './components/TicketingForm';
import Tickets from './components/Tickets';
import Checkout from './components/Checkout';

class App extends Component {
	state = {
		showResults: false,
		showCheckout: false
	}
	handleGetResults = () => {
    	this.setState(prevState => ({
      		showResults: true
    	}));
	}
	handleShowCheckout = () => {
    	this.setState(prevState => ({
      		showCheckout: true,
    	}));
	}
	render() {
		return (
			<div>
			   <TicketingForm getResults={this.handleGetResults}/>
      		   <Tickets showResults={this.state.showResults} showCheckout={this.handleShowCheckout} />
      		   <Checkout showCheckout={this.state.showCheckout} />
      		</div>
		);
	}
}

export default App;
