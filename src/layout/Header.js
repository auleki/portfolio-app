import React from 'react';
import { Button, HeaderWrap, PageWrap, Paragraph, Row, SubTitle, Title } from '../components/StyledComponents';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
		'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1615938112/portfolio/wlq63cWy_400x400_nxotw0.jpg';

	return (
		<HeaderWrap>
			<div className="content">
				<motion.div
					className="avatar"
					initial={{ opacity: 0.4 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2, ease: 'easeInOut' }}
				>
					<img src={avatarImg} alt="avatar" />
				</motion.div>
				<motion.div
					className="title"
					initial={{ x: 100 }}
					animate={{ x: 0 }}
					transition={{ ease: 'easeOut', duration: 2, type: 'spring', stiffness: 1000 }}
				>
					<Title marginY=".5em" crazyFont>
						Emmanuel B. Giwa
					</Title>
					<SubTitle>Fullstack Developer</SubTitle>
				</motion.div>
				<Row justifyContent="center">
					{/* <a href="https://github.com/auleki" target="_blank" rel="noreferrer noopener"> */}
					{/* <Paragraph white>Twitter</Paragraph> */}
					<motion.div
						className="headerSocialLinks"
						initial={{ y: '100vh' }}
						animate={{ y: 0 }}
						transition={{ ease: 'easeOut', duration: 0.5, type: 'spring', stiffness: 200 }}
					>
						<div className="socialLink">
							<a href="http://twitter.com/emmagiwa_" target="_blank" rel="noopener noreferrer">
								<img
									src="https://res.cloudinary.com/dyj6pqx6d/image/upload/v1615936679/portfolio/icons8-twitter-256_rjq0us.png"
									alt=""
									srcset=""
								/>
								<Paragraph white>Twitter</Paragraph>
							</a>
						</div>
						<div className="socialLink">
							<a href="http://linkedin.com/in/aukoda" target="_blank" rel="noopener noreferrer">
								<img
									src="https://res.cloudinary.com/dyj6pqx6d/image/upload/v1615936681/portfolio/icons8-linkedin-256_ievhg9.png"
									alt=""
									srcset=""
								/>
								<Paragraph white>LinkedIn</Paragraph>
							</a>
						</div>
						<div className="socialLink">
							<a href="http://github.com/auleki" target="_blank" rel="noopener noreferrer">
								<img
									src="https://res.cloudinary.com/dyj6pqx6d/image/upload/v1615936680/portfolio/github_h5u4av.png"
									alt=""
									srcset=""
								/>
								<Paragraph white>Github</Paragraph>
							</a>
						</div>
					</motion.div>
				</Row>
			</div>
		</HeaderWrap>
	);
};

export default Header;
