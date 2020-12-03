import React from "react";
import {
  RepositoriesCount,
  UserAvatar,
  UserInfoContainer,
  UserName,
} from "./UserInfoStyles";

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserAvatar />
      <div>
        <UserName> Tiago José </UserName>
        <RepositoriesCount>
          <strong>32</strong>
          <span>Repositorios</span>
        </RepositoriesCount>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
