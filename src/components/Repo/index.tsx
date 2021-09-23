import React from 'react';
import * as Styled from './styles';

interface RepoProps {
  name: string;
  qtd_commit: number;
  msg: string;
  hash: string;
}


const Repo:React.FC<RepoProps> = ({ name, qtd_commit, msg, hash }) => {
  return (
    <Styled.Container>
      <Styled.Label>{name}</Styled.Label>
      <Styled.Label>{qtd_commit}</Styled.Label>
      <Styled.MessageLabel>{msg}</Styled.MessageLabel>
      <Styled.Label>{hash}</Styled.Label>
    </Styled.Container>
  );
}

export default Repo;