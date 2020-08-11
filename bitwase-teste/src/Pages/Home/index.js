import React, { useState, Fragment } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Logo from '../img/Logo.png'
import ImgApp from '../img/img-app-6.png'
import ImgBack from '../img/Polygon.png'
import { RiSearchLine, RiGithubLine, RiInstagramLine, RiLinkedinBoxLine, RiMediumLine } from "react-icons/ri";
import * as S from './styled'

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

function App(props) {

  const [usuario, setUsuario ] = useState('')
  return (
    <Fragment>
      <S.Container>
        <div>
          <S.ImgDiv src={ImgBack} alt="imagem do backgroud"></S.ImgDiv>
        </div>
        <div>
          <S.LogoBit src={Logo} alt="logo da Bitwase"></S.LogoBit>
        </div>
        <div>
          <S.Title>Buscar um usuário no <b>Github</b> ficou muito <b>fácil!</b></S.Title>
          <S.Input placeholder="Buscar usuário" className="usuarioInput" value={usuario} onChange={e => console.log(e.target.value)} ></S.Input>
          <RiSearchLine />
          <S.Button type="button"><RiGithubLine /></S.Button>
        </div>
        <S.ImgApp src={ImgApp} alt="imagem bonitinha "></S.ImgApp>
        <S.DivIcon>
          <RiMediumLine />
          <RiLinkedinBoxLine />
          <RiInstagramLine />
        </S.DivIcon>
      </S.Container>
    </Fragment>
  )

}

export default graphql(getRepositories, { name: 'repositories' })(App)
