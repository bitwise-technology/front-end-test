import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 14px 12px 0;

  display: flex;
  align-self: flex-start;
  align-items: center;

  background-color: #fbfbfb;
  box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
  border-radius: 4px;
`;

export const ContainerUserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BorderCardRepositores = styled.div`
  width: 3px;
  height: 16px;
  background-color: #8c2e7c;
  border-radius: 0 100px 100px 0;
  margin-right: 11px;
`;

export const NumberRepositories = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #373435;
`;

export const RepositoriesTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #737172;
`;
