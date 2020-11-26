import React from 'react';

import classes from './Home.module.css';

import Logo from '../../components/logo/Logo';
import SearchBar from '../../components/searchBar/SearchBar';

import bgImage from '../../assets/images/background-image.svg';
import homeImage from '../../assets/images/home-image.svg';

const Home = () => {
  return (
    <div className={classes.Container}>
      <Logo />
      <img className={classes.BgImage} src={bgImage} alt="Bitwise" />
      <div className={classes.HomeContent}>
        <div className={classes.SearchContent}>
          <h1 className={classes.HomeText}>
            Buscar um usuário no <strong>Github </strong>ficou muito <strong>fácil!</strong>
          </h1>
          <SearchBar />
        </div>
        <img src={homeImage} alt="Bitwise" />
      </div>
    </div>
  )
}
  
export default Home;
