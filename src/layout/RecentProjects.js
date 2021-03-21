import React, { useRef, useEffect } from 'react';
import { Button, Paragraph, StyleProjectCard, SectionWrap, SubTitle } from '../components/StyledComponents';
import NeumorphismImgPath from './../assets/neumorphism.jpg';
import GridExampleImgPath from '../assets/grid-example.jpg';
import Covid19ImgPath from '../assets/covid-19-tracker.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { recentProjects, fonts } from '../utils/constants';

const ProjectCard = ({ project }) => {
	return (
		<StyleProjectCard>
			<div className="image">
				<img src={project.imageUrl} alt="" />
			</div>
			<div className="info">
				<div className="text">
					<SubTitle>{project.title}</SubTitle>
					<Paragraph font={fonts.secondary} white marginY="1em">
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

	return (
		<SectionWrap justifyContent="center" alignItems="center">
			{/* UNDER STYLEPROJECTCARD  */}
			<div className="recentProjects">
				<div className="sectionTitle">
					<div className="dash" />
					<SubTitle size={3}>Recent Projects</SubTitle>
				</div>
				<div className="projects">
					{recentProjects.map((project, index) => <ProjectCard project={project} />)}
				</div>
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
