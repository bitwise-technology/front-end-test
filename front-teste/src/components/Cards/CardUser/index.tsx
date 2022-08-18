import React from 'react';

import CardRepositories from '../CardRepositories';
import { Container, UserPhoto, ContentContainer, UserName } from './styles';

const CardUser: React.FC = () => {
  return (
    <Container>
      <UserPhoto width="120" height="120" />
      <ContentContainer>
        <UserName>Ferdinando Carrara</UserName>
        <CardRepositories />
      </ContentContainer>
    </Container>
  );
};

export default CardUser;
