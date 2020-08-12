import React, { useState, Fragment } from 'react'
import { graphql } from 'react-apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Logo from '../img/Logo.png'
import ImgApp from '../img/img-app-6.png'
import ImgBack from '../img/Polygon.png'
import { RiSearchLine, RiGithubLine, RiInstagramLine, RiLinkedinBoxLine, RiMediumLine, RiHome2Line } from "react-icons/ri";
import * as S from './styled'

const getRepositories = gql`
query GetRepositories {
    user($login: String!) {
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
const MyRepositoryComponent = () => {
  const { loading, error, data } = useQuery(getRepositories, {
    variables: {
      login: 'usuario' 
    },
  });

  if (loading) {
    return console.log("calma ae")
  }
  if (error) {
    return console.log(erro)
  }

  if (data) {
    const { user } = data;
    return 
      console.log(user.name)
};

function Home(props) {

  const [usuario, setUsuario] = useState('')
  function hadlePesquisa() {
    console.log(usuario)
  }
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
          <S.Input placeholder="Buscar usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)} ></S.Input>
          <RiSearchLine size={30} />
          <S.Button type="button" onClick={hadlePesquisa}><RiGithubLine size={30} /></S.Button>
        </div>
        <S.ImgApp src={ImgApp} alt="imagem bonitinha "></S.ImgApp>
        <S.DivIcon>
          <RiMediumLine size={30} />
          <RiLinkedinBoxLine size={30} />
          <RiInstagramLine size={30} />
        </S.DivIcon>
      </S.Container>
    </Fragment>
  )

}

export default graphql(getRepositories, { name: 'repos' } )(Home)
