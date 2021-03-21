import React from 'react';
import './App.sass';
import PageRoutes from './components/PageRoutes';
import { ThemeProvider } from 'styled-components';
import { AppStyle } from './components/StyledComponents';
import Navbar from './components/Navbar';
const App = () => {
	return (
		<ThemeProvider theme={{ mode: 'dark' }}>
			<AppStyle>
				<Navbar />
				<PageRoutes />
			</AppStyle>
		</ThemeProvider>
	);
};

export default App;
