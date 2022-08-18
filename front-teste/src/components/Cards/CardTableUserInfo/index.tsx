import React from 'react';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import {
  Container,
  Header,
  TitleHeader,
  ContainerTable,
  Table,
  TableRow,
  TableColumn,
  TableColumnInfo,
} from './styles';

const data = [
  {
    id: 1,
    repoName: 'Repositório 1',
    description: 'Descrição do repositório 1',
    qtdCommits: 'TypeScript',
    msgLastCommit: '32',
    hashLastCommit: '32',
  },
  {
    id: 2,
    repoName: 'Repositório 2',
    description: 'Descrição do repositório 2',
    qtdCommits: 'TypeScript',
    msgLastCommit: '32',
    hashLastCommit: '32',
  },
  {
    id: 3,
    repoName: 'Repositório 3',
    description: 'Descrição do repositório 3',
    qtdCommits: 'TypeScript',
    msgLastCommit: '32',
    hashLastCommit: '32',
  },
  {
    id: 4,
    repoName: 'Repositório 4',
    description: 'Descrição do repositório 4',
    qtdCommits: 'TypeScript',
    msgLastCommit: '32',
    hashLastCommit: '32',
  },
];

const validateColorTableColumn = (index: number) => {
  if (index % 2 === 0) {
    return false;
  }
  return true;
};

const CardTableUserInfo: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleHeader>Titulo</TitleHeader>
        <BiDotsVerticalRounded size={30} color={'#555353'} />
      </Header>
      <ContainerTable>
        <Table>
          <>
            <TableRow>
              <TableColumn>Nome do repositório</TableColumn>
              <TableColumn>Qtd de commit</TableColumn>
              <TableColumn>Msg último commit</TableColumn>
              <TableColumn>hash do último commit</TableColumn>
            </TableRow>
            {data.map((item, index) => {
              return (
                <TableRow key={item.id} alterColor={validateColorTableColumn(index)}>
                  <TableColumnInfo>{item.description}</TableColumnInfo>
                  <TableColumnInfo>{item.qtdCommits}</TableColumnInfo>
                  <TableColumnInfo>{item.msgLastCommit}</TableColumnInfo>
                  <TableColumnInfo>{item.hashLastCommit}</TableColumnInfo>
                </TableRow>
              );
            })}
          </>
        </Table>
      </ContainerTable>
    </Container>
  );
};

export default CardTableUserInfo;
