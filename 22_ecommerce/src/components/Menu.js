import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Menu extends Component {
	render() {
		return (
			<ul>	
				<li><NavLink exact to='/'>Home</NavLink></li>
				<li><NavLink to='/about'>About</NavLink></li>
				<li><NavLink to='/contact'>Contact</NavLink></li>
			</ul>
		);
	}
}
