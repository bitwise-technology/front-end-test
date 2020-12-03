import React from 'react';
import {GlobalStyle} from './GlobalStyles';
import Home from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
            <GlobalStyle />

      <Home />
    </div>
  );
}

export default App;
