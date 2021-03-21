import React, { useState, useEffect } from 'react';
import { Button, Paragraph, SectionWrap, SubTitle, Title, DotIndicator } from '../components/StyledComponents';
import iLinkedIn from '../assets/linkedin.svg';
import iTwitter from '../assets/twitter.svg';
import iWhatsApp from '../assets/whatsapp.svg';
import iInstagram from '../assets/instagram.svg';
import iGithub from '../assets/github-sign.svg';
import iEnvelope from '../assets/envelope.svg';

const Contact = () => {
	const [ fName, setFName ] = useState('');
	const [ lName, setLName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ canActivate, setCanActivate ] = useState(false);

	useEffect(
		() => {
			const checkActivate = () => {
				if (fName && lName && email && message) {
					setCanActivate(true);
				} else {
					setCanActivate(false);
				}
			};
			checkActivate();
		},
		[ fName, lName, email, message ]
	);

	const resetField = () => {
		setFName('');
		setLName('');
		setEmail('');
		setMessage('');
	};

	const activateHermes = async (e) => {
		e.preventDefault();
		const load = { fName, lName, email, message };
		resetField();
		console.log('Message Sent');
		console.table(load);
	};

	return (
		<SectionWrap>
			<div className="contact">
				<div className="sectionTitle">
					<div className="dash" />
					<SubTitle size={3}>To Contact Me</SubTitle>
				</div>

				<div className="contactSection">
					<div className="form">
						<form onSubmit={activateHermes}>
							<div className="indicatorArea">
								<DotIndicator canActivate={canActivate} />
								<Paragraph>
									{canActivate ? 'All fields are a go, send your message' : 'Fill all fields'}
								</Paragraph>
							</div>

							<div className="row">
								<div className="input_group">
									<label htmlFor="firstName">First Name</label>
									<input
										type="text"
										autoComplete="false"
										placeholder="John"
										value={fName}
										onChange={(e) => setFName(e.target.value)}
									/>
								</div>
								<div className="input_group">
									<label htmlFor="lastName">Last Name</label>
									<input
										type="text"
										autoComplete="false"
										placeholder="Doe"
										value={lName}
										onChange={(e) => setLName(e.target.value)}
									/>
								</div>
							</div>
							<div className="input_group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									autoComplete="false"
									placeholder="johndoe@aol.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="input_group">
								<label htmlFor="lastName">Message</label>
								<textarea
									placeholder="Hi Emmanuel, I'd like to discuss..."
									rows="5"
									onChange={(e) => setMessage(e.target.value)}
									value={message}
								/>
							</div>
							<div className="input_group">
								<Button canActivate={canActivate} size={1}>
									<span>Send A Message</span>
									<ion-icon name="chatbubbles" />
								</Button>
							</div>
						</form>
					</div>

					<div className="or">
						<Title size={5}>OR</Title>
					</div>

					<div className="socialLinks">
						<Paragraph size={1.3} white marginY="1em">
							Reach me on any of the following platforms
						</Paragraph>
						<div className="links">
							<section>
								<a href="http://linkedin.com/in/aukoda" target="_blank" rel="noreferrer noopener">
									<img src={iLinkedIn} alt="" />
									<SubTitle>LinkedIN</SubTitle>
								</a>
							</section>
							<section>
								<a href="http://twitter.com/emmagiwa_" target="_blank" rel="noreferrer noopener">
									<img src={iTwitter} alt="" />
									<SubTitle>Twitter</SubTitle>
								</a>
							</section>
							<section>
								<a href="http://twitter.com/emmagiwa_" target="_blank" rel="noreferrer noopener">
									<img src={iWhatsApp} alt="" />
									<SubTitle>WhatsApp</SubTitle>
								</a>
							</section>
							<section>
								<a href="http://linkedin.com/in/aukoda" target="_blank" rel="noreferrer noopener">
									<img src={iEnvelope} alt="" />
									<SubTitle>Email</SubTitle>
								</a>
							</section>
							<section>
								<a href="http://linkedin.com/in/aukoda" target="_blank" rel="noreferrer noopener">
									<img src={iInstagram} alt="" />
									<SubTitle>Instagram</SubTitle>
								</a>
							</section>
							<section>
								<a href="http://linkedin.com/in/aukoda" target="_blank" rel="noreferrer noopener">
									<img src={iGithub} alt="" />
									<SubTitle>Github</SubTitle>
								</a>
							</section>
							{/* <Paragraph>EMAIL</Paragraph>
							<Paragraph>LINKEDIN</Paragraph> */}
						</div>
					</div>
				</div>
			</div>
		</SectionWrap>
	);
};

export default Contact;
