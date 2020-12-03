import React from "react";


import SearchHeader from "./components/header/SearchHeader";
import Table from "./components/table/Table";
import UserInfo from "./components/user_info/UserInfo";

import {
  PageContainer,
  RepositoriesInfoContainer,
  RepositoriesTitle,
  
  RepositoriesActionsContainer,
  StyledThreeDots,
} from "./SearchPageStyles";

const SearchPage = () => {
  return (
    <PageContainer>
      <SearchHeader />

      <UserInfo />

      <RepositoriesInfoContainer>
        <RepositoriesActionsContainer>
          <RepositoriesTitle>Titulo</RepositoriesTitle>
          <StyledThreeDots />
        </RepositoriesActionsContainer>
        <Table />
      </RepositoriesInfoContainer>
    </PageContainer>
  );
};

export default SearchPage;
