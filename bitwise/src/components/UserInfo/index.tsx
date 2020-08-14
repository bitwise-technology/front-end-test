import React from 'react';

interface UserProfile {
	user: {
		avatarUrl: string;
		name: string;
		repositories: {
			totalCount: string;
		};
	};
}
const UserInfo: React.FC<UserProfile | any> = ({
	user: {
		avatarUrl,
		name,
		repositories: { totalCount },
	},
}) => {
	return (
		<section className="user">
			<img src={avatarUrl} className="user__image" />
			<div className="user__data">
				<h2 className="user__name">{name}</h2>
				<div className="user__repositories">
					<span>{totalCount}</span>
					<span>Repositories</span>
				</div>
			</div>
		</section>
	);
};

export default UserInfo;
