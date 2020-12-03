import React from "react";

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

const SearchContainer = () => {
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
        ></StyledInput>
        <GithubIconContainer>
          <GithubIcon />
        </GithubIconContainer>
      </InputContainer>
    </StyledSearchContainer>
  );
};

export default SearchContainer;
