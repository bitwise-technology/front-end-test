import React from "react";

import SearchHeader from "./components/header/SearchHeader";
import Table from "./components/table/Table";
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

      <StyledPurpleRow src={PurpleRow} alt='Purple row' />

      <SearchFooter />
    </PageContainer>  
  );
};

export default SearchPage;
