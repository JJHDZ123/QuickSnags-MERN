import { React, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.scss';

//pages
import { CartScreen, HomeScreen, LoginScreen, ProductScreen } from './pages/PagesIndex.js';
//components
import Navbar from './components/navbar/Navbar.js';
import Backdrop from './components/backdrop/Backdrop.js';
import SideDrawer from './components/sidedrawer/SideDrawer.js';

function App() {
	const [ sideToggle, setSideToggle ] = useState(false);

	return (
		<Fragment>
			<Toaster
				position="top-right"
				toastOptions={{
					style : {
						fontSize : '1.8rem'
					}
				}}
			/>
			<Router>
				<Navbar click={() => setSideToggle(true)} />
				<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
				<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
				<main>
					<Routes>
						<Route exact path="/" element={<Navigate to="/product" />} />
						<Route exact path="/product" element={<HomeScreen />} />
						<Route exact path="/product/:id" element={<ProductScreen />} />
						<Route exact path="/cart" element={<CartScreen />} />
						<Route exact path="/auth" element={<LoginScreen />} />
					</Routes>
				</main>
			</Router>
		</Fragment>
	);
}

export default App;
