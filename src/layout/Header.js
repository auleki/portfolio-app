import React from 'react';
import { HeaderWrap, PageWrap, Paragraph, Row, SubTitle, Title } from '../components/StyledComponents';

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
					<Paragraph white>Twitter</Paragraph>
					<Paragraph white>Github</Paragraph>
					<Paragraph white>LinkedIn</Paragraph>
				</Row>
			</div>
		</HeaderWrap>
	);
};

export default Header;
