import React from 'react';
import { ColorContext } from '../App';
import { useContext, useEffect, useState } from 'react';

const Gradient = () => {
	const { randomGradient, randomPalates, handleRandomGradient, handleRandomPalates } = useContext(ColorContext);
	const [randomGradientCss, setRandomGradientCss] = useState();
	return (
		<div className='random-gradient-container'>
			<div className='random-gradient' style={{ background: randomGradientCss }}>
				<button>View Gradient</button>
				<button>Copy Css</button>
				<button>Save</button>
			</div>
			<p>{randomGradient?.name}</p>
		</div>
	);
};

export default Gradient;
