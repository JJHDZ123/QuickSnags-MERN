import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './SideDrawer.scss';

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = [ 'sidedrawer' ];
	const auth = useSelector((state) => state.auth);
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};

	if (show) {
		sideDrawerClass.push('show');
	}

	return (
		<div className={sideDrawerClass.join(' ')}>
			<ul className="app__flex sidedrawer__links" onClick={click}>
				<li>
					<Link to={auth.Auth ? '/profile' : '/auth'}>
						{auth.Auth ? `${auth.Auth.username} Profile` : 'login'}
					</Link>
				</li>
				<li>
					<Link to="/products">Shop</Link>
				</li>
				<li>
					<Link to="/cart">
						<FontAwesomeIcon icon={faCartShopping} />
						<span>Cart</span>
						<span className="app__flex sidedrawer__cartbadge">{getCartCount()}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
