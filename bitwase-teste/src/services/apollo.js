import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http'

const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql'
})

const client = new ApolloClient({
  uri: httpLink,
  headers: {
    Authorization: `Bearer aee818cd1fe5b308035a716a792b41e132f5d96d`,
  },
  cache: new InMemoryCache()
});

export default client
