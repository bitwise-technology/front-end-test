import React, { useContext } from "react";

import { ReactComponent as MediumIcon } from "../../assets/medium_icon.svg";
import { ReactComponent as LinkedinAndInstagramIcons } from "../../assets/linkedin_and_insta_icons.svg";
import {
  AlertCloseButton,
  AlertContainer,
  AlertFooter,
  AlertSubtitle,
  AlertTitle,
  SocialMediaContainer,
} from "./AlertStyles";
import { Context } from "../../contexts/AlertContext";

const Alert = () => {
  const { showAlert, setShowAlert, text } = useContext(Context);

  const closeAlert = () => {
    setShowAlert && setShowAlert(false);
  };

  setTimeout(() => {
    setShowAlert && setShowAlert(false);
  }, 3 * 1000);
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
