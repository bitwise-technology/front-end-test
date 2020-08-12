import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from './services/apollo'
import Home from './Pages/Home/index'

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
          <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
