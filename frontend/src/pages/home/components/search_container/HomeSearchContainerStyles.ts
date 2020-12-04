
import styled from 'styled-components';

import {ReactComponent as SearchIcon} from '../../../../assets/search_icon.svg';


export const StyledSearchContainer = styled.section`
    margin-top: 141px;
    max-width: 563px;
    @media screen and (max-width: 1366px) {
        max-width: 400px;
    }

`;

export const SearchContainerText = styled.p`
    font-weight: 300;
    font-size: 42px;
    max-width: 540px;
    color: var(--secondary-color);
    

`;


export const InputContainer = styled.div`
    display: flex;
    max-width: 563px;
    background-color: #fff;
    position: relative;
    box-shadow: 1px 1px 4px #000;
    margin-top: 87px;
    border-radius: 4px;

    
    @media screen and (max-width: 1366px) {
    }

`;

export const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    top: 50%;
    left: 22.4px;
    transform: translateY(-50%);
`;


export const StyledInput = styled.input`
    width: 90%;
    display: inline-block;
    height: 56px;
    font-size: 16px;
    border: none;
    outline: none;
    padding-left: 64px;
`;



export const GithubIconContainer = styled.div`
    background-color: #5A3D5C;
    height: 59px;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;


export const EmphasizedText = styled.strong`
    color: #5A3D5C;
    font-weight: bold;
`;