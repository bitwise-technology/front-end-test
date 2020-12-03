import React from "react";

import { ReactComponent as BitwiseLogo } from "../../../../assets/bitwise_logo.svg";
import { ReactComponent as MediumIcon } from "../../../../assets/medium_icon.svg";
import { ReactComponent as LinkedinAndInstagramIcons } from "../../../../assets/linkedin_and_insta_icons.svg";


import { HeaderContainer, InputContainer, MediaIconsContainer, StyledInput, StyledSearchIcon } from "./SearchHeaderStyles";


const Header = () => {
  return (
    <HeaderContainer>
      <BitwiseLogo />
      <InputContainer>
        <StyledSearchIcon />
        <StyledInput type='text' placeholder='Buscar Usuário' />
      </InputContainer>
      <MediaIconsContainer>
        <MediumIcon />
        <LinkedinAndInstagramIcons />
      </MediaIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
