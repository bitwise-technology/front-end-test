import { gql } from '@apollo/client'

export const DATA_REPOS = gql`
  query DATA_USER($login: String!, $after: String) {
    user(login: $login) {
      id
      repositories(first: 4, privacy: PUBLIC, after: $after) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          name
          object(expression: "master") {
            ... on Commit {
              history {
                totalCount
                nodes {
                  oid
                  messageHeadline
                }
              }
            }
          }
        }
      }
    }
  }
`
