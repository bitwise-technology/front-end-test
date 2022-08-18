import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Container = styled.div``;

export const ContainerIconSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const SearchIcon = styled(FiSearch)`
  color: #4f4f4f;
`;

export const SearchInput = styled.div`
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 3px 1px #b7b7b7;
  width: 560px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;

  input {
    border: none;
    height: 100%;
    width: 100%;
    margin-left: 14px;
    color: #4f4f4f;
  }

  button {
    background: #42163a;
    width: 64px;
    height: 56px;
    /* left: 644px; */
    top: 436px;
    border: none;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
