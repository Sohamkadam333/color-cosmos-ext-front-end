import React, { useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Saved = () => {
	const homeContainer = document.getElementById('home-container');
	useEffect(() => {
		homeContainer.style.display = 'none';
	}, []);
	return (
		<div className='saved-container'>
			<nav className='saved-navbar'>
				<NavLink to={'/saved/user-colors'}>Colors</NavLink>
				{/* <NavLink to={'/saved/user-palates'}>Palates</NavLink> */}
				<NavLink to={'/saved/user-gradients'}>Gradients</NavLink>
			</nav>
			<Outlet />
		</div>
	);
};

export default Saved;
