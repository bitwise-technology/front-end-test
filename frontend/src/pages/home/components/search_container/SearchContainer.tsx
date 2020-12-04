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
  NearbyNames,
} from "./SearchContainerStyles";

import { GET_NEARBY_NAMES, GET_USER_INFO } from "../../../../graphql/queries";
import { Context } from "../../../../contexts/UserContext";
import { useHistory } from "react-router-dom";





const SearchContainer = () => {

  const history = useHistory();

  const {setUser} = useContext(Context);

  const [userToSearch, setUserToSearch] = useState("");
  const [getUserInfo , {data }] = useLazyQuery(GET_USER_INFO);
  const [getNearbyUserNames, { data : nearbyNames }] = useLazyQuery(GET_NEARBY_NAMES);

  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const user = input.value;

    setUserToSearch(user);
  };

  useEffect(() => {
    if(setUser && data) {
      setUser(data.user);
      history.push('/search');
    }
  } , [data , setUser, history])

  useEffect(() => {
    if (userToSearch.length) {
      console.log(userToSearch);
      getNearbyUserNames({
        variables: {
          name: userToSearch,
        },
      });
    }
  }, [userToSearch, getNearbyUserNames]);

  const fetchUser = (user: String = userToSearch) => {
    getUserInfo({
      variables: {
        user: user
      }
    })
  }

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
          value={userToSearch}
          onChange={handleInputChange}
        ></StyledInput>
        <GithubIconContainer onClick={() => fetchUser()}>
          <GithubIcon />
        </GithubIconContainer>
      </InputContainer>

        <NearbyNames>
          {nearbyNames?.search?.nodes?.map(({login}: {login : string}) => (
            <span  key={login} onClick={() => fetchUser(login)}>{login}</span>
          ))}
        </NearbyNames>
    </StyledSearchContainer>
  );
};

export default SearchContainer;
