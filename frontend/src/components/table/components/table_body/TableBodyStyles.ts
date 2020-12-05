import styled from "styled-components";

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding-left: 28px;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid #d4dae4;
`;

export const StrippedTableRow = styled(TableRow)`
  background-color: var(--strippedRowColor);
`;

export const TableBodyContainer = styled.div`
  overflow-y: scroll;
  max-height: 210px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 59px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollBarThumbColor);
    border-radius: 3px;
  }
`;

export const TableDataCell = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: var(--dataColor);
  padding-top: 28px;
  padding-bottom: 24px;
  width: 25%;
  max-width: 25%;
  overflow-wrap: break-word;

  @media screen and (max-width: 700px) {
    &:last-child {
      padding-left: 10px;
    }
  }
`;
