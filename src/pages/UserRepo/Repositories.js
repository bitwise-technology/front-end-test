import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import Api from "../../services/api";

import Logo from "../../assets/image/Logo.svg";
import Footer from '../../components/Footer/footer'
import Sociais from "../../assets/image/Sociais.svg";
import "./styled.css";

function Repositories() {
  const history = useHistory()
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    let userName = localStorage.getItem("repositoriesName");
    if (userName != null) {
      userName = JSON.parse(userName);
      setUser(userName);
      localStorage.clear();
      }else {
          history.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(function(){ 
        Api.get(`users/${user[0]}/repos`).then((res) => {
          setRepositories(res.data);
        });
    }, 500)
  }, [user]);

  useEffect(() => {
      Api.get(`users/${user[0]}`).then((res) => {
        setAvatar(res.data);
      });
  }, [user]);

  return (
    <>
      <header>
        <img src={Logo} alt="logo"/>
        <input type="text" placeholder="Buscar usuário" />
        <img src={Sociais} alt="Sociais" />
        <FiSearch className="icon_search" />
      </header>
      <Link className="btn_back" to="/">
        Voltar
      </Link>
      <div className="user">
        <img src={avatar.avatar_url} alt="" />
        <div>
          <p className="userName">{avatar.name}</p>
          <div className="repositorios">
            {avatar.public_repos}
            <div className="detail" />
            <p>Repositorios</p>
          </div>
        </div>
      </div>


        <h2 className="title">Titulo</h2>
      <div className="wrapper">
        <div className="list">
          <h3>Nome do repositório</h3>
          {repositories.map((repository) => {
            return <div className="repository_name">{repository.name}</div>;
          })}
        </div>

        <div className="list">
          <h3>Linguagem</h3>
          {repositories.map((repository) => {
            return (
              <div className="repository_name">
                <p>{repository.language}</p>
              </div>
            );
          })}
        </div>

        <div className="list">
          <h3>Forks</h3>
          {repositories.map((repository) => {
            return (
              <div className="repository_name">
                {repository.forks !== 0
                  ? repository.forks
                  : "Sem Forks"}
              </div>
            );
          })}
        </div>

        <div className="list">
          <h3>Issues abertas</h3>
          {repositories.map((repository) => {
            return (
              <div className="repository_name">
                {repository.open_issues_count !== 0
                  ? repository.open_issues_count
                  : "Nenhuma issue aberta"}
              </div>
            );
          })}
        </div>
      </div>
        <Footer />
    </>
  );
}

export default Repositories;
