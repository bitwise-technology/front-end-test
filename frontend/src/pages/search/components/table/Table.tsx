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
          const repositoryName = edge?.node?.name ?? "";
          const repositoryAmmountOfCommits =
            edge?.node?.ref?.target?.history?.totalCount ?? "";
          const repositoryLastMessage =
            edge?.node?.ref?.target?.history?.nodes[0]?.message ?? "";
          const repositoryAbbreviatedId =
            edge?.node?.ref?.target?.history?.nodes[0]?.abbreviatedOid ?? "";

          const tableContent = (
            <>
              <TableDataCell>{repositoryName}</TableDataCell>
              <TableDataCell>{repositoryAmmountOfCommits}</TableDataCell>
              <TableDataCell>{repositoryLastMessage}</TableDataCell>
              <TableDataCell>{repositoryAbbreviatedId}</TableDataCell>
            </>
          );
          return index % 2 === 0 ? (
            <TableRow key={repositoryName}>{tableContent}</TableRow>
          ) : (
            <StrippedTableRow key={repositoryName}>
              {tableContent}
            </StrippedTableRow>
          );
        })}
      </TableBody>
    </>
  );
};

export default Table;
