import React from 'react';
import Reload from '../assets/images/logos/reload.png';
import { useContext } from 'react';
import { ColorContext, UserContext } from '../App';
import Palate from './Palate';

const RandomPalates = () => {
	const { randomPalates, handleRandomPalates } = useContext(ColorContext);
	console.log('randomPalates');

	return (
		<div className='shimmer-palates-container '>
			{/* <button>Prev</button> */}

			<div style={{ display: 'flex' }}>
				{randomPalates?.map((palate) => {
					return <Palate palate={palate} key={palate.id} />;
				})}
			</div>
			<button className='reload' onClick={() => handleRandomPalates()}>
				<img src={Reload} alt='' className='reload-image' />
			</button>
		</div>
	);
};

export default RandomPalates;
