import React from 'react';
import { Link } from 'react-router-dom';
import './product.scss';

const product = ({ imageUrl, name, price, description, productId }) => {
	return (
		<div className="product">
			<div className="image__container">
				<img className="product__image" src={imageUrl} alt={name} />
			</div>

			<div className="product__info">
				<p className="info__name">{name}</p>
				<p className="info__description">{description.substring(0, 100)}...</p>
				<p className="info__price">${price}</p>
				<Link to={`/products/${productId}`} className="info__button">
					View
				</Link>
			</div>
		</div>
	);
};

export default product;
