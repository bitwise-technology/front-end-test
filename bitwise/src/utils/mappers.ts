import { TableReportUserGithub } from '../components/TableBody';

export const mapGetUserResponseToTableBodyData = (response: any): Array<TableReportUserGithub> => {
	return response.repositories.edges.map((edge: any) => {
		const node = edge.node;
		const history = node.ref.target.history;
		return {
			repositoryName: node.name,
			amoutOfcommits: history.totalCount,
			lastCommitMessage: history.nodes[0].message,
			lastCommitHash: history.nodes[0].abbreviatedOid,
		};
	});
};
