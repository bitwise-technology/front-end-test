import React from 'react'
import Polygon from '../../svg/Polygon 1.svg'
import Backgroundimage from './styled'

const Background = () => {
  const descricao= 'Aqui é um background'
  return (
    <React.Fragment>
      <Backgroundimage>
        <img src={Polygon} alt={descricao} />
      </Backgroundimage>
    </React.Fragment>
  )
}

export default Background
