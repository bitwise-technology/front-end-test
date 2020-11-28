import React, {useState} from 'react';

import classes from './Search.module.css';

import Logo from '../../components/logo/Logo';
import SearchBar from '../../components/searchBar/SearchBar';

import User from '../../queryComponent/user/User';

const Search = () => {
  const [login, setLogin] = useState("laioAndrade");


  const inputChangeHandler = (event) => {
    setLogin(event.target.value);
  }


  return (
     <div className={classes.Container}>
      <nav className={classes.Nav}>
        <Logo />
        <SearchBar changeHandler={inputChangeHandler}/>
      </nav>  
      <div>
        <User login={login}/>
      </div>
     </div>
    
    
  );
}

export default Search;