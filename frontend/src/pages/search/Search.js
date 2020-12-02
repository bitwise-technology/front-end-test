import React, {useState} from 'react';

import classes from './Search.module.css';

import Logo from '../../components/logo/Logo';
import SearchBar from '../../components/searchBar/SearchBar';

import User from '../../queryComponent/user/User';
import Medias from '../../components/medias/Medias';

const Search = (props) => {
  const [login, setLogin] = useState(props.location.state.login);

  const inputChangeHandler = (event) => {
    setLogin(event.target.value);
  }


  return (
     <div className={classes.Container}>
      <nav className={classes.Nav}>
        <Logo />
        <SearchBar changeHandler={inputChangeHandler}/>
        <Medias />
      </nav>  
      <div>
        <User login={login}/>
      </div>
     </div>
    
    
  );
}

export default Search;