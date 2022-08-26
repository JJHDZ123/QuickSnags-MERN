import { React, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.scss';

//pages
import { CartScreen, HomeScreen, LoginScreen, ProductScreen, ProfileScreen } from './pages/PagesIndex.js';
//components
import Navbar from './components/navbar/Navbar.js';
import Backdrop from './components/backdrop/Backdrop.js';
import SideDrawer from './components/sidedrawer/SideDrawer.js';
import Footer from './components/footer/Footer.js';
import PrivateRoute from './components/PrivateRoutes.js';

function App() {
	const [ sideToggle, setSideToggle ] = useState(false);

	return (
		<Fragment>
			<Toaster
				position="top-center"
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
				<main className="app__container">
					<Routes>
						<Route exact path="/" element={<Navigate to="/products" />} />
						<Route exact path="/products" element={<HomeScreen />} />
						<Route exact path="/products/:id" element={<ProductScreen />} />
						<Route exact path="/cart" element={<CartScreen />} />
						<Route exact path="/auth" element={<LoginScreen />} />
						<Route element={<PrivateRoute />}>
							<Route path="/profile" element={<ProfileScreen />} />
						</Route>
					</Routes>
				</main>
			</Router>
			<Footer />
		</Fragment>
	);
}

export default App;
