import React, { useContext } from "react";

import SearchHeader from "./components/header/SearchHeader";
import Table from "../../components/table/Table";
import UserInfo from "./components/user_info/UserInfo";

import PurpleRow from "../../assets/purple_row.png";


import {
  PageContainer,
  RepositoriesInfoContainer,
  RepositoriesTitle,
  RepositoriesActionsContainer,
  StyledThreeDots,
  StyledPurpleRow,
  
} from "./SearchPageStyles";
import SearchFooter from "./components/footer/SearchFooter";
import { UserContext } from "../../contexts/UserContext";

const SearchPage = () => {

  const {user} = useContext(UserContext);

  const tableHeaders=  ['Nome do Repositório' , 'Qtd de commit' , 'Msg Ultimo Commit' , 'Hash do ultimo commit']

  return (
    <PageContainer>
      <SearchHeader />

      {user && <UserInfo name={user?.name} avatarUrl={user?.avatarUrl} totalRepositories={user?.repositories.totalCount}/>}

      <RepositoriesInfoContainer>
        <RepositoriesActionsContainer>
          <RepositoriesTitle>Titulo</RepositoriesTitle>
          <StyledThreeDots />
        </RepositoriesActionsContainer>
        {user?.repositories && <Table data={user?.repositories} headers={tableHeaders}/>}
      </RepositoriesInfoContainer>

      <StyledPurpleRow src={PurpleRow} alt='Purple row' />

      <SearchFooter />
    </PageContainer>  
  );
};

export default SearchPage;
