import React from "react";
import Table from "./styled";

const TableDash = ({ data }) => {
  return (
    <Table>
      <h1>Repositórios</h1>

      <table className="dataUser">
        <thead>
          <tr>
            <th>NOME DO REPOSITORIO</th>
            <th>QTD DE COMMIT</th>
            <th>MSG DO ULTIMO COMMIT</th>
            <th>HASH DO ULTIMO COMMIT</th>
          </tr>
        </thead>
        <tbody>
          {data?.repositories?.list?.length &&
            data?.repositories?.list.map((repo, index) => (
              <tr key={index}>
                <td>{repo.name}</td>
                <td>
                  {repo.refs.edges[0]?.repo?.target?.commits?.totalCommits}
                </td>
                <td>
                  {
                    repo.refs.edges[0]?.repo?.target?.commits?.lastCommit[0]
                      .node.title
                  }
                </td>
                <td>
                  {
                    repo.refs.edges[0]?.repo?.target?.commits?.lastCommit[0]
                      .node.hash
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Table>
  );
};

export default TableDash;
