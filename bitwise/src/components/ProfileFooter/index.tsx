import React from 'react';

import { ReactComponent as SocialMedia } from '../../assets/Sociais.svg';
import { ReactComponent as Logo } from '../../assets/logo_bottom.svg';

const ProfileFooter = () => {
	return (
		<footer className="profile-footer">
			<div className="profile-footer__info">
				<Logo />
				<p className="info__text">
					Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre a
					sociedade, mudando o nosso dia a disa, facilitando atividades comuns e acelerando os negócios.
				</p>
				<div className="info__contact">
					<span>BRASIL</span>
					<p>
						{' '}
						R. Raphael Dias da Silva, 75 <br />
						3º andar • Sala 306 e 308 <br /> Campolim • Sorocaba/SP
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

			<div className="profile-footer__end">
				<p className='profile-footer__end-text'> Todos os direitos reservados - 2020</p>

				<SocialMedia style={{ height: '2.5rem' }} className="profile-footer__end-medias" />

				<p className='profile-footer__end-text'>Voltar ao topo</p>
			</div>
		</footer>
	);
};

export default ProfileFooter;
