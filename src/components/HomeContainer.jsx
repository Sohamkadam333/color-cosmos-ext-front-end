import RandomGradient from './RandomGradient';
import RandomPalates from './RandomPalates';

const HomeContainer = () => {
	console.log('Home Container');
	return (
		<div id='home-container'>
			<RandomPalates />
			<RandomGradient />
		</div>
	);
};

export default HomeContainer;
