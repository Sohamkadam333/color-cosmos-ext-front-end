import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ColorContext, UserContext } from '../App';
import Reload from '../assets/images/logos/reload.png';
import { Link } from 'react-router-dom';

const RandomGradient = () => {
	const { randomGradient, handleRandomGradient, copyCss } = useContext(ColorContext);
	const [randomGradientCss, setRandomGradientCss] = useState();

	const { handleUserGradients } = useContext(UserContext);
	const [isGradientActions, setIsGradientActions] = useState(false);

	const handleMouseOver = () => {
		setIsGradientActions(true);
	};

	const handleMouseOut = () => {
		setIsGradientActions(false);
	};

	useEffect(() => {
		console.log('HomeContainer');
		setRandomGradientCss(randomGradient.css.slice(12).replace(/[,;]$/, ''));
	}, [randomGradient]);

	return (
		<div className='shimmer-gradient-container '>
			{/* <button>Prev</button> */}
			<div className='random-gradient-container'>
				<div
					className='random-gradient'
					style={{ background: randomGradientCss }}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}>
					{isGradientActions ? (
						<>
							<div className='btn-container'>
								<Link
									className='gradient-action-btn'
									id='view-random-gradient'
									to={`/single-gradient/${randomGradient?._id}`}>
									View Gradient
								</Link>

								<button className='gradient-action-btn' onClick={() => copyCss(randomGradient.css)}>
									Copy Css
								</button>
								<button className='gradient-action-btn' onClick={() => handleUserGradients(randomGradient)}>
									Save
								</button>
							</div>

							<p>{randomGradient?.name}</p>
						</>
					) : null}
				</div>
			</div>
			<button
				onClick={() => {
					handleRandomGradient();
					console.log('Generating random gradient');
				}}
				className='reload'>
				<img src={Reload} alt='' className='reload-image' />
			</button>
		</div>
	);
};

export default RandomGradient;
