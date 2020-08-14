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
		<section className="profile">
			<img src={avatarUrl} className="profile__image" />
			<div className="profile__data">
				<h2 className="profile__name">{name}</h2>
				<div className="profile__repositories">
					<span>{totalCount}</span>
					<span>Repositories</span>
				</div>
			</div>
		</section>
	);
};

export default UserInfo;
