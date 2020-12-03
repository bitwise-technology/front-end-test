import React from "react";

import {FooterContainer} from './FooterStyles';

import {ReactComponent as MediumIcon} from '../../../../assets/medium_icon.svg';
import {ReactComponent as LinkedinAndInstagramIcons} from '../../../../assets/linkedin_and_insta_icons.svg';


const Footer = () => {
  return (
    <FooterContainer>
      <MediumIcon />
      <LinkedinAndInstagramIcons />
    </FooterContainer>
  );
};

export default Footer;
