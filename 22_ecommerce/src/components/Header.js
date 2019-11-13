import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link, Switch } from "react-router-dom";
import { Menu } from './Menu';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import Product from '../pages/Product';
import Cart from './cart/Cart';
import Whishlist from './Whishlist';
import TopLinks from './TopLinks';
import Category from './Category';
import Categories from './Categories';

export class Header extends Component {
	render() {
		return (
			<div>
				<HashRouter>
    				<Menu />
    				    <Route exact path='/' component={Home} />
    					<Route path='/about' component={About} />
    					<Route path='/contact' component={Contact} />
    					<Route path='/cart' component={Cart} />
    					<Route path='/whishlist' component={Whishlist} />
    					<Route path="/products/:product_url" component={Product} />
    					<Categories />
    					<TopLinks />
				</HashRouter>
			</div>
		);
	}
}

