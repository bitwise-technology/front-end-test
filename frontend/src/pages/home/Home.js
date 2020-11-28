import React, {useState} from 'react';

import classes from './Home.module.css';

import Logo from '../../components/logo/Logo';
import SearchBar from '../../components/searchBar/SearchBar';

import bgImage from '../../assets/images/background-image.svg';
import homeImage from '../../assets/images/home-image.svg';

import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query  User($login: String!){
    user(login: $login) {
      name,
      avatarUrl
    }
  }
`;



const Users = ({login}) => {
  const { data } = useQuery(GET_USER, ({ variables: { login }}));
  return (
    data ? <p>{data.user.repositories.nodes.map(repository => repository.defaultBranchRef.target.history.edges[0].node.message)} </p> : null
  )
}


const Home = () => {
  const [login, setLogin] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const inputChangeHandler = (event) => {
    setLogin(event.target.value);
  }

  const clickHandler = () => {
    setIsClicked(true);
    
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
          {isClicked ? <Users login={login}/> : null}
        </div>
        <img src={homeImage} alt="Bitwise" />
      </div>
    </div>
  )
}
  
export default Home;
