import React from "react";
import Container from "../../Components/Container/Container";
import Logo from "../../Components/Logo/Logo";
import Background from "../../Components/Background/Background";
import Hero from "../../Components/Hero/Hero";
import FooterMain from "../../Components/FooterMain/FooterMain";
import logoSvg from "../../svg/Logo.svg";

const Main = ({ userName, updateUserName }) => {
  return (
    <>
      <Logo src={logoSvg} />
      <Background />
      <Container>
        <Hero userName={userName} updateUserName={updateUserName} />
        <FooterMain />
      </Container>
    </>
  );
};

export default Main;
