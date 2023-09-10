import React, { useEffect, useState, useContext } from 'react';
import Gradients from '../components/Gradients';
import { ColorContext } from '../App';
import GradientSingle from '../components/GradientSingle';

const ExploreGradients = () => {
	const homeContainer = document.getElementById('home-container');
	const { gradients } = useContext(ColorContext);
	useEffect(() => {
		homeContainer.style.display = 'none';
	}, []);
	return (
		<div className='explore-gradients-container'>
			{gradients.map((gradient, index) => (
				<GradientSingle key={index} gradient={gradient} />
			))}
		</div>
	);
};

export default ExploreGradients;
