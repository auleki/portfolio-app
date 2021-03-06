import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
const PageRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/projects" component={Projects} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default PageRoutes;
