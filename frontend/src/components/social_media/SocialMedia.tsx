import React from "react";

import { ReactComponent as MediumIcon } from "../../assets/medium_icon.svg";
import { ReactComponent as LinkedinAndInstagramIcons } from "../../assets/linkedin_and_insta_icons.svg";


const SocialMedia = () => {
  return (
    <>
      <a href='https://medium.com/@bitwisetechnology' target='_blank' rel='noreferrer'>
        <MediumIcon />
      </a>
      <a href='https://www.instagram.com/bitwisetechnology/' target='_blank' rel='noreferrer'>
        {" "}
        <LinkedinAndInstagramIcons />
      </a>
    </>
  );
};

export default SocialMedia;
