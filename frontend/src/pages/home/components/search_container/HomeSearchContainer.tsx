import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as GithubIcon } from "../../../../assets/github_icon.svg";

import { UserContext } from "../../../../contexts/UserContext";
import { Context } from "../../../../contexts/AlertContext";

import { useIsMount } from "../../../../custom_hooks/useIsMount";

import NearbyNames from "../../../../components/nearby_names/NearbyNames";

import {
  EmphasizedText,
  InputContainer,
  StyledSearchContainer,
  SearchContainerText,
  GithubIconContainer,
  StyledInput,
  StyledSearchIcon,
} from "./HomeSearchContainerStyles";

const SearchContainer = () => {
  const history = useHistory();

  const provider = useContext(UserContext);
  const { setText, setShowAlert } = useContext(Context);

  const [userToFetchFromGithub, setUserToFetchFromGithub] = useState("");

  const isMount = useIsMount();

  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const user = input.value;

    setUserToFetchFromGithub(user);
  };

  const handleClick = (event: React.MouseEvent) => {
    provider.fetchUser && provider.fetchUser(userToFetchFromGithub);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      provider.fetchUser && provider.fetchUser(userToFetchFromGithub);
    }
  };

  useEffect(() => {
    if (isMount) {
      if (provider.wasUserFetchedSuccesfully) {
        history.push("/search");
      } else {
        setText && setText("Nenhum usuário encontrado!");
        setShowAlert && setShowAlert(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, history, setShowAlert, setText]);

  return (
    <StyledSearchContainer>
      <SearchContainerText>
        Buscar um usuário no <EmphasizedText>Github</EmphasizedText>
        <br />
        ficou muito <EmphasizedText>fácil!</EmphasizedText>
      </SearchContainerText>

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
        <GithubIconContainer onClick={handleClick}>
          <GithubIcon />
        </GithubIconContainer>
      </InputContainer>

      <NearbyNames
        fetchUser={provider.fetchUser}
        nameToSearchNearbies={userToFetchFromGithub}
      />
    </StyledSearchContainer>
  );
};

export default SearchContainer;
