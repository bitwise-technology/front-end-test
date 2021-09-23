import React from 'react';
import * as Styled from './styles';
import logo from '../../assets/Logo.svg';

const Logo:React.FC = () => {
  return (
    <Styled.Container src={logo} alt="" />
  );
}



export default Logo;