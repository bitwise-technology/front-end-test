import React from 'react'
import FooterMain from '../FooterMain/FooterMain'
import Hero from '../Hero/Hero'
import Logo from '../Logo/Logo'
import ContainerSection from './styled'

export const Container = () => {
  return (
    <React.Fragment>
      <ContainerSection>
          <Logo />
          <Hero/>
          <FooterMain />
      </ContainerSection>
    </React.Fragment>
  )
}

export default Container
