import React, { useContext } from "react";
import { GlobalStyle } from "./GlobalStyles";

import { Switch, Route, Redirect } from "react-router-dom";

import { Context } from "./contexts/UserContext";

import Home from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";

function App() {
  const { user } = useContext(Context);
  console.log(user);
  return (
      <div className='App'>
        <GlobalStyle />
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
