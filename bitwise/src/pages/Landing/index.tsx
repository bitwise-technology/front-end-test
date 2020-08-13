import React, { useState, useEffect, ChangeEvent } from 'react';

import { useLazyQuery } from 'react-apollo';
import { GET_USER_INFO, GET_NEARBY_NAMES } from '../../apollo-queries';

import Header from '../../components/Header';
import Alert from '../../components/Alert';

import { ReactComponent as GithubSVG } from '../../assets/Vector.svg';
import { ReactComponent as LinkedInSVG } from '../../assets/in.svg';
import { ReactComponent as MediumSVG } from '../../assets/medium.svg';
import { ReactComponent as InstaSVG } from '../../assets/insta.svg';

import PeopleImg from '../../assets/landingImage.png';
import BackgroundImg from '../../assets/Polygon 1 (1).png';

import './styles.scss';

interface PossibleUserGithubApi {
	login: string;
}

const Landing = () => {
	const [username, setUsername] = useState('');
	const [showAlert, setShowAlert] = useState(false);
	let [getUserInfo, { loading, data: userInfo, called : userCalled }] = useLazyQuery(GET_USER_INFO, {
		pollInterval: 0,
		onError: () => setShowAlert(true),
	});
	let [
		getNearbyNames,
		{ loading: nearbyNamesLoading, data: nearbyNames, called: nearbyNamesCalled, error: nearbyNamesError },
	] = useLazyQuery(GET_NEARBY_NAMES, {
		pollInterval: 0,
		onCompleted: (data) => {
			console.log(data);
		},
	});

	useEffect(() => {
		if (username.length) {
			getNearbyNames({
				variables: {
					name: username,
				},
			});
		}
	}, [getNearbyNames, username]);

	if(userCalled && userInfo) {
		console.log(userInfo)
	}

	const handleChange = ({ target }: ChangeEvent) => {
		setUsername((target as HTMLInputElement).value);
	};
	const handleClick = (user: string) => {
		getUserInfo({
			variables: {
				user,
			},
		});
	};

	return (
		<div className="main">
			<Alert showAlert={showAlert} setShowAlert={setShowAlert} text="User não encontrado!" />

			<Header />

			<div className="search-container">
				<p className="search-container__text">
					Buscar um usuário no{' '}
					<strong className="emphasis">
						Github
						<br />
					</strong>{' '}
					ficou muito <strong className="emphasis">fácil!</strong>
				</p>
				<div className="search-container__box">
					<input
						name="username"
						id="username"
						type="text"
						placeholder="Buscar um usuário..."
						value={username}
						onChange={handleChange}
					/>
					<div className="search-container__icon" onClick={() => handleClick(username)}>
						<GithubSVG />
					</div>
				</div>

				<div>
					{nearbyNames &&
						nearbyNames.search.nodes.map(({ login }: { login: string }) => {
							return (
								<span
									onClick={() => handleClick(login)}
									style={{ padding: '1rem', display: 'inline-block', cursor: 'pointer' }}
								>
									{login}
								</span>
							);
						})}
				</div>
			</div>

			<div className="aside">
				<img src={PeopleImg} alt="People working" className="aside__main-img" />
				<img src={BackgroundImg} alt="Background" className="aside__background" />
			</div>

			<div className="footer">
				<MediumSVG className="footer__icon" />
				<LinkedInSVG className="footer__icon" />
				<InstaSVG className="footer__icon" />
			</div>
		</div>
	);
};

export default Landing;
