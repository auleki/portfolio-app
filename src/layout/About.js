import React from 'react';
import { Paragraph, Row, SkillCard, SectionWrap, SubTitle, Title, SkillsSection } from '../components/StyledComponents';
import { Link } from 'react-router-dom';
import iNodeJs from '../assets/nodejs.svg';
import iReact from '../assets/react-icon.svg';
import iMobile from '../assets/flutter.svg';
import iNinja from '../assets/ninja.svg';
import lReact from '../assets/react-logo.svg';
import lCSS from '../assets/css3.svg';
import lGithub from '../assets/github-sign.svg';
import lJS from '../assets/js-logo.png';
import lHTML from '../assets/html5.svg';
import lRedux from '../assets/redux.svg';
import lPython from '../assets/python-logo.png';
import lMongoDb from '../assets/mongodb.png';
import lGraphql from '../assets/graphql.svg';
import { motion } from 'framer-motion';

const About = () => {
	const variants = {
		hidden: { x: -100 },
		visible: { x: 0 }
	};

	return (
		<SectionWrap>
			{/* <Title>About Page</Title> */}
			{/* <div className="sectionTitle ml-2">
				<div className="dash" />
				<SubTitle size={3}>About Me</SubTitle>
			</div> */}
			<Row
				justifyContent="center"
				// initial="hidden"
				// animation="visible"
				// initial={{ x: 100 }}
				// animate={{ x: 0 }/}/
				// transition={{ ease: 'easeOut', duration: 4 }}
				alignItems="center"
			>
				<div className="aboutSection">
					<motion.div
						className="projectCards"
						initial={{ x: -1000 }}
						animate={{ x: 0 }}
						transition={{ ease: 'easeOut', duration: 1, type: 'spring', stiffness: 500 }}
					>
						<SkillCard>
							<div className="row">
								<SubTitle secondary>Frontend Projects</SubTitle>
								<img src={iReact} alt="" srcset="" />
							</div>
							<Link to="/projects">6 Projects</Link>
						</SkillCard>
						<SkillCard>
							<div className="row">
								<SubTitle secondary>Backend Projects</SubTitle>
								<img src={iNodeJs} alt="" srcset="" />
							</div>
							<Link to="/projects">25 Projects</Link>
						</SkillCard>
						<SkillCard>
							<div className="row">
								<SubTitle secondary>Fullstack Projects</SubTitle>
								<img src={iNinja} alt="" srcset="" />
							</div>
							<Link to="/projects">3 Projects</Link>
						</SkillCard>
						<SkillCard>
							<div className="row">
								<SubTitle secondary>Mobile Projects</SubTitle>
								<img src={iMobile} alt="" />
							</div>
							<Link to="/projects">3 Projects</Link>
						</SkillCard>
					</motion.div>
					<motion.div
						className="bio"
						initial={{ x: 1000 }}
						animate={{ x: 0 }}
						transition={{ ease: 'easeOut', duration: 1 }}
					>
						<div className="mb-3">
							<SubTitle color="#737373" size={0.9}>
								Introduction
							</SubTitle>
						</div>
						<div className="mb-3">
							<Title>
								Hi there! <span className="mobileBlock">I'm Emmanuel Giwa</span>{' '}
							</Title>
						</div>
						<div className="mb quote">
							<SubTitle size={1.4}>Marched from a UI/UX designer to Fullstack</SubTitle>
						</div>

						<div className="mb-3">
							<Paragraph marginY={4} color="#737373">
								Started out building UIs with Figma, but I wasn’t satisfied with my overall output so I
								pushed further into web development and grew into a Fullstack. I believe myself to be a
								bridge between design and engineering, for I bring an engineer’s pattern thinking to
								systemizing designs, and a designer’s eye for fit, style and an amazing user experience.
								Developing elegant solutions to complex problems is one of my passions. I am seeking
								more professional and personal satisfaction and would like to join a fast growing
								company with a purpose where I can see the difference my work is making. Also getting a
								mentor to groom me for leadership roles would also be a great plus.
							</Paragraph>
						</div>

						<div className="skills">
							<SubTitle color="#737373" size={0.9}>
								Skills
							</SubTitle>
							<SkillsSection>
								<div class="skill">
									<img src={lHTML} alt="" />
									<SubTitle>HTML %</SubTitle>
								</div>
								<div class="skill">
									<img src={lCSS} alt="" />
									<SubTitle>CSS 3</SubTitle>
								</div>
								<div class="skill">
									<img src={lJS} alt="" />
									<SubTitle>React</SubTitle>
								</div>
								<div class="skill">
									<img src={lPython} alt="" />
									<SubTitle>Python</SubTitle>
								</div>
								<div class="skill">
									<img src={lRedux} alt="" />
									<SubTitle>Redux</SubTitle>
								</div>
								<div class="skill">
									<img src={lGraphql} alt="" />
									<SubTitle>Graph QL</SubTitle>
								</div>
								<div class="skill">
									<img src={lGithub} alt="" />
									<SubTitle>Github</SubTitle>
								</div>
								<div class="skill">
									<img src={lMongoDb} alt="" />
									<SubTitle>Mongo DB</SubTitle>
								</div>

								<div className="section-tip">
									<Row>
										<p>Scroll to see more</p> <ion-icon name="arrow-forward" />
									</Row>
								</div>
							</SkillsSection>
						</div>
					</motion.div>
				</div>
			</Row>
		</SectionWrap>
	);
};

export default About;
