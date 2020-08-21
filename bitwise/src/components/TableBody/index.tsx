import React from 'react';
import { v4 } from 'uuid';
export interface TableReportUserGithub {
	repositoryName: string;
	amountOfCommits: string;
	lastCommitMessage: string;
	lastCommitHash: string;
	[index: string] : string
}

export interface ITableBody<T> {
	data: Array<T>;
}
const TableBody: React.FC<ITableBody<TableReportUserGithub>> = ({ data }) => {
	return (
		<tbody>
			{data.map((item: TableReportUserGithub) => {
				return (
					<tr key={v4()} className='table__row'>
						{Object.keys(item).map((key: string) => {
							return (
								<td key={v4()} className="table__data">
									{item[key]}
								</td>
							);
						})}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
