import React from "react";

import {
  PageContainer,
  StyledBackgroundImage,
  StyledPeopleWorkingImage,
} from "./HomePageStyles";

import PurpleBackground from "../../assets/purple_background.png";
import PeopleWorkingImage from "../../assets/people_working.png";

import Header from "./components/header/HomeHeader";
import SearchContainer from "./components/search_container/HomeSearchContainer";
import Footer from "./components/footer/HomeFooter";


const Home = () => {

  return (
    <PageContainer>

      <StyledBackgroundImage src={PurpleBackground} alt='Purple Background' />
      <StyledPeopleWorkingImage src={PeopleWorkingImage} alt='People Working' />

      <Header />

      <SearchContainer />

      <Footer />
    </PageContainer>
  );
};

export default Home;
