import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts.js/ProductContext';
import { CartContext } from './contexts.js/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([item, ...cart])
	};

	const removeItem = id => {
		const newItem = cart.filter(item => item.id !== id)
		setCart([ ...newItem ])
	}

	return (
		<div className="App">
			{/* // this value is available to the children now. */}
			<ProductContext.Provider value ={{ products, addItem }}> 
				<CartContext.Provider value={{ cart, removeItem }}>
						<Navigation cart={cart} />

				{/* Routes */}
							<div>
								<Route
									exact path="/"
									component={Products} />

								<Route
									path="/cart"
									component={ShoppingCart} />}
								/>
							</div>
				
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
