import { gql } from 'apollo-boost';

export const GetUser = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      repositories(first: 10) {
        totalCount
        nodes {
          name
          defaultBranchRef {
            name
            target {
              ... on Commit {
                history(first: 1) {
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
`;