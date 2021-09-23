import React from 'react'
import logoSvg from '../../svg/Logo.svg'
import ImgLogo from './styled'

const Logo = () => {
  const descricaoLogo = 'Essa é a logo'
  return (
    <React.Fragment>
      <ImgLogo src={logoSvg} alt={descricaoLogo} />
    </React.Fragment>
  )
}

export default Logo
