import react from 'react';
import classes from './Logo.module.css';

import logo from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <img className={classes.Logo} src={logo} alt="Bitwise" />
  )
};

export default Logo;
