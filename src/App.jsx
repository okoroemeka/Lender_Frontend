import React from 'react';
import { Router } from '@reach/router';
import Signup from './component/signup';
import Login from './component/login';
import Header from './component/header/header';
import Protected from './component/hoc/protect';

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Signup path="/signup" />
      <Login path="/login" />
      <Protected path="/dashboard" />
    </Router>
  </div>
);

export default App;
