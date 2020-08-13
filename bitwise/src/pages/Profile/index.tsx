import React, { useContext } from 'react';

import './styles.scss';

import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as Logo } from '../../assets/bitwiseLogo.svg';
import { ReactComponent as SocialMedia } from '../../assets/Sociais.svg';
import ImgSrc from '../../assets/Polygon 2.png';
const Profile: React.FC = () => {
	const { user }: any = useContext(UserContext);

	console.log(user);

	return (
		<div className="page">
			<header className="search__header">
				<Logo className="search__logo" />
				<input type="text" className="search__input" placeholder="Buscar usuário.." />
				<SocialMedia style={{ height: '2.5rem' }} className="search__medias" />
			</header>

			<section className="data">
				<section className="profile">
					<div className="profile__image"></div>
					<div className="profile__data">
						<h2 className="profile__name">Ferdinando Carrara</h2>
						<div className="profile__repositories">
							<span>32</span>
							<span>Repositories</span>
						</div>
					</div>
				</section>

				<div className="show">
					<h2 className="title">Titulo</h2>
					<table className="table"></table>
				</div>
			</section>

			<img src={ImgSrc} className="horizontal-line" alt="Alguma coisa" />
			<footer className="search__footer">
				<div className="info">
					{/* <LogoBottom /> */}
					<p className="info__text">
						Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce
						sobre a sociedade, mudando o nosso dia a disa, facilitando atividades comuns e acelerando os
						negócios.
					</p>
					<div className="info__contact">
						<span>BRASIL</span>
						<p>
							{' '}
							R. Raphael Dias da Silva, 75 <br />
							3º andar • Sala 306 e 308 Campolim • Sorocaba/SP
						</p>
					</div>
					<div className="info__contact">
						<span>CANADÁ</span>
						<p>
							{' '}
							Av. Ernest-Gagnon, <br /> Bureau 315, Sala 609 <br />
							Quebec
						</p>
					</div>
				</div>

				<div className="bottom">
					<p> Todos os direitos reservados - 2020</p>

					<SocialMedia style={{ height: '2.5rem' }} className="bottom__medias" />

					<p>Voltar ao topo</p>
				</div>
			</footer>
		</div>
	);
};

export default Profile;
