import React from "react";
import InputHero from "../InputHero/InputHero";
import logosvg from "../../svg/Logo.svg";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import Header from "./styled";

const HeaderDashboard = ({ userName, updateUserName }) => {
  return (
    <Header>
      <Logo src={logosvg} />
      <InputHero
        primary={false}
        userName={userName}
        updateUserName={updateUserName}
      />
      <Social />
    </Header>
  );
};

export default HeaderDashboard;
