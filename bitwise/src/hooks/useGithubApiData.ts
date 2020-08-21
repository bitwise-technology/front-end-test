import { useLazyQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

interface GithubApiData {
	getData: Function;
	data: any;
}

export const useGithubApiData = (query: DocumentNode, errorHandler?: any): GithubApiData => {
	const [getData, { data, loading, called }] = useLazyQuery(query, {
		pollInterval: 0,
		onError: (error) => errorHandler(error),
	});

	if (called && loading) {
		console.log('loading...');
	}

	return { getData, data };
};
