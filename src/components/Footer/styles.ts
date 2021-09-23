import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #382039;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const InfoContainer =  styled.div`
  height: 300px;
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 0 11.5%;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 4px;
  border-color: #A51C92;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.div`
  color: #FD71EA;
  flex-wrap: wrap;
  width: 30%;
  text-align: center;
  font-size: 18px;
`;

export const TextWhite = styled.div`
  font-size: 20px;
  color: white;
`;

export const ShortText = styled(Text)`
  width: 15%;
  text-align: left;
`;

export const BackToTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  margin: 0 11.5%;
`;

export const BackToTopButton = styled.button`
  background-color: transparent;
  border: none;
  color: #FD71EA;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;