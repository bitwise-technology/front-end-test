import React from 'react'
import InputDash from './styled'

const InputDashboard = () => {
  return (
    <>
      <InputDash>
      <span><i className="uil uil-search"></i></span>
      <input type="text" placeholder="Buscar usuário" />
      </InputDash>
    </>
  )
}

export default InputDashboard
