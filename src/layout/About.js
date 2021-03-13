import React from 'react';
import { Paragraph, Row, SkillCard, SectionWrap, SubTitle, Title } from '../components/StyledComponents';

const About = () => {
	return (
		<SectionWrap>
			{/* <Title>About Page</Title> */}
			{/* <div className="sectionTitle ml-2">
				<div className="dash" />
				<SubTitle size={3}>About Me</SubTitle>
			</div> */}
			<Row justifyContent="center" alignItems="center">
				<div className="aboutSection">
					<div className="projectCards">
						<SkillCard>
							<SubTitle secondary>Frontend Projects</SubTitle>
							<Paragraph white>6 Projects</Paragraph>
						</SkillCard>
						<SkillCard>
							<SubTitle secondary>Backend Projects</SubTitle>
							<Paragraph white>25 Projects</Paragraph>
						</SkillCard>
						<SkillCard>
							<SubTitle secondary>Fullstack Projects</SubTitle>
							<Paragraph white>3 Projects</Paragraph>
						</SkillCard>
						<SkillCard>
							<SubTitle secondary>Mobile Projects</SubTitle>
							<Paragraph white>3 Projects</Paragraph>
						</SkillCard>
					</div>
					<div className="bio">
						<div className="mb-3">
							<SubTitle color="#737373" size={0.9}>
								Introduction
							</SubTitle>
						</div>
						<div className="mb-3">
							<Title>Hi there! I'm Emmanuel Giwa</Title>
						</div>
						<div className="mb">
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
						</div>
					</div>
				</div>
			</Row>
		</SectionWrap>
	);
};

export default About;
