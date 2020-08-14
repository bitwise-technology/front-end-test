import React from 'react'

interface ITableHeaderProps {
    headerColumns: Array<string>;
}
const TableHeader: React.FC<ITableHeaderProps> = ({ headerColumns }) => {
	return (
		<thead className="table__header">
			<tr>
				{headerColumns.map((column) => {
					return (
						<th className="table__header" key={column}>
							{column}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

export default TableHeader
