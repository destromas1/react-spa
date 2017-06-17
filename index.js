import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import {Router , Route } from 'react-router';

import App from './App/Components/App.jsx';
import Profile from './App/Components/Profile.jsx';
import Contact from './App/Components/Contact.jsx';
import Error from './App/Components/404.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="/profile" component={Profile}/>
        <Route path="/contact" component={Contact}/>
        <Route path="*" component={Error}/>
    </Route>
  </Router>
  , document.getElementById('app')
);
