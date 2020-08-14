import { useLazyQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

interface GithubApiData {
	getData: Function;
	data: any;
}

export const useGithubApiData = (query: DocumentNode, errorHandler?: any): GithubApiData => {
	const [getData, { data: githubInfo, loading, error, called }] = useLazyQuery(query, {
		pollInterval: 0,
		onError: (error) => errorHandler(error),
		onCompleted: (data) => console.log(data)
	});

	if (called && loading) {
		console.log('loading...');
	}

	return { getData, data: githubInfo };
};
