import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import Header from '../layout/Header';
let c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11;
c1 = '#F2E8CF';
c2 = '#A7C957';
c3 = '#6A994E';
c4 = '#386641';
c5 = '#BC4749';
c6 = '#F9F8F8';
c7 = '#272838';
c8 = '#E9DFC7';

const colors = {
	cream: c1,
	darkCream: c8,
	lightGreen: c2,
	green: c3,
	darkGreen: c4,
	red: c5,
	white: c6,
	gray: '#737373',
	dark: '#242424',
	hardDark: '#1a1a1a'
};

const fonts = {
	main: 'Inconsolata',
	secondary: 'Recursive',
	crazy: 'Carter One'
};

export const PageColor = theme('mode', {
	light: colors.white,
	dark: colors.dark
});

export const HeaderColor = theme('mode', {
	light: colors.cream,
	dark: colors.dark
});

const HeaderTextColor = theme('mode', {
	light: colors.dark,
	dark: colors.white
});

export const PageWrap = styled.div`
	width: 100%;
	background: ${PageColor};
	font-family: ${fonts.main};
`;
export const HeaderWrap = styled.div`
	height: 100vh;
	background: ${HeaderColor};
	color: ${HeaderTextColor};
	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		text-align: center;
	}

	.avatar {
		img {
			height: 15em;
			object-fit: cover;
			border-radius: 100em;
			width: 15em;
			border: .5em solid ${c6};
			transition: border 400ms ease-in, transform 200ms ease-in;

			&:hover {
				transform: scale(1.4) translateY(-2em);

				/* border: .5em dashed ${c2}; */
			}
		}
	}
`;

export const Title = styled.h1(
	({ crazyFont }) => `
	font-family: ${crazyFont ? fonts.crazy : fonts.secondary};
	font-size: 2em;
	font-weight: 400;
`
);

export const Paragraph = styled.p(
	({ size, color }) => `
		font-size: ${size ? size : 1}em;
		color: ${color ? color : colors.hardDark};
	`
);

export const SubTitle = styled.h2(
	({ size, color, secondary }) => `
		font-weight: 400;
		font-family: ${fonts.secondary};
		font-size: ${size ? size : 1}em;
		color: ${secondary ? colors.lightGreen : colors.white}
	`
);

export const Row = styled.div(
	({ alignItems, justifyContent }) => `
		justify-content: ${justifyContent ? justifyContent : 'inherit'};
		display: flex;
		width: 100%;
		align-items: ${alignItems ? alignItems : 'inherit'};

		.bio {
			width: 40%;
			margin-left: 3em;
		}
		
	`
);

export const SectionWrap = styled.div`
	height: 100vh;
	border-top: .3em solid ${c6};
	background: ${HeaderColor};
	font-family: ${fonts.main};
	color: ${HeaderTextColor};
`;

export const SCards = styled.div`
	height: 10em;
	background-color: ${colors.hardDark};
	color: ${c6};
	width: 25em;
	margin-bottom: 2em;
	padding: 1em 2em;

	&:hover {
		cursor: pointer;
	}
`;

const ThemeButtonColor = theme('mode', {
	light: c7,
	dark: c2
});

const TextButtonColor = theme('mode', {
	light: c2,
	dark: c6
});

export const ThemeSwitchButton = styled.button`
	background: ${ThemeButtonColor};
	height: 3em;
	padding: 0 1em;
	position: absolute;
	cursor: pointer;
	color: ${TextButtonColor};
	top: 2em;
	right: 3%;
	opacity: .5;
	transition: 200ms ease-in;
	border-radius: .1em;

	&:hover {
		opacity: 1;
	}
`;
