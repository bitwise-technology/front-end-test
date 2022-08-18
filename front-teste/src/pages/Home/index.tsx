import React from 'react';

import { LayoutHome, Container, Title, ContainerInput, ContainerMedias } from './styles';

import SearchComponent from '../../components/SearchComponent';
import SocialMedias from '../../components/SocialMedias';
import BitwiseLogo from '../../components/Logo';

const Home: React.FC = () => {

  return (
    <LayoutHome>
      <Container>
        <BitwiseLogo />
        <Title>
          Buscar um usuário no <span>Github</span>
          <br />
          ficou muito<span> fácil!</span>
        </Title>
        <ContainerInput>
          <SearchComponent  />
        </ContainerInput>
        <ContainerMedias>
          <SocialMedias />
        </ContainerMedias>
      </Container>
      {/* <Footer /> */}
    </LayoutHome>
  );
};
export default Home;
