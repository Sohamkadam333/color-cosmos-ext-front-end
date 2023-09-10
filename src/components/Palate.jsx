import React, { useContext, useState } from 'react';
import { ColorContext, UserContext } from '../App';

const Palate = (props) => {
	const { palate } = props;
	const [isCodeVisible, setIsCodeVisible] = useState(false);
	const { handleUserColors, getUserColors } = useContext(UserContext);
	const { copyCss } = useContext(ColorContext);

	return (
		<div className='palate-container' key={palate.id}>
			{palate?.colors?.map((color, index) => {
				return (
					<div
						className='item'
						key={index}
						id={index + 1}
						style={{ backgroundColor: color?.hex }}
						// onMouseOver={handleMouseOver}
						// onMouseOut={handleMouseOut}
					>
						<div className='color-details'>
							<p className='color-code'>{color?.hex}</p>
							<div className='color-action-btns'>
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
					</div>
				);
			})}
		</div>
	);
};

export default Palate;
