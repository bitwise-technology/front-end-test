import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import classes from './Button.module.css';

const Button = ({clicked}) => {
  return (
    <button className={classes.Button} onClick={clicked}> 
      <FontAwesomeIcon icon={faGithub} color="white" size="2x"/>
    </button>
  )
}

export default Button;