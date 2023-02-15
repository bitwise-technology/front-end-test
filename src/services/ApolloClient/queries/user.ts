import { gql } from '@apollo/client'
import client from '..'

import { User } from '@/types'

const query = gql`
  query ($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      repositories(ownerAffiliations: [OWNER]) {
        totalCount
      }
    }
  }
`

export async function getUserData(login: string): Promise<User> {
  const res = await client.query({
    query,
    variables: {
      login,
    },
  })

  const user: User = {
    login: res.data.user.login,
    name: res.data.user.name,
    avatar_url: res.data.user.avatarUrl,
    repositoriesCount: res.data.user.repositories.totalCount,
  }

  return user
}
