import React from 'react';
import { FooterStyle, Paragraph, SpanText } from './StyledComponents';
import { colors, fonts } from '../utils/constants';

const Footer = () => {
	return (
		<FooterStyle>
			<div className="text">
				<Paragraph font={fonts.crazy} color={colors.hardDark}>
					Created by Emmanuel B. Giwa with
				</Paragraph>
				<SpanText size={2} color={colors.red} marginX={0.5}>
					<ion-icon name="heart" />
				</SpanText>
			</div>
		</FooterStyle>
	);
};

export default Footer;
