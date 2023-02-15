import { Repository } from '@/types'
import { gql } from '@apollo/client'
import client from '..'

const query = gql`
  query ($login: String!) {
    user(login: $login) {
      repositories(first: 100, ownerAffiliations: [OWNER], orderBy: { field: UPDATED_AT, direction: DESC }) {
        edges {
          node {
            name
            updatedAt
            ref(qualifiedName: "master") {
              target {
                ... on Commit {
                  history(first: 1) {
                    edges {
                      node {
                        messageHeadline
                        oid
                      }
                    }
                  }
                }
              }
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export async function getReposOfUser(login?: string): Promise<Repository[]> {
  const res = await client.query({
    query,
    variables: {
      login,
    },
  })

  const repositories: Repository[] = res.data.user.repositories.edges.map((edge: any) => {
    return {
      name: edge.node.name,
      lastCommitMessage: edge.node.ref ? edge.node.ref.target.history.edges[0].node.messageHeadline : '',
      lastCommitHash: edge.node.ref ? edge.node.ref.target.history.edges[0].node.oid : '',
      commitsCount: edge.node.defaultBranchRef ? edge.node.defaultBranchRef.target.history.totalCount : '',
    }
  })

  return repositories
}
