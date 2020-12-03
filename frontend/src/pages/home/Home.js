import React, {useState, useEffect} from 'react';

import { useQuery, gql } from '@apollo/client';
import {  Redirect } from 'react-router-dom';

import Alert  from '../../components/alert/Alert';

import classes from './Home.module.css';

import Logo from '../../components/logo/Logo';
import SearchBar from '../../components/searchBar/SearchBar';
import Medias from '../../components/medias/Medias';

import bgImage from '../../assets/images/background-image.svg';
import homeImage from '../../assets/images/home-image.svg';


const GET_USER = gql`
  query  User($login: String!){
    user(login: $login) {
      name,
      avatarUrl
    }
  }
`;

const Home = () => {
  const [login, setLogin] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [render, setRender] = useState("");

  const { error, data } = useQuery(GET_USER, ({ variables: { login }}));
  console.log(data);

  useEffect(() => {
    if(isClicked && (data !== undefined)){
      setRender("redirect");
    } else if( isClicked && error) {
      setIsClicked(false);
      setRender("alert");
    } 
  },[isClicked])
  
  const inputChangeHandler = (event) => {
    setLogin(event.target.value);
  }

  const clickHandler = () => {
      setIsClicked(true);
  }

  const closeHandler = () => {
    setRender("");
}

  return (
    <div className={classes.Container}>
      <Logo />
      <img className={classes.BgImage} src={bgImage} alt="Bitwise" />
      <div className={classes.HomeContent}>
        <div className={classes.SearchContent}>
          <h1 className={classes.HomeText}>
            Buscar um usuário no <strong>Github </strong>ficou muito <strong>fácil!</strong>
          </h1>
          <SearchBar changeHandler={inputChangeHandler} clicked={clickHandler}/>
          {render === "redirect" ? <Redirect to={{pathname: "/search", state:{login: login}}} /> 
          : render === "alert" ? <Alert type="notFound" closeHandler={closeHandler}/> : null}
        </div>
        <img src={homeImage} alt="Bitwise" />
      </div>
      <div className={classes.Medias}>
        <Medias />
      </div>
    </div>
  )
} 
export default Home;
