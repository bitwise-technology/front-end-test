import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import Api from '../../services/api'

import Logo from '../../assets/image/Logo.svg'
import Footer from '../../components/Footer/footer'
import Sociais from '../../assets/image/Sociais.svg'
import './styled.css'

function Repositories() {
    // const history = useHistory()
    const [repositories, setRepositories] = useState([])

    // Api.get()

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName)
            console.log(repositoriesName)
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
            <Link className='btn_back' to="/">Voltar</Link>
                <h2 className='title'>Titulo</h2>
            <div className='wrapper'>
            <div className='list'>
                <h3>Nome do repositório</h3>
                {repositories.map(repository=> {
                    return (
                        <>
                        <div className='repository_name'>{repository}</div>
                        </>
                    )
                })}
            </div>

            <div className='list'>
                <h3>Qtd de commit</h3>
                {repositories.map(repository=> {
                    return (
                        <>
                        <div className='repository_name'>{repository}</div>
                        </>
                    )
                })}
            </div>

            <div className='list'>
                <h3>Msg Ultimo commit</h3>
                {repositories.map(repository=> {
                    return (
                        <>
                        <div className='repository_name'>{repository}</div>
                        </>
                    )
                })}
            </div>

            <div className='list'>
                <h3>hash do ultimo commit</h3>
                {repositories.map(repository=> {
                    return (
                        <>
                        <div className='repository_name'>{repository}</div>
                        </>
                    )
                })}
            </div>
            </div>
            <Footer/>        
    </>
    )
}

export default Repositories