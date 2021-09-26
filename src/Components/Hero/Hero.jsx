import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import TituloHero from "../TituloHero/TituloHero";
import InputHero from "../InputHero/InputHero";
import HeroSection from "./styled";

const Hero = ({ userName, updateUserName }) => {

  return (
    <>
      <HeroSection>
        <TituloHero />
        <HeroImage />
        <InputHero primary={true} userName={userName} updateUserName={updateUserName} />
      </HeroSection>
    </>
  );
};

export default Hero;
