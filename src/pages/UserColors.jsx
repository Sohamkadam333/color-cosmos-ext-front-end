import React, { useContext, useEffect } from 'react';
import { ColorContext, UserContext } from '../App';
import RemoveIcon from '../assets/images/logos/remove3.svg';

const UserColors = () => {
	const { userColors, removeSingleUserColor, getUserColors } = useContext(UserContext);
	const { copyCss } = useContext(ColorContext);

	if (userColors.length == 0) {
		return <h1 className='no-colors-gradients'>No Saved Colors to show!</h1>;
	}

	return (
		<div className='user-colors-container'>
			{userColors?.map((color, index) => {
				return (
					<div key={Math.floor(Math.random() * 1000)} className='user-color' style={{ background: color.hex }}>
						<p>{color.name}</p>
						<p onClick={() => copyCss(color.hex)}>{color.hex}</p>
						<p
							className='remove-btn'
							onClick={() => {
								removeSingleUserColor(color);
								getUserColors();
							}}>
							<img src={RemoveIcon} alt='remove-icon' />
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default UserColors;
