import React from 'react';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div>
				<Navbar />
				<ShoppingList />
			</div>
		</Provider>
	);
}

export default App;
