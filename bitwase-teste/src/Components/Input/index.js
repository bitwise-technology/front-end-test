import React, { useState } from 'react'
import { RiSearchLine, RiGithubLine } from "react-icons/ri";
import * as Z from './style' 

export default function Input(props){

    const [usuario, setUsuario] = useState('')
    function hadlePesquisa() {
      console.log(usuario)
    }
    return(
        <>
          <Z.InputContainer>
            <Z.Icon><RiSearchLine size={30} /></Z.Icon>
            <Z.Input placeholder="Buscar usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)} ></Z.Input>
            <Z.Button type="button" onClick={hadlePesquisa}><RiGithubLine size={30} /></Z.Button>
          </Z.InputContainer>
        </>      
    )
}