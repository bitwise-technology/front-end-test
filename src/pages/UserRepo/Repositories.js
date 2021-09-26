import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Api from '../../services/api'

import Logo from '../../assets/image/Logo.svg'
import Sociais from '../../assets/image/Sociais.svg'
import './styled.css'

function Repositories() {
    // const history = useHistory()
    const [repositories, setRepositories] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        if(repositoriesName != null) {
            /*repositoriesName = JSON.parse(repositoriesName)*/
            setRepositories(repositoriesName)
            localStorage.clear()
        // }else {
        //     history.push('/')
        }
    }, [])
   
    Api.get(`users/${repositories[0]}/repos`)
    .then((res) => {
        setUser(res.data);
    })  

    return (
        <>
        <header>
            <img src={Logo} alt="logo" />
            <input type="text" 
            placeholder='Buscar usuário' />
            <img src={Sociais} alt="Sociais" />
            <FiSearch className='icon_search'/>
        </header>
            <Link className='btn_back' to="/">Voltar</Link>
                <h2 className='title'>Titulo</h2>
            <div className='wrapper'>
            <div className='list'>
                <h3>Nome do repositório</h3>
                {user.map(repository=> {
                    return (
                        <div className='repository_name'>{repository.name}</div>
                    )
                })}
            </div>

            <div className='list'>
                <h3>Qtd de commit</h3>
                {user.map(repository=> {
                    return (
                        <div className='repository_name'><p>{repository.size}</p></div>
                    )
                })}
            </div>

            <div className='list'>
                <h3>Msg Ultimo commit</h3>
                {user.map(repository=> {
                    return (
                        
                        <div className='repository_name'>ola</div>
                        
                    )
                })}
            </div>

            <div className='list'>
                <h3>hash do ultimo commit</h3>
                {user.map(repository=> {
                    return (
                        <div className='repository_name'>gladson</div>
                    )
                })}
            </div>
            </div>
    </>
    )
}

export default Repositories