import React, { useContext } from "react";

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
import { Context } from "../../contexts/AlertContext";

const Alert = () => {

    const {showAlert, setShowAlert , text} = useContext(Context);

    const closeAlert = () => {
        setShowAlert && setShowAlert(false);
    }

    console.log(showAlert);
  return (
    showAlert ? <AlertContainer>
      <AlertTitle>{text}</AlertTitle>
      <AlertCloseButton onClick={closeAlert}>x</AlertCloseButton>

      <AlertFooter>
        <AlertSubtitle>
          Enquanto isso, acompanhe a Bitwise nas redes sociais:
        </AlertSubtitle>
        <SocialMedia>
          <MediumIcon />
          <LinkedinAndInstagramIcons />
        </SocialMedia>
      </AlertFooter>
    </AlertContainer> : null
  );
};

export default Alert;
