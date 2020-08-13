import React, { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
	const userContext: any = useContext(UserContext);

	return <div>name : {userContext.user.user.name}</div>;
};

export default Profile;
