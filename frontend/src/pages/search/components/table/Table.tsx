import React from "react";
import { Repositories } from "../../../../contexts/UserContext";

import {
  TableDataCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  StrippedTableRow,
  TableBody,
} from "./TableStyles";

interface TableProps {
  data: Repositories;
}

const Table: React.FC<TableProps> = ({ data }) => {
  const { edges } = data;

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
        {edges.map((edge, index) => {
          const tableContent = (
            <>
              <TableDataCell>{edge?.node?.name ?? ""}</TableDataCell>
              <TableDataCell>
                {edge?.node?.ref?.target?.history?.totalCount ?? ""}
              </TableDataCell>
              <TableDataCell>
                {edge?.node?.ref?.target?.history?.nodes[0]?.message ?? ""}
              </TableDataCell>
              <TableDataCell>
                {edge?.node?.ref?.target?.history?.nodes[0]?.abbreviatedOid ??
                  ""}
              </TableDataCell>
            </>
          );
          return index % 2 === 0 ? (
            <TableRow>{tableContent}</TableRow>
          ) : (
            <StrippedTableRow>{tableContent}</StrippedTableRow>
          );
        })}
      </TableBody>
    </>
  );
};

export default Table;
