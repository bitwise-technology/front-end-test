import React from 'react';

import { useLazyQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

interface GithubApiData {
	getData: Function;
	data: any;
}

export const useGithubApiData = (querie: DocumentNode): GithubApiData => {

	const [getData, { data: githubInfo, loading, error, called }] = useLazyQuery(querie, {
		pollInterval: 0,
	});

	if (called && error) {
		console.error(error);
	}

	return { getData, data: githubInfo };
};
