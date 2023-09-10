import React, { useEffect, useContext } from 'react';
import { ColorContext } from '../App';
import Palate from '../components/Palate';

const ExplorePalates = () => {
	const { palates } = useContext(ColorContext);

	const homeContainer = document.getElementById('home-container');
	useEffect(() => {
		homeContainer.style.display = 'none';
	}, []);
	return (
		<div className='explore-palates-container'>
			{palates?.map((palate, index) => {
				return (
					<div key={index}>
						<Palate palate={palate} />
						<div className='palate-details'>
							<div className='palate-name'>{palate?.name}</div>

							<div className='single-palate-btn-container'>
								{/* <p>View Palate</p> */}
								{/* <p>Save</p> */}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ExplorePalates;
