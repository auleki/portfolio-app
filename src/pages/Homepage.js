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
	const [ bright, setBright ] = useState(false);

	// use here for theme switch
	// const themeState = bright ? 'dark' : 'light';

	return (
		<PageWrap>
			<Header />
			{/* <Footer /> */}
		</PageWrap>
	);
};

export default Homepage;
