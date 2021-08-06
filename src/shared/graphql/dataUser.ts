import { gql } from '@apollo/client'

export const DATA_USER = gql`
  query DATA_USER($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      login
      id
      repositories(first: 5, privacy: PUBLIC) {
        totalCount
      }
    }
  }
`
