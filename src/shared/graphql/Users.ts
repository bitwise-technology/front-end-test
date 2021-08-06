import { gql } from '@apollo/client'

export const USERS = gql`
  query USERS($first: Int!, $query: String!, $after: String) {
    search(type: USER, first: $first, query: $query, after: $after ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on User {
          login
          name
        }
      }
    }
  }
`
