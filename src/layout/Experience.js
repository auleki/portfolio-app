import React from 'react';
import { SectionWrap, Title } from '../components/StyledComponents';

const Experience = () => {
	return (
		<SectionWrap>
			<div className="experience">
				<div className="education">
					<section>
						<div className="row">
							<span className="time">June 2011</span>
							<span className="type">IGCSE</span>
						</div>
						<span className="instituite">Jsay Prevarsity</span>
					</section>
					<section>
						<div className="row">
							<span className="time">June 2017</span>
							<span className="type">SSCE Certificate</span>
						</div>
						<span className="instituite">Excellent Brain Secondary School</span>
					</section>
					<section>
						<div className="row">
							<span className="time">July 2019</span>
							<span className="type">Diploma in Science</span>
						</div>
						<span className="instituite">University of Lagos</span>
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
							<li>Designed the UI for all the pages and created a prototype with Figma.</li>
							<li>
								Utilized React to build the application frontend and used Express on Nodejs to engineer
								the backend.
							</li>
							<li>Configured a server, setup and connected a NOSQL database.</li>
							<li>Built hook components which were reused in various parts of the app.</li>
							<li>Styled the application with Styled Components library.</li>
							<li>
								Designed and developed the REST API upon which the client side communicates with the
								backend.
							</li>
							<li>Leveraged Redux Toolkit to manage application’s global state.</li>
							<li>Integrated a payment gateway to accept customer payments.</li>
							<li>Added a quiz section with user authentication.</li>
						</ul>
					</section>
					<section>
						<span className="time">Aug 2020 - Nov 2020</span>
						<span className="position">Lead Frontend Engineer</span>
						<span className="company">Primeclick Digital Marketing Agency</span>
						<ul className="work-experience">
							<li>
								Developed several static pages and web applications for clients using either WordPress
								or custom code, which was based on the client's choice.
							</li>
							<li>
								On-boarded new clients with actionable steps vital in achieving their business needs
								through us.
							</li>
							<li>
								Collaborated with the UI designer to implement an exact replica of his designs as code
								for dynamic web applications or static sites.
							</li>
							<li>
								Worked in an agile environment where I coordinated with Digital Marketers, Account
								Managers and other Software Developers.
							</li>
							<li>
								Assisted my colleagues with code related issues, as a lot of our tools revolved around
								the coding ecosystem.
							</li>
							<li>Coordinated developments of outsourced projects.</li>
						</ul>
					</section>
					<section>
						<span className="time">Aug 2020 - Nov 2020</span>
						<span className="position">Frontend Engineer</span>
						<span className="company">HNG Internship</span>
						<ul className="work-experience">
							<li>Out of 13,000 applicants from Africa, I graduated as one of the 256 finalists.</li>
							<li>
								Gathered and documented Software Requirements Specifications (SRS) for assigned
								projects.
							</li>
							<li>
								Provided technical input during planning, design, scoping, estimating and requirements
								gathering.
							</li>
							<li>
								Confirmed project requirements by reviewing program objective, input data, and output
								requirements with analyst, supervisor, and client.
							</li>
							<li>Brainstorm, concept, and collaborate with UX Team to come up with style guidelines.</li>
							<li>
								Provided constructive feedback on colleague's pull while accepting theirs in return.
							</li>
						</ul>
					</section>
					<section>
						<span className="time">Aug 2020 - Nov 2020</span>
						<span className="position">Frontend Engineer</span>
						<span className="company">Cutstruct Technologies</span>
						<ul className="work-experience">
							<li>Designed the UI for our Panic mobile application</li>
							<li>Translated the UI designs accurately to code.</li>
							<li>Updated and maintained the code base of our products.</li>
							<li>Worked closely with my team to deliver new features ahead of deadlines.</li>
						</ul>
					</section>
				</div>
			</div>
		</SectionWrap>
	);
};

export default Experience;
