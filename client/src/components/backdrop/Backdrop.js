import React from 'react';
import './Backdrop.scss';

const Backdrop = ({ show, click }) => {
	return show && <div className="backdrop" onClick={click} />;
};

export default Backdrop;
