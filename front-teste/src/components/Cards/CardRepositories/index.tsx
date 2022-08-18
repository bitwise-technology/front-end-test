import React from 'react';

import { BorderCardRepositores, Container, NumberRepositories, RepositoriesTitle, ContainerUserInfo } from './styles';

const CardRepositories: React.FC = () => {
  return (
    <Container>
      <BorderCardRepositores />
      <ContainerUserInfo>
        <NumberRepositories>32</NumberRepositories>
        <RepositoriesTitle>Repositórios</RepositoriesTitle>
      </ContainerUserInfo>
    </Container>
  );
};

export default CardRepositories;
