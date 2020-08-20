import { TableReportUserGithub } from '../components/TableBody';

export const mapGetUserResponseToTableBodyData = (response: any): Array<TableReportUserGithub> | null => {
	if (response.user.repositories.totalCount) {
		return response.user.repositories.edges.map((edge: any) => {
			const node = edge.node;
			const history = node?.ref?.target?.history;
			return {
				repositoryName: node.name || '',
				amoutOfCommits: history?.totalCount || 0,
				lastCommitMessage: history?.nodes[0]?.message || '',
				lastCommitHash: history?.nodes[0]?.abbreviatedOid || '',
			};
		});
	}
	return null
};
