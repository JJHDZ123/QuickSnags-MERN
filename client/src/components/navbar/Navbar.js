import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = ({ click }) => {
	return (
		<nav className="app__flex navbar">
			<div className="navbar__logo">
				<h2 className="bold-text">QUICKSNAGS</h2>
			</div>

			<ul className="app__flex navbar__links">
				<li>
					<Link to="/cart" className="cart__link">
						<FontAwesomeIcon icon={faCartShopping} />
						<span>Cart</span>
						<span className="app__flex cartlogo__badge">0</span>
					</Link>
				</li>
				<li>
					<Link to="/product" className="home__link">
						Shop
					</Link>
				</li>
				<li>
					<Link to="/auth" className="login__link">
						Login
					</Link>
				</li>
			</ul>

			<div className="app__flex hamburger__menu" onClick={click}>
				<div />
				<div />
				<div />
			</div>
		</nav>
	);
};

export default Navbar;
