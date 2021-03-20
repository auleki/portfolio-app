import React, { useRef, useEffect } from 'react';
import { Button, Paragraph, StyleProjectCard, SectionWrap, SubTitle } from '../components/StyledComponents';
import NeumorphismImgPath from './../assets/neumorphism.jpg';
import GridExampleImgPath from '../assets/grid-example.jpg';
import Covid19ImgPath from '../assets/covid-19-tracker.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const ProjectCard = ({ project }) => {
	return (
		<StyleProjectCard>
			<div className="image">
				<img src={project.imageUrl} alt="" />
			</div>
			<div className="info">
				<div className="text">
					<SubTitle>{project.title}</SubTitle>
					<Paragraph white marginY="1em">
						{project.description}
					</Paragraph>
				</div>
				<div className="actions">
					<a href={project.liveUrl}>
						<Button>
							<span>Demo Preview</span>
							<ion-icon name="link-outline" />
						</Button>
					</a>
					<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
						<Button primary disabled={project.client}>
							<span>
								{project.client ? (
									<div className="repoView">
										<span>REPO IS PRIVATE</span>
										<ion-icon name="finger-print" />
									</div>
								) : (
									<div className="repoView">
										<span>CHECK CODE</span>
										<ion-icon name="git-branch-outline" />
									</div>
								)}
							</span>
						</Button>
					</a>
					{/* )} */}
				</div>
			</div>
		</StyleProjectCard>
	);
};

const RecentProjects = () => {
	const primaryRef = useRef();
	const secondaryRef = useRef();

	const primaryOptions = {
		type: 'loop',
		width: 800,
		perPage: 2,
		perMove: 1,
		gap: '1rem',
		pagination: false
	};

	const secondaryOptions = {
		type: 'slide',
		width: 800,
		rewind: true,
		fixedHeight: 110,
		fixedWeight: 70,
		cover: true,
		focus: 'center',
		updateOnMove: true,
		perPage: 2,
		perMove: 1,
		gap: '1rem',
		pagination: false
	};

	const boxStyle = {
		width: '10rem',
		height: '10rem',
		background: 'orange'
	};

	const projects = [
		{
			imageUrl:
				'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179417/portfolio/checkadigs-sc-5_kv31bf.png',
			title: 'Covid 19 Tracker',
			description:
				'Fetched data from a COVID 19 API. Created a card component to represent the data alongside a bar chart.',
			githubLink: 'https://github.com/auleki/tracking-covid-19',
			liveUrl: 'https://friendly-lichterman-40c5f6.netlify.app/'
		},
		{
			imageUrl:
				'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179242/portfolio/checkadigs-sc3_klblyk.png',
			title: 'Checkadigs Stores',
			description:
				'This is a fullstack e commerce store which uses React for the client side and Express on for the backend.',
			// githubLink: 'https://github.com/auleki/tracking-covid-19',
			liveUrl: 'https://checkadigs.com',
			client: true
		},
		{
			imageUrl: 'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179524/portfolio/finpayng-sc_erqryc.png',
			title: 'FinPay Landing Page',
			description:
				'Here is a landing page created for a fintech company, built with the fantastic trio HTML, CSS and Javascript',
			// githubLink: 'https://github.com/auleki/tracking-covid-19',
			liveUrl: 'https://finpayng.com',
			client: true
		}
	];

	return (
		<SectionWrap justifyContent="center" alignItems="center">
			{/* UNDER STYLEPROJECTCARD  */}
			<div className="recentProjects">
				<div className="sectionTitle">
					<div className="dash" />
					<SubTitle size={3}>Recent Projects</SubTitle>
				</div>
				<div className="projects">{projects.map((project, index) => <ProjectCard project={project} />)}</div>
			</div>
		</SectionWrap>
	);
};

export default RecentProjects;

// <Splide
// 						options={{
// 							rewind: true,
// 							perPage: 1,
// 							perMove: 1,
// 							gap: '1rem'
// 						}}
// 						onMoved={(splide, newIndex) => {
// 							console.log('moved', newIndex);
// 						}}
// 					>
// 						<SplideSlide>
// 							{/* <ProjectCard /> */}
// 							<div className="box" style={boxStyle}>
// 								<h2>GROW</h2>
// 							</div>
// 						</SplideSlide>
// 						<SplideSlide>
// 							{/* <ProjectCard /> */}
// 							<div className="box" style={boxStyle}>
// 								<h2>GROW</h2>
// 							</div>
// 						</SplideSlide>
// 						<SplideSlide>
// 							{/* <ProjectCard /> */}
// 							<div className="box" style={boxStyle}>
// 								<h2>GROW</h2>
// 							</div>
// 						</SplideSlide>
// 					</Splide>
