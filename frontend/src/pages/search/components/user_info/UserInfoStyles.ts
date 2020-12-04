import styled from "styled-components";
export const UserInfoContainer = styled.div`
  padding-left: 150px;
  padding-right: 191px;
  padding-top: 66px;
  display: flex;

  @media screen and (max-width: 1366px) {
    padding-left: 45px;
  }

  @media screen and (max-width: 992px) {
    padding-top: 40px;
    padding-left: 70px;
  }

  @media screen and (max-width: 700px) {
    justify-content: center;

    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  background-color: var(--blackColor);
  border-radius: 4px;
  box-shadow: 1px 1px 10px var(--blackColor);
`;

export const UserName = styled.p`
  margin-left: 32px;
  margin-top: 15px;
  color: var(--headerColor);
  font-weight: bold;
  font-size: 22px;
`;

export const RepositoriesCount = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 64px;
  margin-left: 32px;
  background-color: #fff;
  position: relative;
  box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
  border-radius: 4px;

  &::before {
    content: "";
    width: 3px;
    height: 16px;
    background-color: #490248;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 0px 100px 100px 0px;
  }

  & > strong {
    font-size: 18px;
    line-height: 22px;
  }

  & > span {
    font-size: 11px;
    line-height: 12px;
    color: #878790;
  }
`;
