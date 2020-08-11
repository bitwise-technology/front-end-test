import React, { Component, Fragment } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Logo from '../img/Logo.png'
import ImgApp from '../img/img-app-6.png'
import { RiSearchLine, RiGithubLine, RiInstagramLine, RiLinkedinBoxLine, RiMediumLine } from "react-icons/ri";

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

class handlePesquisa extends Component {
    render() {
        console.log(this.props)

        return(
        <Fragment>
            <div>
                <img src={ Logo } alt="logo da Bitwase"></img>
            </div>
            <div>
                <h1>Buscar um usuário no Github ficou muito fácil!</h1>
                <input placeholder="Buscar usuário"></input>
                <RiSearchLine />
                <button><RiGithubLine /></button>
            </div>
                <img src={ ImgApp } alt="imagem bonitinha "></img>
            <div>
                <RiMediumLine />
                <RiLinkedinBoxLine />
                <RiInstagramLine />
            </div>
        </Fragment>
        )
    }
}

export default graphql(getRepositories, {name: 'repositories'})(handlePesquisa)
