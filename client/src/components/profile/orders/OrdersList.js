import React from 'react';
import './OrdersList.scss';

const OrdersList = () => {
	return (
		<div className="app__flex orders">
			<p className="Order__number">Order Number: # 12554251235176543745769</p>
			<p className="Order__price">$13000</p>
			<p className="Order__date">DATE</p>
		</div>
	);
};

export default OrdersList;
