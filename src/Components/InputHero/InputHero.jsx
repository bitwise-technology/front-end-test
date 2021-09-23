import React from 'react'
import Input from './styled'

const InputHero = () => {
  return (
    <React.Fragment>
      <Input>
      <span className="search"><i class="uil uil-search"></i></span>
      <input type="text" placeholder="Buscar usuário" />
      <button><i class="uil uil-github-alt"></i></button>
      </Input>
    </React.Fragment>
  )
}

export default InputHero
