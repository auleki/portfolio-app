import React, { useState } from 'react';
import { Button, Paragraph, SectionWrap, SubTitle, Title } from '../components/StyledComponents';

const Contact = () => {
	const [ fName, setFName ] = useState('');
	const [ lName, setLName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	const activateHermes = async (e) => {
		e.preventDefault();
		const load = { fName, lName, email, message };
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
						<Paragraph size={1.3} white marginY="1em">
							Feel free to leave me a message
						</Paragraph>
						<form onSubmit={activateHermes}>
							<div className="row">
								<div className="input_group">
									<label htmlFor="firstName">First Name</label>
									<input
										type="text"
										placeholder="John"
										value={fName}
										onChange={(e) => setFName(e.target.value)}
									/>
								</div>
								<div className="input_group">
									<label htmlFor="lastName">Last Name</label>
									<input
										type="text"
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
								/>
							</div>
							<div className="input_group">
								<Button size={1}>
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
							<Paragraph>TWITTER</Paragraph>
							<Paragraph>EMAIL</Paragraph>
							<Paragraph>LINKEDIN</Paragraph>
						</div>
					</div>
				</div>
			</div>
		</SectionWrap>
	);
};

export default Contact;
