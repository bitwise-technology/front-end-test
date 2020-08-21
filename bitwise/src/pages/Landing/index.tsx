import React, { ChangeEvent , MouseEvent } from 'react';


import Header from '../../components/LandingHeader';

import { ReactComponent as GithubSVG } from '../../assets/Vector.svg';

import { ReactComponent as SearchSVG } from '../../assets/searchIcon.svg';

import PeopleWorkingImg from '../../assets/landingImage.png';
import BackgroundImg from '../../assets/Polygon 1 (1).png';

import Alert from '../../components/Alert';
import NearbyNames from '../../components/NearbyNames';
import CustomInput from '../../components/CustomInput';
import MediaIcons from '../../components/MediaIcons';
import withUserInfo from '../../hocs/withUserInfo';

interface LandingProps {
	userToGetInfo: string;
	showAlert: boolean;
	setShowAlert: Function;
	getData: Function;
	onChange: (event : ChangeEvent) => void;
	onClick: (event : MouseEvent) => void;
}

const Landing: React.FC<LandingProps> = ({ onChange, onClick, setShowAlert, showAlert, userToGetInfo, getData }) => {

	return (
		<div className="landing-main">
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
						value={userToGetInfo}
						onChange={onChange}
					/>
					<div style={{ cursor: 'pointer' }} className="search-container__icon" onClick={onClick}>
						<GithubSVG />
					</div>
				</div>

				<NearbyNames username={userToGetInfo} getUserData={getData} />
			</div>

			<div className="aside">
				<img src={PeopleWorkingImg} alt="People working" className="aside__main-img" />
				<img src={BackgroundImg} alt="Background" className="aside__background" />
			</div>

			<div className="footer">
				<MediaIcons />
			</div>
		</div>
	);
};

export default withUserInfo(Landing);
