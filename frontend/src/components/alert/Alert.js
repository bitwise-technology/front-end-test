import React from 'react';
import classes from './Alert.module.css';

import Medias from '../medias/Medias';

const Alert = ({caller}) => {
  return (
    <>
    {caller === "home" ?
    <div className={classes.Home}> 
      <p>Nenhum usuário encontrado!</p>
      <Medias />
    </div>
    :
    <div className={classes.Search}> 
      <p>Nenhum usuário encontrado!</p>
      <Medias />
    </div>
  }
  </>
  )
}

export default Alert;