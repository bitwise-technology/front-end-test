import React, { useEffect, useState } from "react";

import { gql, useLazyQuery, useQuery } from "@apollo/client";

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

const GET_NEARBY_NAMES = gql`
  query GetNearbyNames($name: String!) {
    search(type: USER, first: 3, query: $name) {
      nodes {
        ... on User {
          login
        }
      }
    }
  }
`;

const SearchContainer = () => {
  const [nameToSearch, setNameToSearch] = useState("");
  const [getNearbyNames, { data }] = useLazyQuery(GET_NEARBY_NAMES);

  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const name = input.value;

    setNameToSearch(name);
  };

  useEffect(() => {
    if (nameToSearch.length) {
      console.log(nameToSearch);
      getNearbyNames({
        variables: {
          name: nameToSearch,
        },
      });
    }
  }, [nameToSearch, getNearbyNames]);

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
          value={nameToSearch}
          onChange={handleInputChange}
        ></StyledInput>
        <GithubIconContainer>
          <GithubIcon />
        </GithubIconContainer>
      </InputContainer>
      {data && (
        <NearbyNames>
          {data?.search?.nodes?.map(({login}: {login : string}) => (
            <span key={login}>{login}</span>
          ))}
        </NearbyNames>
      )}
    </StyledSearchContainer>
  );
};

export default SearchContainer;
