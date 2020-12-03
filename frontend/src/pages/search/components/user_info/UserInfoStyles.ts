import styled from 'styled-components';
export const UserInfoContainer = styled.div`
  padding-left: 150px;
  padding-right: 191px;
  padding-top :  66px;
  display: flex;
`;

export const UserAvatar = styled.div`
    width: 120px;
    height: 120px;
    background-color: #000;
    border-radius: 4px;
`;

export const UserName = styled.p`
    margin-left:32px;
    margin-top: 15px;
    color: #657FA0;
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
    box-shadow : 0px 2px 38px rgba(84, 84, 89, 0.14);
    border-radius : 4px;

    &::before {
        content: "";
        width: 3px;
        height: 16px;
        background-color: #490248;
        position: absolute ;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
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