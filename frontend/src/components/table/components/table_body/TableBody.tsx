import React from "react";
import { Repositories } from "../../../../contexts/UserContext";

import {
  TableBodyContainer,
  TableRow,
  TableDataCell,
  StrippedTableRow,
} from "./TableBodyStyles";

interface TableBodyProps {
  data: Repositories;
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <TableBodyContainer>
      {data.nodes.map((node, index) => {
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
    </TableBodyContainer>
  );
};

export default TableBody;
