import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
	render() {
		const [inbound, outbound] = this.props.state;
		return (
			<div>
				{this.props.showCheckout && inbound !== undefined ?
					<div className="checkout">
						<div>
							<h2>Inbound</h2>
							<span><b>From</b> {inbound.originName} <b>To</b> {outbound.destinationName}</span>
							<span>{inbound.originDate} <b>at</b> {inbound.originTime}</span>
						</div>
						<div>
							<h2>Outbound</h2>
							<span><b>From</b> {outbound.destinationName} <b>To</b> {inbound.originName}</span>
							<span>{outbound.destinationDate} <b>at</b> {outbound.destinationTime}</span>							
						</div>
					</div>
					: '' }
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return { state }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       getData: (payload) => { dispatch(getData(payload)) },
//     }
// }

export default connect(mapStateToProps)(Checkout);
