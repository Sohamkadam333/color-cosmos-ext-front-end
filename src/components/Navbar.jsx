import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ColorContext } from '../App';

const Navbar = () => {
	const { palates, gradients } = useContext(ColorContext);
	return (
		<div className='navbar'>
			<NavLink
				style={{
					pointerEvents: palates ? 'all' : 'none !important',
				}}
				to={'/explore-palates'}>
				Explore Palates
			</NavLink>
			<NavLink
				style={{
					pointerEvents: gradients ? 'all' : 'none',
				}}
				to={'/explore-gradients'}>
				Explore Gradients
			</NavLink>
			<NavLink to={'/saved/user-colors'}>Saved</NavLink>
		</div>
	);
};

export default Navbar;
