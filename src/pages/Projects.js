import React, { useEffect, useState, useRef } from 'react';

const Projects = () => {
	const [ name, setName ] = useState('');

	const inputStyle = {
		padding: '1em 1em',
		backgroundColor: 'black',
		color: 'white'
	};

	const buttonStyle = {
		padding: '1em 2em',
		background: 'white',
		color: 'black',
		fontSize: '1em',
		border: '.2em solid #09eeee'
	};

	const prevName = useRef('');

	useEffect(
		() => {
			prevName.current = name;
			console.log('CURRENT:', name);
			console.log('PRESENT:', prevName);
		},
		[ name ]
	);

	return (
		<div>
			<input
				type="text"
				style={inputStyle}
				ref={prevName}
				value={name}
				placeholder="Raise the roof"
				onChange={(e) => setName(e.target.value)}
			/>
			<h2>
				Name is {name}, but I used to be {prevName.current}
			</h2>
			{/* <button onClick={changeText} style={buttonStyle}>
				FOCUS
			</button> */}
		</div>
	);
};

export default Projects;
