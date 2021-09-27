import React, { useState } from "react";

import searchIcon from "../../svg/search-icon.svg";
import githubIcon from "../../svg/github-icon.svg";
import { useNavigate } from "react-router";

import { InputWrapper, SearchIcon, SearchButton } from "./styled";

const InputHero = ({ primary = true, userName, updateUserName }) => {
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  return (
    <InputWrapper isPrimary={primary}>
      <SearchIcon className="search">
        <img src={searchIcon} alt="" />
      </SearchIcon>
      <input
        type="text"
        placeholder="Buscar usuário"
        value={primary ? username : userName}
        onChange={({ currentTarget }) =>
          primary
            ? setUsername(currentTarget.value)
            : updateUserName(currentTarget.value)
        }
      />
      {primary && (
        <SearchButton
          onClick={() => {
            updateUserName(username);
            navigate("/Dashboard");
          }}
        >
          <img src={githubIcon} alt="Octocat do GitHub" />
        </SearchButton>
      )}
    </InputWrapper>
  );
};

export default InputHero;
