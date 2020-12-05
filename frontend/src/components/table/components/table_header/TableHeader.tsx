import React from "react";

import {
  TableHeaderContainer,
  TableRow,
  TableHeaderCell,
} from "./TableHeaderStyles";

interface TableHeaderProps {
  headers: Array<string>;
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <TableHeaderContainer>
      <TableRow>
        {headers.map((header) => {
          return <TableHeaderCell>{header.toUpperCase()}</TableHeaderCell>;
        })}
      </TableRow>
    </TableHeaderContainer>
  );
};

export default TableHeader;
