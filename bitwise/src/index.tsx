import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
	headers: {
		authorization: 'Bearer 02d67a28bd40775c6f09e92041fe1a4186600cce',
	},
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: httpLink,
	cache,
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router>
				<App />
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
