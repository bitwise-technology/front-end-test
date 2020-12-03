import React, { useEffect, useState } from "react";

import { gql, useLazyQuery } from "@apollo/client";

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
  query GetNearbyUserNames($name: String!) {
    search(type: USER, first: 3, query: $name) {
      nodes {
        ... on User {
          login
        }
      }
    }
  }
`;

export const GET_USER_INFO = gql`
	query GetGithubUserInfo($user: String!) {
		user(login: $user) {
			name
			avatarUrl
			repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
				totalCount
				edges {
					node {
						name
						ref(qualifiedName: "master") {
							target {
								... on Commit {
									history(first: 1) {
										totalCount
										nodes {
											message
											abbreviatedOid
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`; 

const SearchContainer = () => {
  const [userToSearch, setUserToSearch] = useState("");
  const [getUserInfo , {data : userInfo }] = useLazyQuery(GET_USER_INFO);
  const [getNearbyUserNames, { data : nearbyNames }] = useLazyQuery(GET_NEARBY_NAMES);

  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const user = input.value;

    setUserToSearch(user);
  };

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
      {nearbyNames && (
        <NearbyNames>
          {nearbyNames?.search?.nodes?.map(({login}: {login : string}) => (
            <span  key={login} onClick={() => fetchUser(login)}>{login}</span>
          ))}
        </NearbyNames>
      )}
    </StyledSearchContainer>
  );
};

export default SearchContainer;
