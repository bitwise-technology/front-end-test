import React, { useState, useEffect, ChangeEvent, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { useGithubApiData } from '../../hooks/useGithubApiData';
import { GET_NEARBY_NAMES, GET_USER_INFO } from '../../apollo-queries';

import Header from '../../components/Header';

import { ReactComponent as GithubSVG } from '../../assets/Vector.svg';
import { ReactComponent as LinkedInSVG } from '../../assets/in.svg';
import { ReactComponent as MediumSVG } from '../../assets/medium.svg';
import { ReactComponent as InstaSVG } from '../../assets/insta.svg';

import PeopleImg from '../../assets/landingImage.png';
import BackgroundImg from '../../assets/Polygon 1 (1).png';

import './styles.scss';

import { UserContext } from '../../contexts/UserContext';

const Landing = () => {
	const [username, setUsername] = useState('');

	const { getData: getNearbyNames, data: nearbyNames } = useGithubApiData(GET_NEARBY_NAMES);
	const { getData: getUserData, data: userInfo } = useGithubApiData(GET_USER_INFO);
	useEffect(() => {
		if (username.length) {
			getNearbyNames({ variables: { name: username } });
		}
	}, [getNearbyNames, username]);

	const userContext: any = useContext(UserContext);
	const history = useHistory();
	useEffect(() => {
		if (userInfo) {
			userContext.setUser(userInfo);
			history.push('/profile');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userInfo]);

	const handleChange = ({ target }: ChangeEvent) => {
		setUsername((target as HTMLInputElement).value);
	};
	const handleClick = () => {
		getUserData({ variables: { user: username } });
	};

	return (
		<div className="main">
			{/* <Alert showAlert={showAlert} setShowAlert={setShowAlert} text="User não encontrado!" /> */}

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
					<div style={{ cursor: 'pointer' }} className="search-container__icon" onClick={handleClick}>
						<GithubSVG />
					</div>
				</div>

				<div>
					{nearbyNames &&
						nearbyNames.search.nodes.map(({ login }: { login: string }) => {
							return (
								<span
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
