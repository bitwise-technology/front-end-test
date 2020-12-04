import React, { useContext, useState } from "react";
import { GlobalStyle } from "./GlobalStyles";

import { Switch, Route, Redirect } from "react-router-dom";

import { Context } from "./contexts/UserContext";

import Home from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import Alert from "./components/alert/Alert";

function App() {
  const { user } = useContext(Context);
  return (
      <div className='App'>
        <GlobalStyle />
        <Alert />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/search'
            render={() => (user ? <SearchPage /> : <Redirect to='/' />)}
          />
        </Switch>
      </div>
  );
}

export default App;
