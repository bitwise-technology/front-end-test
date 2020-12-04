import React, { useContext, useEffect, useState } from "react";

import { ReactComponent as BitwiseLogo } from "../../../../assets/bitwise_logo.svg";
import { ReactComponent as MediumIcon } from "../../../../assets/medium_icon.svg";
import { ReactComponent as LinkedinAndInstagramIcons } from "../../../../assets/linkedin_and_insta_icons.svg";

import { UserContext } from "../../../../contexts/UserContext";

import {
  HeaderContainer,
  InputContainer,
  MediaIconsContainer,
  StyledInput,
  StyledSearchIcon,
} from "./SearchHeaderStyles";
import { Context } from "../../../../contexts/AlertContext";
import { useIsMount } from "../../../../custom_hooks/useIsMount";

const SearchHeader = () => {
  const [userToFetchFromGithub, setUserToFetchFromGithub] = useState("");
  const provider = useContext(UserContext);
  const { setText, setShowAlert } = useContext(Context);

  //To not need to put it in the Dependecy Array of useEffect
  const isMount = (useIsMount() as unknown) as React.Ref<boolean>;

  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const user = input.value;

    setUserToFetchFromGithub(user);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      provider.fetchUser && provider.fetchUser(userToFetchFromGithub);
    }
  };

  useEffect(() => {
    if (provider.user?.repositories.totalCount === 0) {
      setText && setText("O usuário não possui repositórios");
      setShowAlert && setShowAlert(true);
    }
  }, [provider, setText, setShowAlert]);

  useEffect(() => {
    if (isMount) {
      if (!provider.wasUserFetchedSuccesfully) {
        setText && setText("Nenhum usuário encontrado!");
        setShowAlert && setShowAlert(true);
      }
    }
  }, [provider, setShowAlert, setText, isMount]);

  return (
    <HeaderContainer>
      <BitwiseLogo />
      <InputContainer>
        <StyledSearchIcon />
        <StyledInput
          type='text'
          name='search'
          id='search'
          placeholder='Buscar usuário'
          autoComplete='off'
          value={userToFetchFromGithub}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></StyledInput>
      </InputContainer>
      <MediaIconsContainer>
        <a href='https://medium.com/@bitwisetechnology' target="_blank"><MediumIcon /></a> 
        <a href='https://www.instagram.com/bitwisetechnology/ target="_blank"'>
          {" "}
          <LinkedinAndInstagramIcons />
        </a>
      </MediaIconsContainer>
    </HeaderContainer>
  );
};

export default SearchHeader;
