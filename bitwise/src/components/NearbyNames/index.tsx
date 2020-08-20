import React, { useEffect } from 'react';

import { ApolloError } from 'apollo-boost';

import { GET_NEARBY_NAMES } from '../../apollo-queries';
import { useGithubApiData } from '../../hooks/useGithubApiData';

interface NearbyNamesProps {
	username: string;
	getUserData: Function;
}

const NearbyNames: React.FC<NearbyNamesProps> = ({ username, getUserData }) => {
	const { getData: getNearbyNames, data: nearbyNames } = useGithubApiData(GET_NEARBY_NAMES, (error: ApolloError) =>
		console.log(error)
	);

	useEffect(() => {
		if (username.length) {
			getNearbyNames({ variables: { name: username } });
		}
	}, [getNearbyNames, username]);

	return (
		<div>
			{nearbyNames &&
				nearbyNames.search.nodes.map(({ login }: { login: string }) => {
					return (
						<span
							key={login}
							onClick={() => getUserData({ variables: { user: login } })}
							style={{
								margin: '0 1rem',
								padding: '1rem',
								display: 'inline-block',
								cursor: 'pointer',
							}}
						>
							{login}
						</span>
					);
				})}
		</div>
	);
};

export default NearbyNames;
