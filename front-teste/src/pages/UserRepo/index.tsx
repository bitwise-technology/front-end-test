import React from 'react';
import Header from '../../components/Header';

import { Container, ContainerTableUserInfo, ContainerUserCard } from './styles';
import CardUser from '../../components/Cards/CardUser';
import CardTableUserInfo from '../../components/Cards/CardTableUserInfo';
import Footer from '../../components/Footer';

const UserRepo: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerUserCard>
        <CardUser />
      </ContainerUserCard>
      <ContainerTableUserInfo>
        <CardTableUserInfo />
      </ContainerTableUserInfo>
      <Footer />
    </Container>
  );
};

export default UserRepo;
