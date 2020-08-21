import React from 'react';

interface UserProfile {
	user: {
		avatarUrl: string;
		name: string;
		repositories: {
			totalCount: number;
		};
	};
}
const UserInfo: React.FC<UserProfile> = ({
	user: {
		avatarUrl,
		name,
		repositories: { totalCount },
	},
}) => {
	return (
		<section className="user">
			<img src={avatarUrl} className="user__image" alt="User" />
			<div className="user__data">
				<h2 className="user__name">{name}</h2>
				<div className="user__amountOfRepositories">
					<span>{totalCount}</span>
					<span>Repositories</span>
				</div>
			</div>
		</section>
	);
};

export default UserInfo;
