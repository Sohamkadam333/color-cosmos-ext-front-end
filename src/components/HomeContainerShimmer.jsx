import ShimmerPalate from './ShimmerPalate';
import Reload from '../assets/images/logos/reload.png';

const HomeContainerShimmer = () => {
	return (
		<div id='home-container'>
			<div className='shimmer-palates-container '>
				{/* <button>Prev</button> */}
				<div className='random-palates-container'>
					<ShimmerPalate />
					<ShimmerPalate />
				</div>
				<button className='reload' disabled style={{ cursor: 'not-allowed' }}>
					<img src={Reload} alt='' className='reload-image' />
				</button>
			</div>
			<div className='shimmer-gradient-container '>
				{/* <button>Prev</button> */}
				<div className='random-gradient-container'>
					<ShimmerPalate />
				</div>
				<button className='reload' disabled style={{ cursor: 'not-allowed' }}>
					<img src={Reload} alt='' className='reload-image' />
				</button>
			</div>
		</div>
	);
};

export default HomeContainerShimmer;
