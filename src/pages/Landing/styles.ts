import styled from 'styled-components';
import background from '../../assets/Landing_Background.svg';

export const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-areas: 
  'content image'
  'footer footer'
  ;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: 2fr 1fr;

  background-image: url(${background});
  background-size: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex:1;
  flex-direction: column;
  padding: 10% 20%;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  border-radius: 4px;
`;

export const Input = styled.input`
  flex: 1;
  border-width: 0;
`;

export const SearchButton = styled.button`
  width: 10%;
  height: 100%;
  border-width: 0;
  background-color: white;
`;

export const GitHubButton = styled.button`
  background-color: #5A3D5C;
  border-width: 0;
  height: 60px;
  width: 60px;
`;

export const Description = styled.text`
font-size: 42px;
  color: #5A3D5C;
  font-weight: 300;
  letter-spacing: -3px;
`;

export const Bold = styled(Description)`
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  display: flex;
  flex:1;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const LandingImage = styled.img`

`;

export const Footer = styled.div`
  grid-area: footer;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;