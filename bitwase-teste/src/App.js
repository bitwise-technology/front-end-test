import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from './services/apollo'
import Home from './Pages/Home/index'
import Routes from './routes'

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
          <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
