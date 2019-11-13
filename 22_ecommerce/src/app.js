import './styles/styles.css';
import 'normalize.css/normalize.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store/storeConfiguration';
import { Header } from './components/Header';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export class App extends Component {
	render() {
		return (
			<div>
				<Header />
			</div>
			);
	}
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));


'use strict'
function a(b) {
	return b
}

console.log(a `hi`)