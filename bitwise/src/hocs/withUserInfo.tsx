import React, { useState, useContext, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import { GET_USER_INFO } from '../apollo-queries';
import { useGithubApiData } from '../hooks/useGithubApiData';

import { useHistory } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

const withUserInfo = (WrappedComponent: any) => {
	const OuterComponent = (props: any) => {
		const [userToGetInfo, setUserToGetInfo] = useState('');
		const [showAlert, setShowAlert] = useState(false);

		const { getData: getUserData, data: userInfo } = useGithubApiData(GET_USER_INFO, () => setShowAlert(true));

		const userContext: any = useContext(UserContext);

		const history = useHistory();

		useEffect(() => {
			if (userInfo) {
				userContext.setUser(userInfo);
				history.push('/profile');
			}
		}, [userInfo, history, userContext]);

		const handleUsernameInputChange = ({ target }: ChangeEvent): void => {
			setUserToGetInfo((target as HTMLInputElement).value);
		};
		const handleClick = (): void => {
			getUserData({ variables: { user: userToGetInfo } });
		};

		const handleUsernameInputKeyUp = ({ keyCode }: KeyboardEvent) => {
			if (keyCode === 13) {
				getUserData({
					variables: {
						user: userToGetInfo,
					},
				});
			}
		};

		return (
			<WrappedComponent
				{...props}
				getData={getUserData}
				userInfo={userInfo}
				userToGetInfo={userToGetInfo}
				onChange={handleUsernameInputChange}
				onClick={handleClick}
				onKeyUp={handleUsernameInputKeyUp}
				showAlert={showAlert}
				setShowAlert={setShowAlert}
			></WrappedComponent>
		);
	};

	return OuterComponent

	
};

export default withUserInfo;
