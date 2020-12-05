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
  const { nodes } = data;

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
        {nodes.map((node, index) => {
          const repositoryName = node?.name ?? "";
          const repositoryAmmountOfCommits =
            node?.defaultBranchRef?.target?.history?.totalCount ?? "";
          const repositoryLastMessage =
            node?.defaultBranchRef?.target?.message ?? "";
          const repositoryAbbreviatedId =
            node?.defaultBranchRef?.target?.abbreviatedOid ?? "";

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
