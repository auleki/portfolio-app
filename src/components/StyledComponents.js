import styled, { css, keyframes } from 'styled-components'
import theme from 'styled-theming'
// import Header from '../layout/Header';
import { colors, fonts, numeric } from '../utils/constants'

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
`

export const SidebarStyle = styled.div(
  ({ color }) => css`
    width: 240px;
    z-index: 500;
    background: ${colors.hardDark};
  `
)

export const PageColor = theme('mode', {
  light: colors.white,
  dark: colors.dark
})

export const HeaderColor = theme('mode', {
  light: colors.cream,
  dark: colors.dark
})

const HeaderTextColor = theme('mode', {
  light: colors.dark,
  dark: colors.white
})

export const PageWrap = styled.div`
  width: 100%;
  background: ${PageColor};
  font-family: ${fonts.main};
  /* padding: 0 ; */

  &::-webkit-scrollbar {
    width: 0.1em;
    border-radius: 15px;
    height: 0.3em;
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
`
export const HeaderWrap = styled.div`
	height: 100vh;
	/* background: linear-gradient(to right, #24242499, #1a1a1a99), url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616326741/portfolio/anchors-away_kana9b.svg') center fixed repeat; */
	/* background: ${HeaderColor}; */
	/* background-color: #DFDBE5; */
	/* background-color: #1a1a1a; */
	/* background-color: #1a1a1a; */
/* background-color: #1a1a1a; */
	background-image: url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616337683/portfolio/dots_vbwkxk.png");
	/* background-attachment: fixed; */
	/* background-size: cover; */

	color: ${HeaderTextColor};
	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		text-align: center;

		.title {
			h2 {
				background: ${colors.lightGreen};
				padding: .5em 0;
				border-radius: .3em;
				color: ${colors.hardDark};
				font-weight: 600;
			}
		}

		.headerSocialLinks {
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin: 1em 0;
			gap: 1em;
			.socialLink {
				/* margin-right: 1em; */
				padding: 1em;
				/* border-radius: .3em; */
				background: ${colors.dark};


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
					/* background: ${colors.hardDark}; */
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
				
				
			}
		}
	}
`

export const Title = styled.h1(
  ({ crazyFont, marginX, marginY, size }) => css`
    font-family: ${crazyFont ? fonts.crazy : fonts.secondary};
    font-size: ${size || 2}em;
    font-weight: 400;
    margin: ${marginY || 0} ${marginX || 0};
  `
)

export const Paragraph = styled.p(
  ({ font, size, color, white, marginX, marginY, center }) => css`
    font-size: ${size ? size : 1}em;
    text-align: ${center ? 'center' : 'inherit'};
    color: ${color ? color : white ? colors.white : colors.hardDark};
    margin: ${marginY || 0} ${marginX || 0};
    font-family: ${font || 'inherit'};
  `
)

export const SubTitle = styled.h2(
  ({ size, color, secondary }) => css`
    font-weight: 400;
    font-family: ${fonts.secondary};
    font-size: ${size ? size : 1}em;
    color: ${secondary ? colors.lightGreen : color ? color : colors.white};
  `
)

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
					margin-top: 2em;
					width: 100%;
					display: grid;
					grid-template-columns: 6fr;
					flex-wrap: wrap;
					place-items: center;
					justify-content: space-evenly;
					overflow-x: hidden;
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
)

export const SkillCard = styled.div`
		height: 8em;
		background-color: ${colors.hardDark};
		color: ${colors.white};
		width: 25em;
		border-radius: .1em;
		position: relative;
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

	`
/* 

THIS IS FOR RECENT PROJECT HOVER

const JoyBounceAnim = keyframes`
		
`; */

const gameName = keyframes`
	0% {
		text-align: left;
		opacity: 1;
	}

	20% {
		text-align: left;
		opacity: 0;
	}

	50% {
		text-align: center;
		opacity: 0;
	}

	100% {
		text-align: center;
		transform: scale(1.4);
		opacity: 1;
	}
`

export const StyleMagicCard = styled.div(
  ({ color }) => css`
    width: 15.5em;
		z-index: 400;
		font-weight: 400;
		display: flex;
		/* align-items: center; */
		justify-content: center;
    position: relative;
		margin: 2em 0;
		font-family: ${fonts.crazy};
		
		.buttons {
			display: flex;
			/* background: ${colors.green}; */
			/* justify-content: space-between; */
			width: 100%;
			
			gap: 1em;
			justify-content: center;
			/* background: ${colors.green}; */
		}

		.description {
			text-align: center;
		}

		.background {
			background: ${colors.hardDark};
			position: absolute;
			top: 0;
			height: 100%;
			bottom: 0;
			left: 0;
			border-radius: ${numeric.border}em;
			right: 0;
			opacity: 0;
			z-index: -1;
			transform: scale(.2, .9);
			/* transition: 250ms ease-out; */
		}

		.thumbnail {
			border-radius: ${numeric.border}em;
			object-fit: contain;
			height: auto;
			width: 100%;
		}

		.rank {
			position: absolute;
			font-weight: 600;
			top: 0;
			right: 1em;
			z-index: 200;
			background: rgba(255, 255, 255, .75);
			padding: .5em .5em .75em;
			clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0 100%, 0 0);
			color: ${colors.dark};
			transition: transform 150ms cubic-bezier(.21, 1.05, .81, 1.00), opacity 100ms linear;
		}

    .streamers {
      display: flex;

      img {
        width: 2em;
        height: 2em;
        border-radius: 50%;
      }
    }

    .front {
			transition: 250ms ease-out;

      .stats {
        display: flex;
        /* border: 2px solid ${colors.blue}; */
        align-items: center;
        justify-content: space-between;
      }

      .name {
        /* text-align: center; */
        margin: 0.75em 0;
      }

			.streamers img {
				border: 2px solid ${colors.white};

				&:nth-of-type(1) {
					transform: translateX(50%);
					z-index: 1;
				}

				&:nth-of-type(2) {
					transform: translateX(25%);
				}
			}
    }

    .back {
			opacity: 0;
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			margin-left: 23%;
			flex-direction: column;
			gap: 1em;
			transform: translateY(80%);
			transition: transform	 250ms ease-in, opacity 200ms ease-in;

			.streaming-info {
				columns: 2;
				column-rule: 1px solid rgba(255, 255, 255, .6);
				/* background: ${colors.white};	 */
			}

			.info {
				text-align: center;
			}


			.game-stat {
				font-size: 1.125em;
				text-align: center;

				span {
					font-size: .85em;
					display: block;
				}
			}
    }

    img {
      height: 15rem;
      width: 100%;
      object-fit: cover;
    }

		// COMPONENT HOVER STATE

		&:hover {

			.back {
				opacity: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-top: 4em;
				transform: translateY(0em);
				/* padding-bottom: 2em; */
			}

			.description {
				/* transform: translateY(4em); */
				/* margin: 4em 0; */
				margin-top: 6em;
			}

			.streamers {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.streamer {
					margin-right: 1em;
					text-align: center;
			}
			}

			.rank {
				transform: translate(150%, -90%);
			}
			
			.front {
				transform: translateY(-35%) scale(.8);

				.name {
					animation: ${gameName} 200ms forwards;
				}

				.stats {
					opacity: 0;
				}
			}
			
			.background {
				transform: scale(1.4, 1.2);
				opacity: 1;
				transition: transform 150ms cubic-bezier(.21, 1.05, .81, 1.00), opacity 100ms linear;
			}
		}
  `
)

export const StyleProjectCard = styled.div`
  background: ${colors.hardDark};
  height: 32rem;
  color: ${colors.white};
  transition: border-bottom 300ms ease-in, box-shadow 800ms ease-in-out;
  width: 30em;
  font-family: ${fonts.crazy};
  border-radius: 0.3em;
  border-bottom: 0.3em solid ${colors.cream};
  /* padding-bottom: 4em; */

  .repoView {
    color: ${colors.white};
    display: flex;
    align-items: center;
  }

  &:hover {
    border-bottom: 0.3em solid ${colors.green};
    box-shadow: 0px 18px 26px -25px rgba(1, 217, 91, 0.75);
    -webkit-box-shadow: 0px 18px 26px -25px rgba(1, 217, 91, 0.75);
    -moz-box-shadow: 0px 18px 26px -25px rgba(1, 217, 91, 0.75);
  }

  .image {
    img {
      height: auto;
      width: 100%;
      object-fit: cover;
    }
  }

  /* .info {
    padding: 1em 1em;

    h2 {
      text-transform: uppercase;
      font-weight: 700;
    }

    p {
      line-height: 1.4em;
    }
  } */

  .actions {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
  }

  @media (min-width: 320px) and (max-width: 560px) {
    height: 100%;
    padding-bottom: 0;
    .actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a,
      button {
        width: 100%;
      }

      button {
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
      }
    }
  }
`

export const SectionWrap = styled.div(
  ({ alignItems, justifyContent }) => css`
	padding: 1em 0em;
	height: 100vh;
	overflow-y: scroll;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: ${alignItems || 'inherit'};
	justify-content: ${justifyContent || 'inherit'};
	background: ${HeaderColor};
	/* background-image: url("https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616337683/portfolio/dots_vbwkxk.png"); */
	background-attachment: fixed;
	font-family: ${fonts.secondary};
	padding-bottom: 3em;
	color: ${HeaderTextColor};

	&::-webkit-scrollbar {
		width: .3em;
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

	.sectionProjects {
		/* height: 60vh; */
		/* background: ${colors.green}; */
		margin: 3em 0 2em 0;
		position: relative;
		display: grid;
		grid-template-columns: repeat(3, 2fr);
		/* justify-content: space-between; */
	}

	// Handle Project Card Spacing
	@media (min-width: 320px) and (max-width: 1053px) {
		.sectionProjects {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			padding: 0 1em;
			/* grid-template-columns: repeat(2, 2fr); */
		}
	}

	.projectsSection {
		display: flex;
		/* margin: 1em 0; */
		flex-direction: column;
		justify-content: space-between;
		padding: 0 3em;
	}

	.sectionTitle {
		display: flex;
		flex-direction: column-reverse;
		padding-top: 1.5em;
		
		
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

	@media (min-width: 320px) and (max-width: 1134px) {
		.contact {
			.form .row {
				display: flex;
				flex-direction: column;
			}
		}
	}

	@media (min-width: 320px) and (max-width: 1134px) {
		.contact {
			.contactSection {
				display: flex;
				flex-direction: column;
			}
		}
	}



	.recentProjects {
			padding: 0 2em;
			width: 100%;
			/* height: 50vh; */
			/* display: flex; */
			/* flex-direction: column; */
			/* justify-content: space-between; */
			
			.projects {
				/* display: grid; */
				overflow-x: hidden;
				display: flex;
				justify-content: space-evenly;
				flex-wrap: wrap; 
				grid-template-columns: repeat(3, 2fr);
				padding: 0 0 1.5em 0;
				grid-gap: 2em;
				grid-row-gap: 5em;
				&::-webkit-scrollbar {
				width: .1em;
				border-radius: 15px;
				height: .3em;
		}
/* 
		&::-webkit-scrollbar-track {
			background: ${colors.hardDark};
			border-radius: 15px;
		}

		&::-webkit-scrollbar-thumb {
			background: ${colors.red};
			border-radius: 20px;
		} */
			}
		}

		/* @media (min-width: 320px) and (max-width: ) */

	.experience {

		padding: 0 1em;
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
				padding: 2em 0;
				background: ${colors.hardDark};
				transition: 500ms ease-in-out;
				border-top: .2em solid transparent;

				&:nth-child(1), &:nth-child(2) {
					margin-right: 1em;
				}
				.qualification {
					margin: .5em 0;
					padding: 0 1em;

					display: flex;
					flex-direction: column;
					
					.timeline, .certificate {
						display: flex; 
						justify-content: space-between;
					}

					.certificate {
						margin-top: 1em;

						ion-icon {
							transition: 300ms ease-in;
						}
					}

					/* .timeline, .institute {
						display: flex;
						flex-direction: column;
					} */

					/* .timeline {

					}

					.institute {
						ion-icon {
							
						}
					} */
				}

				&:hover {
					border-top: .2em solid ${colors.red};
					animation: ${shockBounce} 1s 0s;
					cursor: pointer;
					border-top-right-radius: .2em;
					border-top-left-radius: .2em;

					.certificate {
						ion-icon {
							transform: scale(1.8);
						}
					}
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

	@media (min-width: 320px) and (max-width: 1044px) {
		.experience .work {
			display: grid;
			grid-template-columns: repeat(2, 4fr);
		}

		.experience .education {
			display: flex;
			flex-wrap: wrap;
			section {
				&:nth-child(1), &:nth-child(2) {
					margin-right: 0;
				}
			}
		}
	}

	@media (min-width: 320px) and (max-width: 830px) {
		.experience .work {
			display: block;
			/* grid-template-columns: repeat(2, 4fr); */
		}
	}

		@media (min-width: 320px) and (max-width: 1134px) {
		.contact {
			.contactSection {
				display: flex;
				flex-direction: column;
			}
		}
	}
/* 
	@media (min-width: 315px) and (max-width: 450px) {

	}
	 */
	@media (min-width: 315px) and (max-width: 540px) {
		.experience .work section {
			padding: 1em .5em;
		}
	}
	`
)

export const DotIndicator = styled.div(
  ({ canActivate }) => css`
    height: 0.5em;
    display: inline-flex;
    width: 0.5em;
    background: ${canActivate ? colors.lightGreen : colors.red};
    border-radius: 100%;
  `
)

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
      width: 0.1em;
      border-radius: 15px;
      height: 0.3em;
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
        margin-right: 0.5em;
        transition: 300ms ease-out;
        font-size: 0.8em;
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
        margin-bottom: 0.3em;
      }

      h2 {
        visibility: hidden;
        transition: 200ms ease-in;
      }

      &:hover {
        background: ${colors.hardDark};
        cursor: pointer;
        transform: scale(1.1) translateX(0.5em);
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
          margin-right: 0.1em;
        }
      }
    }
  `
)

const ThemeButtonColor = theme('mode', {
  light: colors.blue,
  dark: colors.green
})

const TextButtonColor = theme('mode', {
  light: colors.lightGreen,
  dark: colors.white
})

export const AltButton = styled.button(
  ({ color }) => css`
    padding: 1em 1.5em;
    background: ${colors.red};
    cursor: pointer;
    border-radius: ${numeric.border}em;
    color: ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.red};
    }
  `
)

export const Button = styled.button(
  ({ primary, size, color, alternate, bgColor, canActivate }) => css`
    padding: 1em 2em;
    background: ${
      primary ? colors.dark : alternate ? colors.lightGreen : colors.cream
    };
    transition: background 150ms ease-in, border-right 500ms ease-in;
    display: flex;
    align-items: center;
    font-weight: 600;
    /* border: .1em solid transparent; */
    font-size: ${size || 0.8}em;
    letter-spacing: 0.1em;
    border-right: 0.5em solid ${colors.red};
    border-left: 0.5em solid transparent;
    font-family: ${fonts.secondary};
    border-top-right-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
    color: ${
      primary ? colors.darkCream : alternate ? colors.white : colors.hardDark
    };

    ion-icon {
      font-size: 1.5em;
      margin-left: 0.5em;
      transition: 400ms ease-out, transform 300ms ease-out;
      opacity: 0.3;
      position: relative;
    }

    &:hover,
    &:focus {
      background: ${primary ? colors.red : colors.dark};
      color: ${primary ? colors.darkCream : colors.cream};
      border-right: 0.5em solid ${colors.white};
      cursor: pointer;

      ion-icon {
        opacity: 1;
        transform: translateX(0.2em) scale(1.5);
        color: ${colors.lightGreen};
      }
    }

    &:disabled {
      background: ${colors.red};
      cursor: not-allowed;
      border-right: 0.5em solid ${colors.darkCream};
      ion-icon {
        /* transform: rotateZ(30deg); */
      }

      &:hover {
        ion-icon {
        }
      }
      /* pointer-events: none; */
    }

    &:disabled,
    &:hover {
      /* transform: rotateZ(30deg); */
    }

    &:focus,
    &:hover {
      /* border-left: 0.5em solid ${
        canActivate ? colors.lightGreen : colors.red
      }; */
    }
  `
)

export const ThemeSwitchButton = styled.button`
  background: ${ThemeButtonColor};
  height: 3em;
  padding: 0 1em;
  position: absolute;
  cursor: pointer;
  color: ${TextButtonColor};
  top: 2em;
  right: 3%;
  opacity: 0.5;
  transition: 200ms ease-in;
  border-radius: 0.1em;

  &:hover {
    opacity: 1;
  }
`

export const FooterStyle = styled.div(
  ({ size }) => css`
    background: ${colors.darkCream};
    color: ${colors.red};
    padding: 2em 1em;
    margin-top: 2em;
    text-align: center;

    .text {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `
)

export const SpanText = styled.span(
  ({ color, size, marginX, marginY }) => css`
    color: ${color || colors.white};
    font-size: ${size || 1}em;
    margin: ${marginY || 0}em ${marginX || 0}em;
  `
)

export const NavStyle = styled.nav(
  ({ color, open }) => css`		
		background: ${colors.dark};
		margin: 0;
		width: ${open ? '100vw' : '110px'};
		/* height: 100%; */
		height: 100vh;
		z-index: 50;
		position: ${open ? 'absolute' : 'relative'} ;
		overflow: hidden;
		transition: 200ms ease-out;
		top: 0;
		border-right: .2em solid ${colors.green};
		left: 0;

		.close {
			position: absolute;
			top: 1em;
			right: 1em;

			ion-icon {
				font-size: 4em;
				color: ${colors.green};
			}
		}

		.navigation {
			list-style-type: none;
			font-family: ${fonts.main};
			width: 100%;
			/* position: fixed; */
			/* background: ${colors.hardDark}; */

			a {
				text-decoration: none;
			}

			li {
				padding: 1em 1.5em;
				width: 100%;
				display: flex;
				align-items: center;
				color: ${colors.white};
				margin-bottom: 1em;
				

				span {
					color: ${colors.white};
					transition: left 300ms ease-in;
					display: ${open ? 'flex' : 'none'} ;
				}

				ion-icon {
					font-size: 2em;
					padding-right: .5em;
					color: ${colors.darkCream};
				}

				 &:hover {
					background: ${colors.hardDark};
					border-left: .2em solid ${colors.blue};
					/* border-top-right-radius: 1em;
					border-bottom-right-radius: 1em; */
					/* border-radius: 100px;  */
					ion-icon {
						color: ${colors.lightGreen};
					}

					span {
						/* left: 1em; */
						padding-left: 1em;
						position: relative;
					}
				}
			}
		}

		&:hover {
			width: 	300px;

			li span {
				display: inline;
			}
		}

		@media (min-width: 320px) and (max-width: 676px) {
			display: ${open ? 'flex' : 'none'} ;
		}
	`
)

export const AppStyle = styled.div(
  ({ color }) => css`
    display: flex;
    /* flex-direction: column; */
    /* height: 100vh; */
    /* overflow: hidden; */
    /* z-index: 0; */
    background: ${colors.dark};
    grid-template-columns: 0.5fr 3.5fr;
    /* grid-template-columns: .001fr 3fr; */
  `
)

export const RoundButton = styled.button(
  ({ color }) => css`
    height: 5em;
    width: 5em;
    background: ${colors.green};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2em;
    right: 2em;
    border-radius: 10px;
    transition: 200ms ease-in;

    ion-icon {
      font-size: 3em;
      color: ${colors.white};
    }

    &:hover {
      background: ${colors.dark};
      cursor: pointer;

      ion-icon {
        color: ${colors.lightGreen};
      }
    }

    @media (min-width: 676px) {
      display: none;
    }
  `
)
