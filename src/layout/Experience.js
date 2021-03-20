import React from 'react';
import { SectionWrap, Title, SubTitle } from '../components/StyledComponents';
import iNext from '../assets/fast-forward.svg';

const Experience = () => {
	// const flameIcon =
	// 	'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1615391254/247meals/animat-campfire-color_gcrdyr.gif';
	const flameIcon = iNext;
	return (
		<SectionWrap>
			<div className="experience">
				<div className="sectionTitle">
					<div className="dash" />
					<SubTitle size={3}>Education & Experience</SubTitle>
				</div>
				<div className="education">
					<section>
						<div className="qualification">
							<div className="timeline">
								<span className="time">June '11</span>
								<span className="institute">Jsay Prevarsity</span>
							</div>
							<div className="certificate">
								<span className="type">IGCSE</span>
								<ion-icon name="school" />
							</div>
						</div>
					</section>
					<section>
						<div className="qualification">
							<div className="timeline">
								<span className="time">June '17</span>
								<span className="institute">Excellent Brain High</span>
							</div>
							<div className="certificate">
								<span className="type">SSCE Certificate</span>
								<ion-icon name="school" />
							</div>
						</div>
					</section>
					<section>
						<div className="qualification">
							<div className="timeline">
								<span className="time">July '19</span>
								<span className="institute">University of Lagos</span>
							</div>
							<div className="certificate">
								<span className="type">Diploma in Science</span>
								<ion-icon name="school" />
							</div>
						</div>
					</section>
				</div>
				<div className="work">
					<section>
						<div className="row">
							<span className="time">Aug 2020 - Nov 2020</span>
							<span className="position">Fullstack Developer</span>
						</div>
						<span className="company">Checkadigs Online Store</span>
						<ul className="work-experience">
							<li>
								<img src={flameIcon} alt="" srcset="" />
								<ion-icon name="arrow-dropright" />
								<p>Designed the UI for all the pages and created a prototype with Figma.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>
									Utilized React to build the application frontend and used Express on Nodejs to
									engineer the backend.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>Configured a server, setup and connected a NOSQL database.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>Built hook components which were reused in various parts of the app.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>Styled the application with Styled Components library.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>
									Designed and developed the REST API upon which the client side communicates with the
									backend.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>Leveraged Redux Toolkit to manage application’s global state.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>Integrated a payment gateway to accept customer payments.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<ion-icon name="arrow-dropright" />
								<p>Added a quiz section with user authentication.</p>
							</li>
						</ul>
					</section>
					<section>
						<div className="row">
							<span className="time">Aug 2020 - Nov 2020</span>
							<span className="position">Lead Frontend Engineer</span>
						</div>
						<span className="company">Primeclick Digital Marketing</span>
						<ul className="work-experience">
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Developed several static pages and web applications for clients using either
									WordPress or custom code, which was based on the client's choice.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									On-boarded new clients with actionable steps vital in achieving their business needs
									through us.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Collaborated with the UI designer to implement an exact replica of his designs as
									code for dynamic web applications or static sites.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Worked in an agile environment where I coordinated with Digital Marketers, Account
									Managers and other Software Developers.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<p>
									Assisted my colleagues with code related issues, as a lot of our tools revolved
									around the coding ecosystem.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>Coordinated developments of outsourced projects.</p>
							</li>
						</ul>
					</section>
					<section>
						<div className="row">
							<span className="time">Aug 2020 - Nov 2020</span>
							<span className="position">Frontend Engineer</span>
						</div>
						<span className="company">HNG Internship</span>
						<ul className="work-experience">
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>Out of 13,000 applicants from Africa, I graduated as one of the 256 finalists.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Gathered and documented Software Requirements Specifications (SRS) for assigned
									projects.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Provided technical input during planning, design, scoping, estimating and
									requirements gathering.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Confirmed project requirements by reviewing program objective, input data, and
									output requirements with analyst, supervisor, and client.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Brainstorm, concept, and collaborate with UX Team to come up with style guidelines.
								</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								{/* <ion-icon name="arrow-dropright" /> */}
								<p>
									Provided constructive feedback on colleague's pull while accepting theirs in return.
								</p>
							</li>
						</ul>
					</section>
					{/* <section>
						<div className="row">
							<span className="time">Aug 2020 - Nov 2020</span>
							<span className="position">Frontend Engineer</span>
						</div>
						<span className="company">Cutstruct Technologies</span>
						<ul className="work-experience">
							<li>
								<img src={flameIcon} alt="" />
								<p>Designed the UI for our Panic mobile application</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<p>Translated the UI designs accurately to code.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<p>Updated and maintained the code base of our products.</p>
							</li>
							<li>
								<img src={flameIcon} alt="" />
								<p>Worked closely with my team to deliver new features ahead of deadlines.</p>
							</li>
						</ul>
					</section> */}
				</div>
			</div>
		</SectionWrap>
	);
};

export default Experience;
