import React from 'react';

import Header from '../../components/Header';

import { ReactComponent as GithubSVG } from '../../assets/Vector.svg';
import { ReactComponent as LinkedInSVG } from '../../assets/in.svg';
import { ReactComponent as MediumSVG } from '../../assets/medium.svg';
import { ReactComponent as InstaSVG } from '../../assets/insta.svg';

import PeopleImg from '../../assets/landingImage.png';
import BackgroundImg from '../../assets/Polygon 1 (1).png';

import './styles.scss';

const Landing = () => {
	return (
		<div className="main">
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
					<input type="text" placeholder="Buscar um usuário..." />
					<div className="search-container__icon">
						<GithubSVG />
					</div>
				</div>
			</div>

			<div className="aside">
				<img src={PeopleImg} alt="People working" className="aside__main-img"/>
				<img src={BackgroundImg} alt="Background" className="aside__background"/>
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
