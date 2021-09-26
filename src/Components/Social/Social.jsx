import React from "react";
import Linkedin from "../../svg/linkedin.svg";
import LinkedinWhite from "../../svg/linkedinWhite.svg";
import Instagram from "../../svg/instagram.svg";
import InstagramWhite from "../../svg/instaWhite.svg";
import Logo from "../../svg/m.svg";
import LogoWhite from "../../svg/mWhite.svg";
import Socials from "./styled";

const Social = ({ primary = true }) => {
  return (
    <Socials>
      <li>
        <a href="/#" target="_blank">
          <img src={primary ? Logo : LogoWhite} alt="" />
        </a>
      </li>

      <li>
        <a href="/#" target="_blank">
        <img src={primary ? Linkedin : LinkedinWhite } alt="" />
        </a>
      </li>

      <li>
        <a href="/#" target="_blank">
        <img src={primary ? Instagram : InstagramWhite } alt="" />
        </a>
      </li>
    </Socials>
  );
};

export default Social;
