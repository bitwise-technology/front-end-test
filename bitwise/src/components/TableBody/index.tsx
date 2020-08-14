import React from 'react'
export interface TableReportUserGithub {
    repositoryName : string;
    amountOfCommits : string;
    lastCommitMessage : string;
    lastCommitHash: string;
    [index: string] : string;
}

export interface ITableBody<T> {
	data: Array<T>;
}
const TableBody: React.FC<ITableBody<TableReportUserGithub>> = ({ data }) => {
	return (
		<tbody>
			{data.map((item : TableReportUserGithub) => {
				return (
					<tr>
						{Object.keys(item).map((key : string) => {
							return <td className='table__data'>{item[key]}</td>;
						})}
					</tr>
				);
			})}
		</tbody>
	);
};


export default TableBody
