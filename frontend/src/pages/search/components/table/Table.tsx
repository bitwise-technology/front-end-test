import React from "react";

import {
  TableDataCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  StrippedTableRow,
  TableBody,
} from "./TableStyles";

const Table = () => {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>NOME DO REPOSITÓRIO</TableHeaderCell>
          <TableHeaderCell>QTD DE COMMIT</TableHeaderCell>
          <TableHeaderCell>MSG DO ULTIMO COMMIT</TableHeaderCell>
          <TableHeaderCell>HASH DO ULTIMO COMMIT</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableDataCell>Data 01</TableDataCell>
          <TableDataCell>Data 02</TableDataCell>
          <TableDataCell>Data 03</TableDataCell>
          <TableDataCell>Data 04</TableDataCell>
        </TableRow>

        <StrippedTableRow>
          <TableDataCell>Data 01</TableDataCell>
          <TableDataCell>Data 02</TableDataCell>
          <TableDataCell>Data 03</TableDataCell>
          <TableDataCell>Data 04</TableDataCell>
        </StrippedTableRow>

        <TableRow>
          <TableDataCell>Data 01</TableDataCell>
          <TableDataCell>Data 02</TableDataCell>
          <TableDataCell>Data 03</TableDataCell>
          <TableDataCell>Data 04</TableDataCell>
        </TableRow>

        <TableRow>
          <TableDataCell>Data 01</TableDataCell>
          <TableDataCell>Data 02</TableDataCell>
          <TableDataCell>Data 03</TableDataCell>
          <TableDataCell>Data 04</TableDataCell>
        </TableRow>

        <TableRow>
          <TableDataCell>Data 01</TableDataCell>
          <TableDataCell>Data 02</TableDataCell>
          <TableDataCell>Data 03</TableDataCell>
          <TableDataCell>Data 04</TableDataCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default Table;
