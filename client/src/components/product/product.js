import React from 'react';
import { Link } from 'react-router-dom';
import './product.scss';

const product = () => {
	return (
		<div className="product">
			<div className="image__container">
				<img
					className="product__image"
					src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
					alt="product name"
				/>
			</div>

			<div className="product__info">
				<p className="info__name">Product 1</p>
				<p className="info__description">THIS IS THE DESCRIPTION OF THE ITEM MOTHER SUCKER</p>
				<p className="info__price">$499.99</p>
				<Link to={`/product/${11111}`} className="info__button">
					View
				</Link>
			</div>
		</div>
	);
};

export default product;
