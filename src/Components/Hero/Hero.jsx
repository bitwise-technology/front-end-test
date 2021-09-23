import React from 'react'
import HeroImage from '../HeroImage/HeroImage'
import TituloHero from '../TituloHero/TituloHero'
import InputHero from '../InputHero/InputHero'
import HeroSection from './styled'

const Hero = () => {
  return (
    <React.Fragment>
      <HeroSection>
        <TituloHero />
        <HeroImage />
       <InputHero />
      </HeroSection>
    </React.Fragment>
  )
}

export default Hero
