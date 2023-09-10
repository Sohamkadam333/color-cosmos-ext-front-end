import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ColorContext, UserContext } from '../App';

const SingleGradient = () => {
	const [gradient, setGradient] = useState(null);
	const { randomGradientCss, copyCss } = useContext(ColorContext);
	const { handleUserColors, getUserColors } = useContext(UserContext);

	const { id } = useParams();

	async function getSingleGradient() {
		const gradientData = await fetch(`https://color-cosmos.onrender.com/api/v1/get-gradient/${id}`);
		const data = await gradientData.json();
		setGradient(data.gradient);
	}

	const homeContainer = document.getElementById('home-container');

	useEffect(() => {
		console.log('single gradient page');
		getSingleGradient();
		homeContainer.style.display = 'none';
	}, []);
	return (
		<div className='single-gradient-container'>
			<div
				style={{
					background: gradient?.css.slice(12).replace(/[,;]$/, ''),
					width: '100%',
					height: '100px',
					borderRadius: '10px',
					boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-end',
				}}
				onClick={() => copyCss(gradient?.css)}>
				<p className='single-gradient-name'>{gradient?.name}</p>
			</div>
			<div
				className='gradient-colors-container'
				style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
				{gradient?.colors.map((color) => {
					return (
						<div key={color.hex} className='color-container' style={{ background: color.hex }}>
							<p className='color-code' onClick={() => copyCss(color.hex)} key={color.hex}>
								{color.hex}
							</p>
							<div className='gradient-color-action-btns'>
								<p onClick={() => copyCss(color.hex)}>Copy</p>
								<p
									onClick={() => {
										handleUserColors(color);
										getUserColors();
									}}>
									Save
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SingleGradient;
