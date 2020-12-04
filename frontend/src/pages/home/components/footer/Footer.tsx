import React from "react";

import { FooterContainer } from "./FooterStyles";

import { ReactComponent as MediumIcon } from "../../../../assets/medium_icon.svg";
import { ReactComponent as LinkedinAndInstagramIcons } from "../../../../assets/linkedin_and_insta_icons.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <a href='https://medium.com/@bitwisetechnology' target="_blank"><MediumIcon /></a> 
      <a href='https://www.instagram.com/bitwisetechnology/' target="_blank">
        {" "}
        <LinkedinAndInstagramIcons />
      </a>
    </FooterContainer>
  );
};

export default Footer;
