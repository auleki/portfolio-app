import React, { useState } from 'react';
import Header from '../layout/Header';
import { PageWrap, ThemeSwitchButton, Title } from '../components/StyledComponents';
import Footer from '../components/Footer';
import About from '../layout/About';
import RecentProjects from '../layout/RecentProjects';
import Contact from '../layout/Contact';
import Experience from '../layout/Experience';
import { ThemeProvider } from 'styled-components';

const Homepage = () => {
	const [ bright, setBright ] = useState(true);

	const themeState = bright ? 'dark' : 'light';

	return (
		<ThemeProvider theme={{ mode: themeState }}>
			<PageWrap>
				<Header />
				<ThemeSwitchButton onClick={() => setBright(!bright)}>{!bright ? 'DARK' : 'LIGHT'}</ThemeSwitchButton>
				<About />
				<Experience />
				<RecentProjects />
				<Contact />
				<Footer />
			</PageWrap>
		</ThemeProvider>
	);
};

export default Homepage;
