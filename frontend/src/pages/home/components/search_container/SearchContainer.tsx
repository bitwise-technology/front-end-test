import React, { useContext, useEffect, useState } from "react";

import { ReactComponent as GithubIcon } from "../../../../assets/github_icon.svg";

import {
  EmphasizedText,
  InputContainer,
  StyledSearchContainer,
  SearchContainerText,
  GithubIconContainer,
  StyledInput,
  StyledSearchIcon,
} from "./SearchContainerStyles";

import { UserContext } from "../../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import NearbyNames from "../nearby_names/NearbyNames";
import { Context } from "../../../../contexts/AlertContext";
import { useIsMount } from "../../../../custom_hooks/useIsMount";

const SearchContainer = () => {
  const history = useHistory();

  const provider = useContext(UserContext);
  const { setText, setShowAlert } = useContext(Context);

  const [userToFetchFromGithub, setUserToFetchFromGithub] = useState("");

  //To not need to put it in the Dependecy Array of useEffect
  const isMount = (useIsMount() as unknown) as React.Ref<boolean>;
  
  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const user = input.value;

    setUserToFetchFromGithub(user);
  };

  const handleClick = (event: React.MouseEvent) => {
    provider.fetchUser && provider.fetchUser(userToFetchFromGithub);
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
