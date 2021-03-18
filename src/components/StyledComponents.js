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

	&::-webkit-scrollbar {
		width: .1em;
		border-radius: 15px;
		height: .3em;
	}

	&::-webkit-scrollbar-track {
		background: ${colors.hardDark};
		border-radius: 15px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${colors.darkCream};
		border-radius: 20px;
		width: 4px;
	}
`;
export const HeaderWrap = styled.div`
	height: 100vh;
	background: linear-gradient(to right, #24242499, #1a1a1a99), url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1615936258/glitch_kwrau2.png') center fixed repeat;
	/* background: ${HeaderColor}; */
	background-size: cover;
	/* background: url(); */
	color: ${HeaderTextColor};
	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		text-align: center;

		.headerSocialLinks {
			display: flex;
			margin: 1em 0;
			.socialLink {
				margin-right: 1em;
				padding: 1em;
				border-radius: .3em;

					a {
					color: ${colors.white};
					padding: 1em 0;
					text-decoration: none;
					transition: 200ms ease-in;
				}

				img {
					height: auto;
					width: 5em;
					transition: 500ms ease-in;
				}

				&:hover {
					background: ${colors.hardDark};
					img {
						transform: rotateZ(360deg);
					}
					a {
						text-decoration: underline;
					}
				}
			}

		
		}
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
				transform: scale(1.1) translateY(-1em);
				
				/* border: .5em dashed ${c2}; */
			}
		}
	}
`;

export const Title = styled.h1(
	({ crazyFont, marginX, marginY, size }) => css`
		font-family: ${crazyFont ? fonts.crazy : fonts.secondary};
		font-size: ${size || 2}em;
		font-weight: 400;
		margin: ${marginY || 0} ${marginX || 0};
	`
);

export const Paragraph = styled.p(
	({ size, color, white, marginX, marginY, center }) => css`
		font-size: ${size ? size : 1}em;
		text-align: ${center ? 'center' : 'inherit'};
		color: ${color ? color : white ? colors.white : colors.hardDark};
		margin: ${marginY || 0} ${marginX || 0};
	`
);

export const SubTitle = styled.h2(
	({ size, color, secondary }) => css`
		font-weight: 400;
		font-family: ${fonts.secondary};
		font-size: ${size ? size : 1}em;
		color: ${secondary ? colors.lightGreen : color ? color : colors.white};
	`
);

export const Row = styled.div(
	({ alignItems, justifyContent, paddingX, paddingY }) => css`
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
				position: relative;
			}
		}

		.aboutSection {
			margin-top: 2em;
			display: flex;
			align-items: center;
			padding: 4em 0;
			justify-content: center;
			width: 100%;
			height: 100vh;
		}

		@media (min-width: 320px) and (max-width: 1104px) {
			.aboutSection {
				flex-direction: column-reverse;
				display: flex;
				height: 100%;

				.projectCards {
					/* background: ${colors.darkGreen}; */
					margin-top: 2em;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;

				}
				
				.bio {
					margin-bottom: 2em;
					margin-left: 0;
					padding: 0 2em;	
					width: 100%;
				}
			}

		}

		@media (max-width: 514px) {

			.projectCards {
				padding: 0 2em;
				/* background: ${colors.red}; */
			}
			
			.bio {
				text-align: center;
			}
			.quote {
				margin-bottom: 1em;
			}			
			.mobileBlock {
				display: block;
				margin-top: 1em;
			}
		}


		.projectCards {
			// background: ${colors.red};
		}

		/* &:hover {
			.section-tip {
				p {
					color: ${colors.red};
				}
			}
		} */
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

		a {
			text-decoration: none;
			border-bottom: .1em solid transparent;
			transition: 200ms ease-in;
			color: ${colors.cream};
		}
/* 	
		&:hover {
			
		}
	 */
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

		img {
			height: auto;
			width: 3em;
			transition: transform 300ms ease-in;
		}
		
		&:hover {
			cursor: pointer;
			transform: scale(1.02);
			border-right: solid ${colors.lightGreen} .2em;
			box-shadow: 0px 19px 50px -22px rgba(20,20,20,0.86);
			img {
				transform: rotate(15deg);
			}
			
			a {
				padding: .5em;
				color: ${colors.lightGreen};
				border-bottom: .1em solid ${colors.white}; 
			}
		}

	`;

export const StyleProjectCard = styled.div`
	background: ${colors.hardDark};
	height: 100%;
	color: ${c6};
	transition: border-bottom 300ms ease-in, box-shadow 800ms ease-in-out;
	width: 30em;
	border-radius: .3em;
	border-bottom: .3em solid ${colors.cream};
	padding-bottom: 4em;

	&:hover {
		border-bottom: .3em solid ${colors.green};
		box-shadow: 0px 18px 26px -25px rgba(1, 217, 91, 0.75);
		-webkit-box-shadow: 0px 18px 26px -25px rgba(1, 217, 91, 0.75);
		-moz-box-shadow: 0px 18px 26px -25px rgba(1, 217, 91, 0.75);
	}

	.image {
		img {
			height: auto;
			width: 100%;
		}
	}

	.info {
		padding: 1em 1em;
	}

	.actions {
		display: flex;
		justify-content: space-between;
	}
`;

export const SectionWrap = styled.div(
	({ alignItems, justifyContent }) => css`
	padding: 1em 0;
	min-height: 100vh;
	overflow-y: hidden;
	display: flex;
	flex-direction: column;
	align-items: ${alignItems || 'inherit'};
	justify-content: ${justifyContent || 'inherit'};
	/* border-top: .3em solid ${c6}; */
	background: ${HeaderColor};
	font-family: ${fonts.main};
	color: ${HeaderTextColor};

	.sectionTitle {
		display: flex;
		flex-direction: column-reverse;
		/* padding: 0 2em; */
		padding-bottom: 1.5em;
		padding-top: 5.5em;
		
		
		h2 { 
			transition: color 300ms ease-in, transform 400ms ease-in;
			color: ${colors.gray};
		}
		.dash {
			width: 2em;			
			border-radius: 100px;
			height: .5em;
			transition: 1000ms ease-in;
			background: ${colors.blue};
		}

		&:hover {
			h2 {
				transform: translate(.2em, -.3em);
			}

			.dash {
				background: ${colors.lightGreen};
			}
		}
	}

	.contact {
		padding: 0 2em;

		.or {
			/* background: ${colors.blue}; */
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.socialLinks {
			/* background: ${colors.red}; */
			text-align: center;	
			.links {
				margin-top: 3em;
				display: grid;
				grid-template-columns: repeat(3, 3fr);
				grid-row-gap: 3em;
				justify-content: space-evenly;
				align-items: center;
				section {
					a {
						text-decoration: none;

						h2 {
							color: ${colors.cream};
							border-bottom: .1em solid transparent;
							margin: .5em 0 0;
							padding: .5em 0;
							
							transition: 200ms ease-in;
						}
						
						img {
							height: 4em;
							width: 4em;
							transition: 100ms ease-in;

						}

						&:hover {
							color: ${colors.red};

							img {
								transform: translateY(.2em);
							}

							h2 {
								color: ${colors.gray};
								margin: .5em 0 0;
								
								border-bottom: .1em solid ${colors.red};

							}

						}
					}
				}
			}
		}

		.contactSection {
			display: grid;
			grid-template-columns: 2fr 1fr 2fr;
			grid-gap: 1em;
		}
	}

	.form {

		.indicatorArea {
			display: flex;
			/* background: ${colors.lightGreen}; */
			align-items: center;
			p {
				margin-left: .5em;
				color: ${colors.gray};
			}
		}
		
	}

	.input_group {
		display: flex;
		flex-direction: column;
		margin: 1em 0;
		label {
			margin: 1em 0;
			color: ${colors.gray};
		}

		input, textarea {
			padding: 1em 1em;
			transition: 200ms ease-in;
			border-radius: .2em;
			line-height: 1.5em;
			color: ${colors.white};
			border-bottom: .2em solid ${colors.red} ;
			background: transparent;
			&:focus {
				background: transparent;	
				color: ${colors.white};
				border-bottom: .2em solid ${colors.lightGreen};

				label {
					color: ${colors.blue};
				}
			}
		}
	}

	.recentProjects {
			padding: 0 2em;
			width: 100%;
			.projects {
				display: grid;
				grid-template-columns: repeat(3, 2fr);
				grid-gap: 2em;
				grid-row-gap: 5em;
			}
		}

	.experience {

		padding: 0 2em;
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
			/* padding: 0 2em; */
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
			/* padding: 0 2em; */
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
					color: ${colors.dark};
					font-weight: 600;
					border-radius: .1em;
					text-align: center;
					background: ${colors.darkCream};	
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
					padding: 1em;
					display: flex;
					border-radius: .3em;
					align-items: center;

					img {
						/* display: none; */
						height: 1.5em;
						width: 1.5em;
						padding-right: .5em;
					}

					p {
						transition: 250ms ease-in;
					}

					&:hover {
						background: ${colors.hardDark};
						p {
							transform: translateX(1em);
						}
					}
				}
			}

			&:hover {
				cursor: none;
			}
		}

		
	}

	@media (max-width: 1340px) {
		.work .row {
			display: flex;
			align-items: center;
			flex-direction: column;
			span:nth-child(1) {
				margin-bottom: .5em;
			}
		}
	}

	@media (min-width: 720px) and (max-width: 1044px) {
		.experience .work {
			display: grid;
			grid-template-columns: repeat(2, 4fr);
		}

		.experience .education {
			display: block;
		}
	}

	@media (min-width: 320px) and (max-width: 720px) {
		.experience .work {
			display: block;
			/* grid-template-columns: repeat(2, 4fr); */
		}
	}
	`
);

export const DotIndicator = styled.div(
	({ canActivate }) => css`
		height: .5em;
		display: inline-flex;
		width: .5em;
		background: ${canActivate ? colors.lightGreen : colors.red};
		border-radius: 100%;
	`
);

export const SkillsSection = styled.div(
	({ paddingY, paddingX }) => css`
		background: ${colors.dark};
		padding: 2em 0;
		justify-content: space-between;
		overflow-x: scroll;
		overflow-y: hidden;
		/* position: relative; */
		display: grid;
		grid-template-columns: repeat(10, 10em);

		&::-webkit-scrollbar {
			width: .1em;
			border-radius: 15px;
			height: .3em;
		}

		&::-webkit-scrollbar-track {
			background: ${colors.hardDark};
			border-radius: 15px;
		}

		&::-webkit-scrollbar-thumb {
			background: ${colors.darkCream};
			border-radius: 20px;
			/* height: 4px;
			width: 4px; */
		}

		.section-tip {
			position: absolute;
			bottom: 5%;
			transition: 250ms ease-in;
			right: 0;

			p {
				margin-right: .5em;
				transition: 300ms ease-out;
				font-size: .8em;
			}
		}

		.skill {
			padding: 1em;
			text-align: center;
			width: 100%;
			transition: 300ms ease-in;
			img {
				height: 3em;
				object-fit: cover;
				width: 3em;
				margin-bottom: .3em;
			}

			h2 {
				visibility: hidden;
				transition: 200ms ease-in;
			}

			&:hover {
				background: ${colors.hardDark};
				cursor: pointer;
				transform: scale(1.1) translateX(.5em);
				h2 {
					visibility: visible;
				}
			}
		}

		&:hover {
			.section-tip {
				color: ${colors.gray};
				p {
					color: ${colors.gray};
					margin-right: .1em;
				}
			}
		}
	`
);

// export const SectionWrap = styled.div`

// 	${({ justifyContent, alignContent }) =>
// 		justifyContent}

// 	.recentProjects {
// 			display: grid;
// 			grid-template-columns: repeat(3, 2fr);
// 			padding: 0 2em;
// 			grid-gap: 1em;
// 			grid-row-gap: 5em;
// 			width: 100%;
// 		}

// 	.experience {

// 		.time {
// 			color: ${colors.darkCream};
// 		}

// 		.instituite {
// 			color: ${colors.gray};
// 		}

// 		.type {
// 			color: ${colors.lightGreen};
// 		}

// 		.education,
// 		.work {
// 			section {
// 				/* padding: 1em 1em; */
// 				margin: 1em 0;
// 				/* background-color: ${colors.darkGreen}; */
// 			}
// 		}

// 		.education {
// 			display: flex;
// 			justify-content: space-between;
// 			padding: 0 2em;
// 			section {
// 				width: 100%;
// 				padding: 2em 1em;
// 				background: ${colors.hardDark};
// 				transition: 500ms ease-in-out;
// 				border-top: .2em solid transparent;

// 				&:nth-child(1), &:nth-child(2) {
// 					margin-right: 1em;
// 				}
// 				.row {
// 					margin: .5em 0;
// 				}

// 				&:hover {
// 					border-top: .2em solid ${colors.red};
// 					animation: ${shockBounce} 1s 0s;
// 					cursor: pointer;
// 					border-top-right-radius: .2em;
// 					border-top-left-radius: .2em;
// 				}
// 			}
// 		}

// 		.work {
// 			padding: 0 2em;
// 			display: grid;
// 			grid-template-columns: repeat(3, 2fr);
// 			grid-gap: 1em;

// 			section {
// 				border: .3em solid transparent;
// 				border-radius: .3em;
// 				padding: 2em;
// 				transition: 500ms ease-in-out;
// 				background: ${colors.hardDark};

// 				.time {
// 					color: ${colors.gray};
// 				}

// 				.company {
// 					margin: 1em 0 .5em 0;
// 					display: block;
// 					padding: 1em 0;
// 					border-radius: .1em;
// 					text-align: center;
// 					background: ${colors.red};
// 				}

// 				.position {
// 					color: ${colors.lightGreen};
// 				}

// 				&:hover {
// 					/* border: .3em solid ${colors.gray}; */
// 					background: ${colors.dark};
// 					cursor: none;
// 					.time {
// 						color: ${colors.darkCream};
// 					}
// 				}
// 			}
// 			.work-experience {
// 				list-style-type: none;

// 				li {
// 					padding: .5em 0;
// 					display: flex;
// 					align-items: center;

// 					img {
// 						/* display: none; */
// 						height: 3em;
// 						width: 3em;
// 					}
// 				}
// 			}

// 			&:hover {
// 				cursor: none;
// 			}
// 		}

// 	}

// 	@media (max-width: 1340px) {
// 		.work .row {
// 			display: flex;
// 			align-items: center;
// 			flex-direction: column;
// 			span:nth-child(1) {
// 				margin-bottom: .5em;
// 			}
// 		}
// 	}

// 	@media (min-width: 720px) and (max-width: 1044px) {
// 		.experience .work {
// 			display: grid;
// 			grid-template-columns: repeat(2, 4fr);
// 		}

// 		.experience .education {
// 			display: block;
// 		}
// 	}

// 	@media (min-width: 320px) and (max-width: 720px) {
// 		.experience .work {
// 			display: block;
// 			/* grid-template-columns: repeat(2, 4fr); */
// 		}
// 	}
// `;

const ThemeButtonColor = theme('mode', {
	light: c7,
	dark: c2
});

const TextButtonColor = theme('mode', {
	light: c2,
	dark: c6
});

export const Button = styled.button(
	({ primary, size, color, alternate, bgColor, canActivate }) => `
		padding: 1em 2em;
		background: ${primary ? colors.dark : alternate ? colors.lightGreen : colors.cream};
		transition: background 150ms ease-in, 
		border-right 500ms ease-in;
		display: flex;
		align-items: center;
		font-weight: 600;
		/* border: .1em solid transparent; */
		font-size: ${size || 0.8}em;
		letter-spacing: .1em;
		border-right: .5em solid ${colors.red};
		border-left: .5em solid transparent;
		font-family: ${fonts.secondary};
		border-top-right-radius: .3em;
		border-bottom-right-radius: .3em;
		color: ${primary ? colors.darkCream : alternate ? colors.white : colors.hardDark};

		ion-icon {
			font-size: 1.5em;
			margin-left: .5em;
			transition: 400ms ease-out, transform 300ms ease-out;
			opacity: 0.3;
			position: relative;
		}
		
		&:hover, &:focus {
			background: ${primary ? colors.red : colors.dark};
			color: ${primary ? colors.darkCream : colors.cream};
			border-right: .5em solid ${colors.white};
			cursor: pointer;

			ion-icon {
				opacity: 1;
				transform: translateX(.2em);
			}
		}

		&:focus, &:hover {
			border-left: .5em solid ${canActivate ? colors.lightGreen : colors.red};
		}
	`
);

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
