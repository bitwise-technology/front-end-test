import React from 'react';

import { PageContainer, FooterContainer, StyledBackgroundImage, StyledPeopleWorkingImage} from './HomePageStyles';

import {ReactComponent as MediumIcon} from '../../assets/medium_icon.svg';
import {ReactComponent as LinkedinAndInstagramIcons} from '../../assets/linkedin_and_insta_icons.svg';

import PurpleBackground from '../../assets/purple_background.png';
import PeopleWorkingImage from '../../assets/people_working.png';

import Header from './components/header/Header';
import SearchContainer from './components/search_container/SearchContainer';



const Home = () => {
    return (
        <PageContainer>

            <StyledBackgroundImage src={PurpleBackground} alt="Purple Background"/>
            <StyledPeopleWorkingImage src={PeopleWorkingImage} alt="People Working"/>

            <Header />

           <SearchContainer />
            
            <FooterContainer>
                <MediumIcon />
                <LinkedinAndInstagramIcons />
            </FooterContainer>

        </PageContainer>
    )
}

export default Home
