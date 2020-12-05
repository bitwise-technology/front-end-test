import React from 'react'

import {ReactComponent as BitwiseLogo} from '../../../../assets/icons/bitwise_logo.svg';

import {StyledHeader} from './HomeHeaderStyles';

const HomeHeader = () => {
    return (
        <StyledHeader>
            <BitwiseLogo />
        </StyledHeader>
    )
}

export default HomeHeader
