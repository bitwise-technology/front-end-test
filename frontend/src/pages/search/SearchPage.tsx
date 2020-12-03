import React from "react";
import SearchHeader from "./components/header/SearchHeader";
import UserInfo from "./components/user_info/UserInfo";
import {
    PageContainer,
} from "./SearchPageStyles";

const SearchPage = () => {
  return (
    <PageContainer>
      <SearchHeader />

      <UserInfo />
    </PageContainer>
  );
};

export default SearchPage;
