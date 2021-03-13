import React from 'react';
import { Button, HeaderWrap, PageWrap, Paragraph, Row, SubTitle, Title } from '../components/StyledComponents';
import { Link } from 'react-router-dom';

import UseAnimations from 'react-useanimations';
// import github from 'react-useanimations/lib/github';
// import linkedin from 'react-useanimations/lib/linkedin';
// import twitter from 'react-useanimations/lib/twitter';

const AnimationWrapper = ({ icon }) => {
	// console.log(animationProps);
	return <UseAnimations animationKey={icon} size={60} />;
};

const Header = () => {
	const avatarImg =
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YwnRJTWhyIsdh1XDN02JygHaFp%26pid%3DApi&f=1';

	return (
		<HeaderWrap>
			<div className="content">
				<div className="avatar">
					<img src={avatarImg} alt="avatar" />
				</div>
				<div className="title">
					<Title crazyFont>Emmanuel B. Giwa</Title>
					<SubTitle>Fullstack Developer</SubTitle>
				</div>
				<Row justifyContent="center">
					{/* <a href="https://github.com/auleki" target="_blank" rel="noreferrer noopener"> */}
					{/* <Paragraph white>Twitter</Paragraph> */}
					<div className="headerSocialLinks">
						{/* <AnimationWrapper icon="github" /> */}
						{/* <UseAnimations animationKey="bookmark" size={56} style={{ cursor: 'pointer', padding: 100 }} /> */}
					</div>
				</Row>
			</div>
		</HeaderWrap>
	);
};

export default Header;
