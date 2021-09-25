import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FiSearch } from 'react-icons/fi'

import Logo from '../../assets/image/Logo.svg'
import Sociais from '../../assets/image/Sociais.svg'
import './styled.css'

function Repositories() {
    const history = useHistory()
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName)
            localStorage.clear()
        // }else {
        //     history.push('/')
        }
    }, [])

    return (
        <>
        <header>
            <img src={Logo} alt="logo" />
            <input type="text" 
            placeholder='Buscar usuário'
            >
            </input>
            <img src={Sociais} alt="Sociais" />
            <FiSearch className='icon_search'/>
        </header>
            <div className='list'>
                {repositories.map(repository => {
                    return (
                        <div>{repository}</div>
                    )
                })}
            </div>
        </>
    )
}

export default Repositories