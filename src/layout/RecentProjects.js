import React from 'react';
import { Button, Paragraph, StyleProjectCard, SectionWrap, SubTitle } from '../components/StyledComponents';
import NeumorphismImgPath from './../assets/neumorphism.jpg';
import GridExampleImgPath from '../assets/grid-example.jpg';
import Covid19ImgPath from '../assets/covid-19-tracker.jpg';

const ProjectCard = () => {
	return (
		<StyleProjectCard>
			<div className="image">
				<img src={Covid19ImgPath} alt="" />
			</div>
			<div className="info">
				<div className="text">
					<SubTitle>Covid 19 Tracker</SubTitle>
					<Paragraph white marginY="1em">
						Fetched data from a COVID 19 API. Created a card component to represent the data alongside a bar
						chart
					</Paragraph>
				</div>
				<div className="actions">
					<Button>
						<span>Demo Preview</span>
						<ion-icon name="link-outline" />
					</Button>
					<Button primary>
						<span>Preview Code</span>
						<ion-icon name="git-branch-outline" />
					</Button>
				</div>
			</div>
		</StyleProjectCard>
	);
};

const RecentProjects = () => {
	return (
		<SectionWrap justifyContent="center" alignItems="center">
			{/* UNDER STYLEPROJECTCARD  */}
			<div className="recentProjects">
				<div className="sectionTitle">
					<div className="dash" />
					<SubTitle size={3}>Recent Projects</SubTitle>
				</div>
				<div className="projects">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</SectionWrap>
	);
};

export default RecentProjects;
