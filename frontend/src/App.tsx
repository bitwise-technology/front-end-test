import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <SearchPage />
    </div>
  );
}

export default App;
