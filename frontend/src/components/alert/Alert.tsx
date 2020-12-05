import React, { useContext } from "react";

import { AlertContext } from "../../contexts/AlertContext";


import { ReactComponent as MediumIcon } from "../../assets/icons/medium_icon.svg";
import { ReactComponent as LinkedinAndInstagramIcons } from "../../assets/icons/linkedin_and_insta_icons.svg";

import {
  AlertCloseButton,
  AlertContainer,
  AlertFooter,
  AlertSubtitle,
  AlertTitle,
  SocialMediaContainer,
} from "./AlertStyles";

const Alert = () => {
  const { showAlert, setShowAlert, text } = useContext(AlertContext);

  const closeAlert = () => {
    setShowAlert && setShowAlert(false);
  };

  return showAlert ? (
    <AlertContainer>
      <AlertTitle>{text}</AlertTitle>
      <AlertCloseButton onClick={closeAlert}>x</AlertCloseButton>

      <AlertFooter>
        <AlertSubtitle>
          Enquanto isso, acompanhe a Bitwise nas redes sociais:
        </AlertSubtitle>
        <SocialMediaContainer>
          <MediumIcon />
          <LinkedinAndInstagramIcons />
        </SocialMediaContainer>
      </AlertFooter>
    </AlertContainer>
  ) : null;
};

export default Alert;
