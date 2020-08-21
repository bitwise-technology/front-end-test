import React from 'react';

import TableHeader from '../../components/TableHeader';
import TableBody from '../../components/TableBody';

interface TableProps {
	columns: Array<string>;
	data: any;
	mapper?: Function;
}
const Table: React.FC<TableProps> = ({ columns, data, mapper }) => {
	let tableBodyData = data;

	if (mapper) {
		tableBodyData = mapper(data);
	}

	return (
		<table className="table">
			<TableHeader headerColumns={columns} />

			{tableBodyData && <TableBody data={tableBodyData} />}
		</table>
	);
};

export default Table;
