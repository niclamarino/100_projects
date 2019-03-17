import React from 'react';
import Item from './Item';

export default class AutoCompleteText extends React.Component {
	constructor(props) {
		super(props);
		this.items = [
			'David',
			'Damien',
			'Sara',
			'Jane',
		];
		this.state = {
			suggestions: [],
      test: '',
		}
	}

  state = {
    suggestions: []
  }
  onTextChange = e => {
  	const value = e.target.value;
  	let suggestions = [];

  	if(value.length > 0) {
  		const regex = new RegExp(`^${value}`, 'i');
  		suggestions = this.items.filter(v => regex.test(v));
  		this.setState(() => ({ suggestions }))
  	}
  }
  suggestionSelected = (e, props) => {
    const value = e.target.innerText;
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }
  renderSuggestions = () => {
  	const {suggestions} = this.state;
  	if(suggestions.length === 0) {
  		return null;
  	}
  	return (
		<ul>
			{suggestions.map((item, i) => <Item item={item} key={i} suggestionSelected={this.suggestionSelected} />)}
		</ul>
  	)
  }
  render() {
    const {text} = this.state;
	return (
		<div>
			<input value={text} onChange={this.onTextChange} type="text" />
			{this.renderSuggestions()}
		</div>
	)
   }
}