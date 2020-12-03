import styled from 'styled-components';

import {ReactComponent as SearchIcon} from '../../assets/search_icon.svg';


export const PageContainer = styled.div`
    padding-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    max-height: 100vh; 
    background: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
`;

export const StyledBackgroundImage = styled.img`
    position: absolute;
    right: 0;
    top: 0;
`;

export const StyledPeopleWorkingImage = styled.img`
    position: absolute;
    right: 154px;
    top: 164px;
    z-index: 1;
`;

export const Header = styled.header`
    margin-top: 60px;
`;


export const SearchContainer = styled.section`
    margin-top: 141px;

`;

export const SearchContainerText = styled.p`
    font-weight: 300;
    font-size: 42px;
    width: 540px;
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
`;

export const Footer = styled.footer`

`;

export const EmphasizedText = styled.strong`
    color: #5A3D5C;
    font-weight: bold;
`;

export const FooterContainer = styled.footer`
    margin-top: 219px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:41px;
`;