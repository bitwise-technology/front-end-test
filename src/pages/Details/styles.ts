import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 3% 0 0 0;
  background-color: '#F3F2F2';
  overflow-y: auto;
`;

export const ProfileContainer = styled.div`
  margin: 0 11.5%;
  display: grid;
  width: 450px;
  height: 150px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1.4fr;
  grid-template-areas: 
  'profileImage name'
  'profileImage repositories'
  ;
  margin-top: 80px;
`;

export const ProfileImage = styled.img`
  grid-area: profileImage;
  display: flex;
  max-height: 150px;
  max-width: 225px;
  border-radius: 4px;
`

export const NameLabel = styled.label`
  text-align: center;
  grid-area: name;
  color: #657FA0;
  font-size: 24px;
  font-weight: 500;
`;

export const RepoCountContainer = styled.div`
align-items: center;
justify-content: center;
text-align: center;
  display:flex;
  width: 100%;
  height: 100%;
  background-color: white;
`

export const ReposContainer = styled.div`
  margin: 11.5%;
  margin-top: 80px;
  width: 80%;
  background-color: white;
  height: 40%;
  border-radius: 4px;
  padding: 0 10%;
  overflow-y: auto;
`;

export const Infos = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfosLabel = styled.label`
  color: #657FA0;
  font-weight: 300;
  width: 25%;
  font-size: 20px;
  text-align: center;
`;

export const Header = styled.div`
  margin: 0 11.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;