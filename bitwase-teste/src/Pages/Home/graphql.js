import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'


const getRepositories = gql`
query GetRepositories {
    user(login: "LoPhine") {
      name
      login
      avatarUrl
  
      repositories(first: 10) {
        totalCount
        nodes {
          name
          ref(qualifiedName: "master") {
            target {
              ... on Commit {
                message
                commitResourcePath
                history(first: 0) {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
`

class MyRepositories extends Component {
    render() {
        console.log(this.props)
        return(
            null
        )
    }
}

export default graphql(getRepositories, { name: 'repos' })(MyRepositories)