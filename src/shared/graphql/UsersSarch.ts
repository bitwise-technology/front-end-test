import { gql } from '@apollo/client'

export const USERS_SEARCH = gql`
  query USERS_SEARCH($first: Int!, $query: String!, $after: String) {
    search(type: USER, first: $first, query: $query, after: $after ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on User {
          login
          name
          avatarUrl
          bio
        }
      }
    }
  }
`
