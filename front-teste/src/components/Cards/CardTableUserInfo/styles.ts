import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;

  border-radius: 6px;
  background-color: #fbfbfb;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 32px 0 0 32px;

  width: 100%;
`;

export const TitleHeader = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #373435;
`;

export const ContainerTable = styled.div`
  height: 300px;
  background-color: #fbfbfb;
  margin-top: 6px;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableRow = styled.tr<{ alterColor?: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.alterColor ? '#f0f0f0' : '#FBFBFB')};
`;

export const TableColumn = styled.th`
  padding: 16px 16px;
  width: 25%;

  text-align: left;
`;

export const TableColumnInfo = styled.td`
  padding: 16px 16px;
  width: 25%;

  text-align: left;
`;
