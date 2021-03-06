import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import Header from '../layout/Header';
let c1, c2, c3, c4, c5, c6, c7;
c1 = '#F2E8CF';
c2 = '#A7C957';
c3 = '#6A994E';
c4 = '#386641';
c5 = '#BC4749';
c6 = '#F9F8F8';
c7 = '#272838';

export const PageColor = theme('mode', {
	light: c6,
	dark: c7
});

export const HeaderColor = theme('mode', {
	light: c1,
	dark: c7
});

export const PageWrap = styled.div`
	width: 100%;
	background: ${PageColor};
`;
export const HeaderWrap = styled.div`
	height: 100vh;
	background: ${HeaderColor};
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

export const Title = styled.h1`
	font-size: 2em;
	font-weight: 400;
`;

export const SubTitle = styled.h2`font-weight: 400;`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	background: ${c5};

	${({ xCenter }) => xCenter && css`justify-content: center;`};
`;

export const SectionWrap = styled.div`
	height: 100vh;
	border-top: .3em solid ${c6};
	background: ${HeaderColor};
`;

export const SCards = styled.div`
	height: 20em;
	background-color: ${c2};
	color: ${c6};
	width: 20em;
	border-radius: .3em;
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
