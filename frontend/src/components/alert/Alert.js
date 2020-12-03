import React from 'react';
import classes from './Alert.module.css';

import Medias from '../medias/Medias';

const Alert = ({type, closeHandler}) => {

  return (
    <div className={classes.Alert} onClick={closeHandler}>
    {type === "notFound" ?
      <p><strong>Nenhum usuário encontrado!</strong></p> :
      <p><strong>Este usuário não possui ou participa de algum repositório!</strong></p>
      }
      <div className={classes.Footer}>
        <span>Enquanto isso, acompanhe a Bitwise nas redes sociais:</span>
        <Medias />
      </div>
      
  </div>
  )
}

export default Alert;