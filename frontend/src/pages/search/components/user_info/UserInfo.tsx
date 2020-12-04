import React from "react";
import {
  RepositoriesCount,
  UserAvatar,
  UserInfoContainer,
  UserName,
} from "./UserInfoStyles";

interface UserInfoProps {
  name?: string;
  totalRepositories?: number;
  avatarUrl?: string
}

const UserInfo: React.FC<UserInfoProps> = ({ name, totalRepositories, avatarUrl }) => {
  return (
    <UserInfoContainer>
      <UserAvatar src={avatarUrl} alt="User Image"/>
      <div>
        <UserName> {name}</UserName>
        <RepositoriesCount>
          <strong>{totalRepositories}</strong>
          <span>Repositorios</span>
        </RepositoriesCount>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
