import React, { Component, useState } from 'react';
import './App.css';
import { Product } from './components/Product'
import Products from './components/Products'
import Checkout from './components/Checkout';

const App = () => {
    const productsData = [
      {title: "T-shit", size: "XL", price: 44.59, id: 1},
      {title: "Sweater", size: "S", price: 23.99, id: 2}
    ]
    const [products, setProducts] = useState(productsData);

    const deleteProduct = id => {
      setProducts(products.filter(product => product.id !== id))
    }
    return (
        <div className="container">
            <Products products={products} />
            <Checkout />
        </div>
    )
}

export default App;
