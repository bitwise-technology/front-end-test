import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

client.query({query : gql`
  query GetGithubUserInfo($user : String!) {
    user(login:$user){ 
      name
      avatarUrl
      repositories(first: 10 , orderBy:{field:CREATED_AT , direction:DESC}){
        totalCount
        edges{
          node{
            name
            ref(qualifiedName:"master") {
              target {
                ... on Commit {
                  history(first: 1){
                    totalCount
                    nodes {
                      message
                      abbreviatedOid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
` ,
variables : {
  user : "5"
}} ).then((response) => {
  console.log(response)
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
