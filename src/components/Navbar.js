import { Link } from 'react-router-dom';
import { NavStyle } from './StyledComponents';

const Navbar = () => {
	return (
		<NavStyle>
			<ul className="navigation">
				<Link to="/">
					<li>
						<ion-icon name="home-outline" />
						<span>HOME</span>
					</li>
				</Link>
				<Link to="/projects">
					<li>
						<ion-icon name="terminal-outline" />
						<span>PROJECTS</span>
					</li>
				</Link>
				<Link to="/experience">
					<li>
						<ion-icon name="bulb-outline" />
						<span>EXPERIENCE</span>
					</li>
				</Link>
				<Link to="/contact">
					<li>
						<ion-icon name="phone-portrait-outline" />
						<span>CONTACT</span>
					</li>
				</Link>
				<Link to="/about">
					<li>
						<ion-icon name="finger-print-outline" />
						<span>ABOUT ME</span>
					</li>
				</Link>
			</ul>
		</NavStyle>
	);
};

export default Navbar;
