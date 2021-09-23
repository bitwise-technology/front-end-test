import React from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import MIcon from '../../assets/M_Vector.svg';
import * as Styled from './styles';

const SocialMediaIcons:React.FC = () => {
  return (
    <div>
      <Styled.Icon src={MIcon} alt="" />

      <AiOutlineLinkedin size={40} color='#FD71EA' style={{marginLeft: 5}}/>

      <AiOutlineInstagram size={40} color='#FD71EA' style={{marginLeft: 5}}/>
    </div>
  );
};

export default SocialMediaIcons;