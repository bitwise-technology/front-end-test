import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import classes from  './SearchBar.module.css';
import Button from '../button/Button';
const SearchBar = ({ changeHandler, clicked }) => {

  return (
    <div className={classes.SearchBar}>
      <div className={classes.InputContainer}>
        <FontAwesomeIcon icon={faSearch} color="grey" size="1x"/>
        <input className={classes.Input} type="text" placeholder="Buscar usuário" onChange={changeHandler}/>
      </div>
      {clicked ? <Button clicked={clicked}/> : null}
    </div>
  )
}

export default SearchBar;