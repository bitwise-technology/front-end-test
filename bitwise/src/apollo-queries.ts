import { gql } from 'apollo-boost';

export const GET_USER_INFO = gql`
	query GetGithubUserInfo($user: String!) {
		user(login: $user) {
			name
			avatarUrl
			repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
				totalCount
				edges {
					node {
						name
						ref(qualifiedName: "master") {
							target {
								... on Commit {
									history(first: 1) {
										totalCount
										nodes {
											message
											abbreviatedOid
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const GET_NEARBY_NAMES = gql`
	query GetNearbyNames($name: String!) {
		search(type: USER, first: 3, query: $name) {
			nodes {
				... on User {
					login
				}
			}
		}
	}
`;
