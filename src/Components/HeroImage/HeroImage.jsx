import React from 'react'
import HeroImg from '../../svg/Hero-img.svg'
import Heroimg from './styled'

const HeroImage = () => {
  return (
    <React.Fragment>
      <Heroimg  src={HeroImg}/>
    </React.Fragment>
  )
}

export default HeroImage
