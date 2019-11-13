import React, { Component } from 'react';
import TimePicker from 'react-time-picker';
 
export class TripTime extends Component {
  state = {
    time: '10:00',
  }
 
  onChange = time => this.setState({ time })
 
  render() {
    return (
      <div>
        <TimePicker
          onChange={this.onChange}
          value={this.state.time}
          name={this.props.name}
        />
      </div>
    );
  }
}