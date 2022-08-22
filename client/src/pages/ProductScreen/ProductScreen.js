import { React, useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ProductScreen.scss';

import { getProductDetails } from '../../redux/actions/productActions.js';
import { addToCart } from '../../redux/actions/cartActions.js';

const ProductScreen = () => {
	const [ qty, setQty ] = useState(1);
	const dispatch = useDispatch();
	const { id } = useParams();

	const productDetails = useSelector((state) => state.getProductDetails);
	const { loading, error, product } = productDetails;

	useEffect(
		() => {
			dispatch(getProductDetails(id));
		},
		[ dispatch, id ]
	);

	const addToCartHandler = () => {
		dispatch(addToCart(id, qty));
	};

	return (
		<div className="productscreen">
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<Fragment>
					<div className="productscreen__left">
						<div className="left__imagecontainer">
							<img className="left__img" src={product.imageUrl} alt={product.name} />
						</div>
						<div className="left__info">
							<p className="left__name">{product.name}</p>
							<p className="left__price">Price: ${product.price}</p>
							<p className="left__description"> {product.description} </p>
						</div>
					</div>
					<div className="productscreen__right">
						<div className="right__info">
							<p>
								Price: <span>${product.price}</span>
							</p>
							<p>
								Status: <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
							</p>
							<p>
								Qty
								<select value={qty} onChange={(e) => setQty(e.target.value)}>
									{[ ...Array(product.countInStock).keys() ].map((x) => {
										return (
											<option key={x + 1} value={x + 1}>
												{x + 1}
											</option>
										);
									})}
								</select>
							</p>
							<p>
								<button type="button" onClick={addToCartHandler}>
									Add To Cart
								</button>
							</p>
						</div>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default ProductScreen;
