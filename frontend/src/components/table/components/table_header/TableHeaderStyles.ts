import styled from 'styled-components';

export const TableHeaderContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const TableHeaderCell = styled.strong`
  font-weight: 500;
  width: 25%;
  font-size: 15px;
  line-height: 17px;
  color : var(--headerColor);
  padding-top: 28px;
  padding-bottom: 24px;
`;

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding-left: 28px;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid #D4DAE4;
`;
