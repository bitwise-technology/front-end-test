import React, { Fragment } from 'react'

import Logo from '../img/Logo.png'
import ImgApp from '../img/img-app-6.png'
import ImgBack from '../img/Polygon.png'

import Input from '../../Components/Input/index'
import SocialMidia from '../../Components/SocialMidia';

import MyRepositories from './graphql'

import * as S from './styled'



function Home(props) {


  return (
    <Fragment>
      <S.Container>
        <MyRepositories />
        <div>
          <S.ImgDiv src={ImgBack} alt="imagem do backgroud"></S.ImgDiv>
        </div>
        <div>
          <S.LogoBit src={Logo} alt="logo da Bitwise"></S.LogoBit>
        </div>
        <S.Title>Buscar um usuário no <b>Github</b> ficou muito <b>fácil!</b></S.Title>
        <Input />
        <S.ImgApp src={ImgApp} alt="imagem bonitinha "></S.ImgApp>
        <S.DivIcons>
          <SocialMidia />
        </S.DivIcons>
      </S.Container>
    </Fragment>
  )

}

export default Home
