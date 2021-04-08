import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../layout/About'
import Contact from '../layout/Contact'
import Experience from '../layout/Experience'
import RecentProjects from '../layout/RecentProjects'
import Homepage from '../pages/Homepage'
import NotFound from '../pages/NotFound'
// import { AppStyle } from './StyledComponents';
// import Projects from '../pages/Projects';
// import Footer from './Footer';
// import Navbar from './Navbar';
const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/projects' component={RecentProjects} />
      <Route path='/experience' component={Experience} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default PageRoutes
