import React from "react";

import { LogoWrapper } from "./styled";

const Logo = ({ src }) => {
  const descricaoLogo = "Bitwise Tecnology";
  return (
    <LogoWrapper to="/">
      <img src={src} alt={descricaoLogo} />
    </LogoWrapper>
  );
};

export default Logo;
