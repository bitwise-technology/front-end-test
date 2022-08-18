import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import UserRepo from './pages/UserRepo';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={UserRepo} />
    </BrowserRouter>
  );
};

export default Routes;
