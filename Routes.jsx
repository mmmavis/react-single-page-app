import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './pages/index.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About} />
  </Route>
);

