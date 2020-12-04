import React, { useContext, useEffect, useRef, useState } from "react";

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

const SearchContainer = () => {
  const history = useHistory();

  const provider = useContext(UserContext);
  const { setText, setShowAlert } = useContext(Context);

  const [userToFetchFromGithub, setUserToFetchFromGithub] = useState("");

  const didMount = useRef(false);

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
    if (didMount.current) {
      if (provider.wasUserFetchedSuccesfully) {
        history.push("/search");
      } else {
        setText && setText("Nenhum usuário encontrado!");
        setShowAlert && setShowAlert(true);
      }
    }else {
      didMount.current = true;
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
        fetchUser={handleClick}
        nameToSearchNearbies={userToFetchFromGithub}
      />
    </StyledSearchContainer>
  );
};

export default SearchContainer;
