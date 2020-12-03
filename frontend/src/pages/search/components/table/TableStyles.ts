import styled from "styled-components";

export const TableHeader = styled.div`
  border-bottom: 1px solid #000;
  font-family: "Roboto", sans-serif;
`;

export const TableBody = styled.div`
  overflow-y: scroll;
  max-height: 210px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 59px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ADB6C0;
    border-radius: 3px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding-left: 28px;
  font-family: "Roboto", sans-serif;
`;

export const TableHeaderCell = styled.strong`
  font-weight: 500;
  width: 25%;
  font-size: 15px;
  line-height: 17px;
  color: #657fa0;
  padding-top: 28px;
  padding-bottom: 24px;
`;

export const TableDataCell = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: #3d5879;
  padding-top: 28px;
  padding-bottom: 24px;
  width: 25%;
`;

export const StrippedTableRow = styled(TableRow)`
  background-color: #fafafc;
`;
