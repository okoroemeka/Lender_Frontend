import React from 'react';
import { Router } from '@reach/router';
import Signup from './component/signup';
import Login from './component/login';
import Header from './component/header/header';

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Signup path="/signup" />
      <Login path="/login" />
    </Router>
  </div>
);

export default App;
