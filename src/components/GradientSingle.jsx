import React from 'react';
import { ColorContext, UserContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GradientSingle = ({ gradient }) => {
	const [gradientCss, setGradientCss] = useState();
	const { copyCss } = useContext(ColorContext);
	const { handleUserGradients } = useContext(UserContext);
	// console.log(gradient);

	useEffect(() => {
		setGradientCss(gradient.css.slice(12).replace(/[,;]$/, ''));
	}, []);
	return (
		<div className='gradient-container' style={{ background: gradientCss }}>
			<div className='gradient'>
				<Link to={`/single-gradient/${gradient?._id}`}>View Gradient</Link>
				<button onClick={() => copyCss(gradient.css)}>Copy Css</button>
				<button onClick={() => handleUserGradients(gradient)}>Save</button>
			</div>
			<p className='gradient-name'>{gradient?.name}</p>
		</div>
	);
};

export default GradientSingle;
