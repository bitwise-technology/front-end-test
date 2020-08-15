import React, { useState, useEffect, ChangeEvent, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { useGithubApiData } from '../../hooks/useGithubApiData';
import { GET_USER_INFO } from '../../apollo-queries';

import Header from '../../components/Header';

import { ReactComponent as GithubSVG } from '../../assets/Vector.svg';
import { ReactComponent as LinkedInSVG } from '../../assets/in.svg';
import { ReactComponent as MediumSVG } from '../../assets/medium.svg';
import { ReactComponent as InstaSVG } from '../../assets/insta.svg';
import { ReactComponent as SearchSVG } from '../../assets/searchIcon.svg';

import PeopleImg from '../../assets/landingImage.png';
import BackgroundImg from '../../assets/Polygon 1 (1).png';

import { UserContext } from '../../contexts/UserContext';
import Alert from '../../components/Alert';
import NearbyNames from '../../components/NearbyNames';
import CustomInput from '../../components/CustomInput';

const Landing = () => {
	const [username, setUsername] = useState('');
	const [showAlert, setShowAlert] = useState(false);

	const { getData: getUserData, data: userInfo } = useGithubApiData(GET_USER_INFO, () => setShowAlert(true));

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
			<Alert showAlert={showAlert} setShowAlert={setShowAlert} text="Nenhum usuário encontrado!" />

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
					<CustomInput
						icon={<SearchSVG className="search-container__search-icon" />}
						name="username"
						style={{ width: '100%' }}
						isShadowed={false}
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

				<NearbyNames username={username} getUserData={getUserData} />
			</div>

			<div className="aside">
				<img src={PeopleImg} alt="People working" className="aside__main-img" />
				<img src={BackgroundImg} alt="Background" className="aside__background" />
			</div>

			<div className="footer">
				<MediumSVG className="footer__icon" />
				<a href="https://www.linkedin.com/company/bitwisetechnology/" target="_blank" rel="noopener noreferrer">
					<LinkedInSVG className="footer__icon" />
				</a>
				<a href="https://www.instagram.com/bitwisetechnology/" target="_blank" rel="noopener noreferrer">
					<InstaSVG className="footer__icon" />
				</a>
			</div>
		</div>
	);
};

export default Landing;
