import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../../../assets/search_icon.svg";

export const HeaderContainer = styled.header`
  padding-left: 150px;
  padding-right: 191px;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1366px) {
    padding-left: 40px;
    padding-right: 40px;
    justify-content: space-between;
  }

  @media screen and (max-width: 992px) {
    padding-top: 20px;
    padding-left: 0;
    padding-right: 0;
    justify-content: space-around;
    height: 20vh;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 20px;
    flex-direction: column;

    height: 25vh;
  }

  
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 3px 4px var(--secondary-color);
  width: 491px;
  position: relative;

  @media screen and (max-width: 700px) {
    margin: 20px 0; 
  }
`;

export const StyledInput = styled.input`
  border: none;
  padding: 12px 0;
  padding-left: 55px;
  width: 100%;
  outline: none;
  display: inline-block;
  font-size: 16px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 19px;
  transform: translateY(-50%);
`;

export const MediaIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > :first-child {
    margin-right: 11px;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
