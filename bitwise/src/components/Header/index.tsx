import React from 'react'

import {ReactComponent as BitwiseLogo} from '../../assets/bitwiseLogo.svg'

import './style.scss'

const Header = () => {
    return (
        <header className='header'>
            <BitwiseLogo className='header__brand'/>
        </header>
    )
}

export default Header
