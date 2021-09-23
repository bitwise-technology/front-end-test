import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: red;
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

export const Error = styled.p`
  color: red;
`;