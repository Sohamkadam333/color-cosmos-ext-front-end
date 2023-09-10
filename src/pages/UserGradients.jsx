import React, { useContext, useState } from 'react';
import { ColorContext, UserContext } from '../App';
import { Link } from 'react-router-dom';

const UserGradients = () => {
	const [gradientCss, setGradientCss] = useState();
	const { copyCss } = useContext(ColorContext);
	const { handleUserGradients, removeSingleUserGradient } = useContext(UserContext);
	const { userGradients } = useContext(UserContext);

	if (userGradients.length == 0) {
		return <h1 className='no-colors-gradients'>No Saved Gradients to show!</h1>;
	}

	return (
		<div className='explore-user-gradients-container'>
			{userGradients?.map((gradient) => (
				<div
					key={gradient._id + Math.round(Math.random() * 1000 + 1)}
					className='user-gradient-container'
					style={{ background: gradient.css.slice(12).replace(/[,;]$/, '') }}>
					<div className='user-gradient'>
						<Link to={`/single-gradient/${gradient?._id}`}>View Gradient</Link>
						<button onClick={() => copyCss(gradient.css)}>Copy Css</button>
						<button onClick={() => removeSingleUserGradient(gradient)}>Remove</button>
					</div>
					<p className='gradient-name'>{gradient?.name}</p>
				</div>
			))}
		</div>
	);
};

export default UserGradients;
