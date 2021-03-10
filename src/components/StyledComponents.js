import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import Header from '../layout/Header';
let c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11;
c1 = '#F2E8CF';
c2 = '#A7C957';
c3 = '#6A994E';
c4 = '#386641';
c5 = '#BC4749';
c6 = '#F9F8F8';
c7 = '#0B8BFF';
c8 = '#E9DFC7';

const colors = {
	cream: c1,
	darkCream: c8,
	lightGreen: c2,
	green: c3,
	darkGreen: c4,
	blue: c7,
	red: c5,
	white: c6,
	gray: '#737373',
	dark: '#242424',
	hardDark: '#1a1a1a'
};

const shockBounce = keyframes`
	0% {
		transform: translateY(-.2em);
	}

	60% {
		transform: translateY(.2em);
	}

	100% {
		transform: translateY(0em);
	}
`;

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
			border: .5em solid ${colors.lightGreen};
			transition: border 400ms ease-in, transform 200ms ease-in;

			&:hover {
				transform: scale(1.4) translateY(-2em);

				/* border: .5em dashed ${c2}; */
			}
		}
	}
`;

export const Title = styled.h1(
	({ crazyFont, marginX, marginY }) => `
	font-family: ${crazyFont ? fonts.crazy : fonts.secondary};
	font-size: 2em;
	font-weight: 400;
	margin: ${marginY || 0} ${marginX || 0};
`
);

export const Paragraph = styled.p(
	({ size, color, white, marginX, marginY }) => `
		font-size: ${size ? size : 1}em;
		color: ${color ? color : white ? colors.white : colors.hardDark};
		margin: ${marginY || 0} ${marginX || 0};
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
	({ alignItems, justifyContent, paddingX, paddingY }) => `
		justify-content: ${justifyContent || 'inherit'};
		align-items: ${alignItems || 'inherit'};
		display: flex;
		width: 100%;
		padding: ${paddingY || 0}em ${paddingX || 0}em;

		.bio {
			width: 40%;
			margin-left: 3em;
			// background: ${colors.white};

			.skills {
				
			}
		}

		.aboutSection {
			display: flex;
			// align-items: center;
			padding: 4em 0;
			justify-content: center;
			width: 100%;
			height: 100vh;
		}

		.projectCards {
			// background: ${colors.red};
		}
	`
);

export const SkillCard = styled.div`
		height: 8em;
		background-color: ${colors.hardDark};
		color: ${c6};
		width: 25em;
		border-radius: .1em;
		/* border-top-right-radius: 1em; */
		border-bottom-right-radius: .5em;
		margin-bottom: .5em;
		padding: 1em 2em;
		transition: 400ms ease-in;
		border-right: solid transparent .2em;
	
		&:hover {
			cursor: pointer;
			transform: scale(1.02);
			border-right: solid ${colors.lightGreen} .2em;
			box-shadow: 0px 19px 50px -22px rgba(20,20,20,0.86);
		}
	
		&:nth-child(2) {
			/* background-color: ${colors.cream}; */
			&:hover {
				border-right: solid ${colors.red} .2em;
			
			}
		}

		&:nth-child(3) {
			/* background-color: ${colors.cream}; */
			&:hover {
				border-right: solid ${colors.darkCream} .2em;
			
			}
		}

		&:nth-child(4) {
		/* background-color: ${colors.cream}; */
			&:hover {
				border-right: solid ${colors.blue} .2em;
			}
		}

		&:nth-child(5) {
		/* background-color: ${colors.cream}; */
			&:hover {
				border-right: solid ${colors.darkCream} .2em;
			}
		}

		&:nth-child(6) {
		/* background-color: ${colors.cream}; */
			&:hover {
				border-right: solid ${colors.cream} .2em;
			}
		}
		

	`;

export const SectionWrap = styled.div`
	padding: 1em 0;
	min-height: 100vh;
	/* overflow-y: scroll; */
	border-top: .3em solid ${c6};
	background: ${HeaderColor};
	font-family: ${fonts.main};
	color: ${HeaderTextColor};

	.experience {

		.time {
			color: ${colors.darkCream};
		}

		.instituite {
			color: ${colors.gray};
		}

		.type {
			color: ${colors.lightGreen};
		}
		
		.education,
		.work {
			section {
				/* padding: 1em 1em; */
				margin: 1em 0;
				/* background-color: ${colors.darkGreen}; */
			}
		}

		.education {
			display: flex;
			justify-content: space-between;
			padding: 0 2em;
			section {
				width: 100%;
				padding: 2em 1em;
				background: ${colors.hardDark};
				transition: 500ms ease-in-out;
				border-top: .2em solid transparent;

				&:nth-child(1), &:nth-child(2) {
					margin-right: 1em;
				}
				.row {
					margin: .5em 0;
				}

				&:hover {
					border-top: .2em solid ${colors.red};
					animation: ${shockBounce} 1s 0s;
					cursor: pointer;
					border-top-right-radius: .2em;
					border-top-left-radius: .2em;
				}
			}
		}

		.work {
			padding: 0 2em;
			display: grid;
			grid-template-columns: repeat(3, 2fr);
			grid-gap: 1em;
			
			section {
				border: .3em solid transparent;
				border-radius: .3em;
				padding: 2em;
				transition: 500ms ease-in-out;
				background: ${colors.hardDark};

				.time {
					color: ${colors.gray};
				}
				
				.company {
					margin: 1em 0 .5em 0;
					display: block;
					padding: 1em 0;
					border-radius: .1em;
					text-align: center;
					background: ${colors.red};	
				}

				.position {
					color: ${colors.lightGreen};
				}

				&:hover {
					/* border: .3em solid ${colors.gray}; */
					background: ${colors.dark};
					cursor: none;
					.time {
						color: ${colors.darkCream};
					}
				}
			}
			.work-experience {
				list-style-type: none;

				li {
					padding: .5em 0;
					display: flex;
					align-items: center;

					img {
						height: 3em;
						width: 3em;
					}
				}
			}

			&:hover {
				cursor: none;
			}
		}
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
