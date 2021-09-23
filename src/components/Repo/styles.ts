import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-width: 0.5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Label = styled.div`
  width: 25%;
`;

export const MessageLabel = styled(Label)`
  font-size: 16px;
`;