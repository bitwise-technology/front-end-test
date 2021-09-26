import React from 'react'
import Polygon from '../../svg/Polygon1.svg'
import Backgroundimage from './styled'

const Background = () => {
  const descricao= 'Aqui é um background'
  return (
    <>
      <Backgroundimage>
        <img src={Polygon} alt={descricao} />
      </Backgroundimage>
    </>
  )
}

export default Background
