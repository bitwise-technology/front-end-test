import React from 'react';
import {GlobalStyle} from './GlobalStyles';
import SearchPage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
            <GlobalStyle />

      <SearchPage></SearchPage>
    </div>
  );
}

export default App;
