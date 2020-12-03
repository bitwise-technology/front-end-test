import React from 'react'

import {ReactComponent as BitwiseLogo} from '../../../../assets/bitwise_logo.svg';

import {StyledHeader} from './HeaderStyles';

const Header = () => {
    return (
        <StyledHeader>
        <BitwiseLogo />
    </StyledHeader>
    )
}

export default Header
