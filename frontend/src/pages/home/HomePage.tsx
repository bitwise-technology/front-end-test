import React from 'react';

import {EmphasizedText, InputContainer, SearchContainer, SearchContainerText, GithubIconContainer, StyledInput, StyledSearchIcon, PageContainer, FooterContainer, StyledBackgroundImage, StyledPeopleWorkingImage} from './HomePageStyles';

import {ReactComponent as GithubIcon} from '../../assets/github_icon.svg';
import {ReactComponent as MediumIcon} from '../../assets/medium_icon.svg';
import {ReactComponent as LinkedinAndInstagramIcons} from '../../assets/linkedin_and_insta_icons.svg';

import PurpleBackground from '../../assets/purple_background.png';
import PeopleWorkingImage from '../../assets/people_working.png';
import Header from './components/header/Header';



const SearchPage = () => {
    return (
        <PageContainer>

            <StyledBackgroundImage src={PurpleBackground} alt="Purple Background"/>
            <StyledPeopleWorkingImage src={PeopleWorkingImage} alt="People Working"/>

            <Header />

            <SearchContainer>
                <SearchContainerText>
                Buscar um usuário no <EmphasizedText>Github</EmphasizedText><br /> 
ficou muito <EmphasizedText>fácil!</EmphasizedText>
                </SearchContainerText>

                <InputContainer>
                    <StyledSearchIcon />
                    <StyledInput type='text' name='search' id='search' placeholder='Buscar usuário'></StyledInput>
                    <GithubIconContainer>
                        <GithubIcon />
                    </GithubIconContainer>
                </InputContainer>

            </SearchContainer>
            
            <FooterContainer>
                <MediumIcon />
                <LinkedinAndInstagramIcons />
            </FooterContainer>

        </PageContainer>
    )
}

export default SearchPage
