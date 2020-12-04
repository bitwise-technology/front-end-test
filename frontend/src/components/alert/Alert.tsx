import React from "react";

import { ReactComponent as MediumIcon } from "../../assets/medium_icon.svg";
import { ReactComponent as LinkedinAndInstagramIcons } from "../../assets/linkedin_and_insta_icons.svg";
import {
  AlertCloseButton,
  AlertContainer,
  AlertFooter,
  AlertSubtitle,
  AlertTitle,
  SocialMedia,
} from "./AlertStyles";

const Alert = () => {
  return (
    <AlertContainer>
      <AlertTitle>Nenhum usuário encontrado!</AlertTitle>
      <AlertCloseButton>x</AlertCloseButton>

      <AlertFooter>
        <AlertSubtitle>
          Enquanto isso, acompanhe a Bitwise nas redes sociais:
        </AlertSubtitle>
        <SocialMedia>
          <MediumIcon />
          <LinkedinAndInstagramIcons />
        </SocialMedia>
      </AlertFooter>
    </AlertContainer>
  );
};

export default Alert;
