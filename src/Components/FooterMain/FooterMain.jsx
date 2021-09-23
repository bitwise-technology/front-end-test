import React from 'react'
import Vetor1 from '../../svg/Group 1.svg'
import Vetor2 from '../../svg/Group 2.svg'
import Vetor3 from '../../svg/Group 3.svg'
import Footermain from './styled'

const FooterMain = () => {
  return (
    <React.Fragment>
      <Footermain>
        <img src={Vetor3} alt="" />
        <img src={Vetor1} alt="" />
        <img src={Vetor2} alt="" />
      </Footermain>
    </React.Fragment>
  )
}

export default FooterMain
