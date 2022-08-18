import React from 'react';

import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import MediumIcon from '../Icons/Medium';

import { Container } from './styles';

const SocialMedias: React.FC = () => {
  return (
    <Container>
      <a href="https://medium.com/@bitwisetechnology">
        <MediumIcon size={25} />
      </a>
      <a href="https://www.linkedin.com/company/bitwisetechnology/">
        <AiOutlineLinkedin size={30} />
      </a>
      <a href="https://www.instagram.com/bitwisetechnology/">
        <AiOutlineInstagram size={30} />
      </a>
    </Container>
  );
};
export default SocialMedias;
