import React from "react";
import { GlobalStyle } from "./GlobalStyles";

import {Switch , Route} from 'react-router-dom';

import Home from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home}/>  
        <Route path='/search' component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;
