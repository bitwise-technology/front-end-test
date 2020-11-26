import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import classes from  './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <div className={classes.InputContainer}>
        <FontAwesomeIcon icon={faSearch} color="grey" size="1x"/>
        <input className={classes.Input} type="text" placeholder="Buscar usuário"/>
      </div>
        <button className={classes.Button} > 
          <FontAwesomeIcon icon={faGithub} color="white" size="2x"/>
        </button>
      
    </div>
  )
}

export default SearchBar;