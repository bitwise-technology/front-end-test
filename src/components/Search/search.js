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
          return repositoriesName.push(user);
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

  function closeAlert() {
    document.getElementById("alertmodal").className = "close";
  }

  return (
    <div className="search_case">
      <div className='search_case_input'>
        <input
        type="text"
        className="search_input"
        placeholder="Buscar usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
       ></input>
      <FiSearch className="search_icon" />
      <button
        className="gitBtn"
        id="btnSearch"
        type="subimit"
        onClick={submitGetUser}
      >
        <img src={Git} alt="git_image" />
      </button>

      </div>
      {error ? (
        <div className="alert" id="alertmodal">
          <button onClick={closeAlert} className="btnclose">
            x
          </button>
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
