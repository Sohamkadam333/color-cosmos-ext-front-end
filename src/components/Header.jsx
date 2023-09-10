import { useContext, useEffect, useState } from 'react';
import { ColorContext } from '../App';

const Header = () => {
	const { randomGradient } = useContext(ColorContext);
	const [randomGradientCss, setRandomGradientCss] = useState();
	useEffect(() => {
		setRandomGradientCss(randomGradient?.css?.slice(12)?.replace(/[,;]$/, ''));
	}, [randomGradient]);

	return (
		<>
			<h1 className='header' style={{ fontFamily: "'Pacifico', cursive", background: randomGradientCss || 'black' }}>
				Color Cosmos
			</h1>
		</>
	);
};

export default Header;
