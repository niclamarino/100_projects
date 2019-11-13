import React from 'react';
import City from './City';
import { connect } from 'react-redux';
import { cities } from '../API/cities';

class Locations extends React.Component {
  state = {
    suggestions: [],
    text: ''
  }
  onTextChange = e => {
  	const value = e.target.value;
  	let suggestions = [];
    const names = cities.map(city => city.name);

  	if(value.length > 0) {
  		const regex = new RegExp(`^${value}`, 'i');

  		suggestions = names.filter(v => regex.test(v));
  		this.setState(() => ({ suggestions }))
  	}
  }
  suggestionSelected = (e) => {
    const value = e.target.innerText;
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }
  renderSuggestions = () => {
  	const {suggestions} = this.state;
  	if(suggestions.length === 0) {
  		return null;
  	}
  	return (
		<ul className="suggestions">
			{suggestions.map((city, i) => <City city={city} key={i} suggestionSelected={this.suggestionSelected} />)}
		</ul>
  	)
  }
  render() {
    const {text} = this.state;
    let name = this.props.name;
	  return (
		  <div>
         <input value='Milan' name={name} required onChange={e => {this.setState({ text: e.target.value }); this.onTextChange(e)}} type="text" />
			   {this.renderSuggestions()}
		  </div>
	   )
   }
}

const mapStateToProps = (state) => {
    return {
        origin: state.origin,
        destination: state.destination
    }
}

export default connect(mapStateToProps)(Locations)