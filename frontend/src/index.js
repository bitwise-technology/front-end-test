import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const token = "931218e4775c658c1e9501186f7d4f9fba6b2352";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${token}`,
  },
  cache: new InMemoryCache()
});




ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
