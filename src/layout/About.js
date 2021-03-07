import React from 'react';
import { Paragraph, Row, SCards, SectionWrap, SubTitle, Title } from '../components/StyledComponents';

const About = () => {
	return (
		<SectionWrap>
			{/* <Title>About Page</Title> */}
			<Row justifyContent="center">
				<div className="projectCards">
					<SCards>
						<SubTitle secondary>Card Active</SubTitle>
						<Paragraph>HEY</Paragraph>
					</SCards>
				</div>
				<div className="bio">
					<SubTitle size={0.8}>Introduction</SubTitle>
					<Title>Hi there! I'm Emmanuel Giwa</Title>

					<SubTitle size={1.4}>Marched from a UI/UX designer to Fullstack</SubTitle>
					<Paragraph color="#737373">
						Started out building UIs with Figma, but I wasn’t satisfied with my overall output so I pushed
						further into web development and grew into a Fullstack. I believe myself to be a bridge between
						design and engineering, for I bring an engineer’s pattern thinking to systemizing designs, and a
						designer’s eye for fit, style and an amazing user experience. Developing elegant solutions to
						complex problems is one of my passions. I am seeking more professional and personal satisfaction
						and would like to join a fast growing company with a purpose where I can see the difference my
						work is making. Also getting a mentor to groom me for leadership roles would also be a great
						plus.
					</Paragraph>
				</div>
			</Row>
		</SectionWrap>
	);
};

export default About;
