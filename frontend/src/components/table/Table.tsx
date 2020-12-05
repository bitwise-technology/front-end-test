import React from "react";

import { Repositories } from "../../contexts/UserContext";

import TableBody from "./components/table_body/TableBody";
import TableHeader from "./components/table_header/TableHeader";

interface TableProps {
  data: Repositories;
  headers: Array<string>;
}

const Table: React.FC<TableProps> = ({ data, headers }) => {
  return (
    <>
      <TableHeader headers={headers} />
      <TableBody data={data} />
    </>
  );
};

export default Table;
