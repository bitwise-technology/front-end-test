import { useLazyQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

interface GithubApiData {
	getData: Function;
	data: any;
}

export const useGithubApiData = (query: DocumentNode): GithubApiData => {
	const [getData, { data: githubInfo, loading, error, called }] = useLazyQuery(query, {
		pollInterval: 0,
	});

	if (called && error) {
		console.error(error);
	}

	if (called && loading) {
		console.log('loading...');
	}

	return { getData, data: githubInfo };
};
