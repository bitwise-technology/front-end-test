import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BitwiseLogo } from "../../../../assets/icons/bitwise_logo.svg";

import { UserContext } from "../../../../contexts/UserContext";
import { AlertContext } from "../../../../contexts/AlertContext";

import { useIsMount } from "../../../../custom_hooks/useIsMount";

import SocialMedia from "../../../../components/social_media/SocialMedia";

import {
  HeaderContainer,
  InputContainer,
  MediaIconsContainer,
  StyledSearchIcon,
} from "./SearchHeaderStyles";
import CustomInput from "../../../../components/custom_input/CustomInput";

const SearchHeader = () => {
  const [userToFetchFromGithub, setUserToFetchFromGithub] = useState("");
  const provider = useContext(UserContext);
  const { setAlertText, setShowAlert } = useContext(AlertContext);

  const isMount = useIsMount();

  useEffect(() => {
    if (provider.user?.repositories.totalCount === 0) {
      setAlertText && setAlertText("O usuário não possui repositórios");
      setShowAlert && setShowAlert(true);
    }
  }, [provider, setAlertText, setShowAlert]);

  useEffect(() => {
    if (isMount) {
      if (!provider.wasUserFetchedSuccesfully) {
        setAlertText && setAlertText("Nenhum usuário encontrado!");
        setShowAlert && setShowAlert(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, setShowAlert, setAlertText]);

  return (
    <HeaderContainer>
      <Link to='/'>
        <BitwiseLogo />
      </Link>
      <InputContainer>
        <StyledSearchIcon />
        <CustomInput
          style={{ padding: "12px 0", paddingLeft: "55px", width: "100%" } as CSSStyleDeclaration}
          type='text'
          name='search'
          id='search'
          placeholder='Buscar usuário'
          userToFetchFromGithub={userToFetchFromGithub}
          setUserToFetchFromGithub={setUserToFetchFromGithub}
          fetchUser={provider.fetchUser}
        ></CustomInput>
      </InputContainer>
      <MediaIconsContainer>
        <SocialMedia />
      </MediaIconsContainer>
    </HeaderContainer>
  );
};

export default SearchHeader;
