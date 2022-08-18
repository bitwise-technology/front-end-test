import React from 'react';
import { Container, View } from './styles';
import SearchComponent from '../SearchComponent';
import SocialMedias from '../SocialMedias';
import BitwiseLogo from '../Logo';

const Header: React.FC = () => {
  return (
    <Container>
      <BitwiseLogo />
      <span>
        <SearchComponent />
      </span>
      <View>
        <SocialMedias />
      </View>
    </Container>
  );
};

export default Header;
