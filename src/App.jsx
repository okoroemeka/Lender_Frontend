import React from 'react';
import { Router, Match } from '@reach/router';
import Signup from './component/signup';
import Login from './component/login';
import Header from './component/header/header';
import Landing from './component/landing';
import Protected from './component/hoc/protect';

const App = () => (
  <div className="container">
    <Match path="/">{({ match }) => !match && <Header />}</Match>
    <Router>
      <Landing path="/" />
      <Signup path="/signup" />
      <Login path="/login" />
      <Protected path="/dashboard" />
    </Router>
  </div>
);

export default App;
