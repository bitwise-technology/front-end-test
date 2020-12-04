import React, { useContext, useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client";

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

import { GET_USER_INFO } from "../../../../graphql/queries";
import { Context as AlertContext } from "../../../../contexts/AlertContext";
import { UserContext } from "../../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import NearbyNames from "../nearby_names/NearbyNames";

const SearchContainer = () => {
  const history = useHistory();

  const { setUser } = useContext(UserContext);

  const { setShowAlert } = useContext(AlertContext);

  const [userToFetchFromGithub, setuserToFetchFromGithub] = useState("");
  const [getUserInfo, { data, error: userNotFound }] = useLazyQuery(
    GET_USER_INFO
  );


  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const user = input.value;

    setuserToFetchFromGithub(user);
  };

  useEffect(() => {
    if (userNotFound) {
      setShowAlert && setShowAlert(true);
    }
  }, [userNotFound, setShowAlert]);

  useEffect(() => {
    if (setUser && data) {
      setUser(data.user);
      history.push("/search");
    }
  }, [data, setUser, history]);

  

  const fetchUser = (user: String = userToFetchFromGithub) => {
    getUserInfo({
      variables: {
        user: user,
      },
    });
  };

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
        <GithubIconContainer onClick={() => fetchUser()}>
          <GithubIcon />
        </GithubIconContainer>
      </InputContainer>

      <NearbyNames fetchUser={fetchUser} nameToSearchNearbies={userToFetchFromGithub}/>
    
    </StyledSearchContainer>
  );
};

export default SearchContainer;
