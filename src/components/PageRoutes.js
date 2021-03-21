import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../layout/About';
import Contact from '../layout/Contact';
import Experience from '../layout/Experience';
import RecentProjects from '../layout/RecentProjects';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
const PageRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/projects" component={Projects} />
			<Route path="/experience" component={Experience} />
			<Route path="/top-projects" component={RecentProjects} />
			<Route path="/contact" component={Contact} />
			{/* <Route path="/about" component={About} /> */}
			<Route component={NotFound} />
		</Switch>
	);
};

export default PageRoutes;
