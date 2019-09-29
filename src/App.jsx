import React from 'react';
import { Router } from '@reach/router';
import Signup from './component/signup';
import Header from './component/header/header';

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Signup path="/signup" />
    </Router>
  </div>
);

export default App;
