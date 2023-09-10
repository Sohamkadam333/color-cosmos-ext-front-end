import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExplorePalates from './pages/ExplorePalates';
import Saved from './pages/Saved';
import ExploreGradients from './pages/ExploreGradients';
import SinglePalate from './pages/SinglePalate';
import SingleGradient from './pages/SingleGradient';
import './App.css';
import Header from './components/Header';
import { generateRandomNum } from './utils/helper';
import HomeContainerShimmer from './components/HomeContainerShimmer';
import HomeContainer from './components/HomeContainer';
import UserColors from './pages/UserColors';
import UserPalates from './pages/UserPalates';
import UserGradients from './pages/UserGradients';

export const ColorContext = createContext(null);
export const UserContext = createContext(null);
UserContext.displayName = 'UserContext';
ColorContext.displayName = 'ColorContext';

const App = () => {
	const [palates, setPalates] = useState(null);
	const [gradients, setGradients] = useState(null);
	const [randomGradient, setRandomGradient] = useState(null);
	const [randomPalates, setRandomPalates] = useState([]);
	const [randomGradientCss, setRandomGradientCss] = useState();
	const [isCopied, setIsCopied] = useState(false);

	// const [randomGradientData, setRandomGradientData] = useState(null);

	// ********* COPY CSS || COPY COLOR CODE
	const copyCss = async (code) => {
		try {
			await navigator.clipboard.writeText(code);
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 1000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	// color palates
	const handlePalates = (data) => {
		setPalates(data);
	};
	async function getAllPalates() {
		try {
			const palates = await fetch('https://color-cosmos.onrender.com/api/v1/get-all-palates');
			const data = await palates.json();
			console.log(data);
			handlePalates(data.palate);
			const randomPalate1 = data.palate[generateRandomNum(514)];
			const randomPalate2 = data.palate[generateRandomNum(514)];
			setRandomPalates([randomPalate1, randomPalate2]);
		} catch (err) {
			console.log(err);
		}
	}

	// color gradients
	const handleGradients = (data) => {
		setGradients(data);
	};

	async function getAllGradients() {
		try {
			const gradients = await fetch('https://color-cosmos.onrender.com/api/v1/get-all-gradients');
			const data = await gradients.json();
			// console.log(data.gradients[generateRandomNum(330)].css.slice(11));
			handleGradients(data.gradients);
			const randomNum = generateRandomNum(330);
			setRandomGradient(data.gradients[randomNum]);
			setRandomGradientCss(data.gradients[randomNum].css.slice(12).replace(/[,;]$/, ''));
		} catch (error) {
			console.log(error.message);
		}
	}

	// Random Gradient
	function handleRandomGradient() {
		console.log('handling random gradient');
		const randomNum = generateRandomNum(330);
		setRandomGradient(gradients[randomNum]);
		setRandomGradientCss(gradients[randomNum].css.slice(12).replace(/[,;]$/, ''));
	}

	// Random Palates
	function handleRandomPalates() {
		console.log('handling random palates');
		const randomPalate1 = palates[generateRandomNum(514)];
		const randomPalate2 = palates[generateRandomNum(514)];
		setRandomPalates([randomPalate1, randomPalate2]);
	}

	// ******************** USER COLOR CONTEXT
	const [userColors, setUserColors] = useState([]);
	const [userGradients, setUserGradients] = useState([]);
	const [userPalates, setUserPalates] = useState([]);
	const [isSaved, setIsSaved] = useState(false);

	// GET USER COLORS FROM LOCAL STORAGE
	function getUserColors() {
		if (localStorage.getItem('user-colors')) {
			setUserColors(JSON.parse(localStorage.getItem('user-colors')).reverse() || []);
		} else {
			localStorage.setItem('user-colors', '[]');
		}
	}

	// GET USER PALATES FROM LOCAL STORAGE
	function getUserPalates() {
		if (localStorage.getItem('user-palates')) {
			const userPalatesAll = JSON.parse(localStorage.getItem('user-palates'));
			setUserPalates(userPalatesAll);
		} else {
			localStorage.setItem('user-palates', '[]');
		}
	}

	// GET USER GRADIENTS FROM LOCAL STORAGE
	function getUserGradients() {
		if (localStorage.getItem('user-gradients')) {
			// const userGradientsAll = JSON.parse(localStorage.getItem('user-gradients').);
			setUserGradients(JSON.parse(localStorage.getItem('user-gradients')).reverse() || []);
		} else {
			localStorage.setItem('user-gradients', '[]');
		}
	}

	// SAVE USER COLOR TO LOCAL STORAGE
	function handleUserColors(color) {
		let colors = JSON.parse(localStorage.getItem('user-colors')) || [];
		colors.push(color);
		localStorage.setItem('user-colors', JSON.stringify(colors));
		setIsSaved(color);
		setTimeout(() => {
			setIsSaved(false);
		}, 1000);
	}

	// REMOVE USER COLOR TO LOCAL STORAGE
	function removeSingleUserColor(color) {
		let colors = JSON.parse(localStorage.getItem('user-colors')) || [];
		const newColors = colors.filter((c) => c.hex != color.hex);
		localStorage.setItem('user-colors', JSON.stringify(newColors));
	}

	// SAVE USER GRADIENT TO LOCAL STORAGE
	function handleUserGradients(gradient) {
		let gradients = JSON.parse(localStorage.getItem('user-gradients')) || [];
		gradients.push(gradient);
		localStorage.setItem('user-gradients', JSON.stringify(gradients));
		setIsSaved(gradient);
		getUserGradients();
		setTimeout(() => {
			setIsSaved(false);
		}, 1000);
	}

	// REMOVE USER COLOR TO LOCAL STORAGE
	function removeSingleUserGradient(gradient) {
		let gradients = JSON.parse(localStorage.getItem('user-gradients')) || [];
		const newGradients = gradients.filter((c) => c.id != gradient.id);
		localStorage.setItem('user-gradients', JSON.stringify(newGradients));
		getUserGradients();
	}

	useEffect(() => {
		getAllPalates();
		getAllGradients();
		getUserColors();
		getUserPalates();
		getUserGradients();
	}, []);

	return (
		<div className='App'>
			<ColorContext.Provider
				value={{
					palates,
					gradients,
					randomGradient,
					randomPalates,
					handleRandomGradient,
					handleRandomPalates,
					randomGradientCss,
					copyCss,
				}}>
				<UserContext.Provider
					value={{
						userColors,
						userGradients,
						userPalates,
						setUserColors,
						setUserGradients,
						setUserPalates,
						handleUserColors,
						getUserColors,
						getUserGradients,
						getUserPalates,
						removeSingleUserColor,
						handleUserGradients,
						removeSingleUserGradient,
					}}>
					<BrowserRouter>
						<Header />
						<Navbar />

						<Routes>
							<Route path='/' element={<h1>Home Page</h1>} />
							<Route path='/explore-palates' element={<ExplorePalates />} />
							<Route path='/explore-gradients' element={<ExploreGradients />} />
							<Route path='/single-palate/:id' element={<SinglePalate />} />
							<Route path='/single-gradient/:id' element={<SingleGradient />} />

							{/* USER SAVED COLORS, PALATES, GRADIENTS */}
							<Route path='/saved' element={<Saved />}>
								<Route path='user-colors' element={<UserColors />} />
								<Route path='user-palates' element={<UserPalates />} />
								<Route path='user-gradients' element={<UserGradients />} />
							</Route>
						</Routes>
						{!randomGradient || !randomPalates ? <HomeContainerShimmer /> : <HomeContainer />}

						{isSaved ? (
							<div className='saved-msg-container'>
								<p className='saved-msg'>
									Saved <span style={{ background: isSaved.hex }}>{isSaved.name}</span>
								</p>
							</div>
						) : null}
						{isCopied ? (
							<div className='copied-msg-container'>
								<p className='copied-msg'>Copied to clipboard</p>
							</div>
						) : null}
						<Footer />
					</BrowserRouter>
				</UserContext.Provider>
			</ColorContext.Provider>
		</div>
	);
};

export default App;
