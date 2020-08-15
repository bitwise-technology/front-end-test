import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
	headers: {
		authorization: 'Bearer 750360835f5f8b2cbe0f11142a618d5f39e74315',
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
				<UserProvider>
					<App />
				</UserProvider>
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
