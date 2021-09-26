import React, { useState } from "react";
import Api from "../../services/api";
import { useHistory } from "react-router-dom";

import Git from "../../assets/image/git.svg";
import { FiSearch } from "react-icons/fi";
import Sociais from "../../assets/image/Sociais.svg";
import "./styled.css";

function Search() {
  const history = useHistory();
  const [user, setUser] = useState();
  const [error, setError] = useState(false);

  function submitGetUser() {
    Api.get(`users/${user}/repos`)
      .then((res) => {
        const repositories = res.data;
        const repositoriesName = [];

        repositories.map(() => {
          return repositoriesName.push(
            user
          );
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setError(false);
        history.push("./repositories");
      })

      .catch((err) => {
        setError(true);
      });
  }

  return (
    <div className="search_case">
      <input
        type="text"
        className="search"
        placeholder="Buscar usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <FiSearch className="search_icon" />
      <button className="git" type="subimit" onClick={submitGetUser}>
        <img className="git_img" src={Git} alt="" />
      </button>
      {error ? (
        <div className="alert">
          <h2>Nenhum usuário encontrado!</h2>
          <span>
            Enquanto isso, acompanhe a Bitwise nas redes sociais:
            <img src={Sociais} alt="sociais" />
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
