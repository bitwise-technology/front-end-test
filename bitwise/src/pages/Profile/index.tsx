import React, { useContext } from 'react';

import './styles.scss';

import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as Logo } from '../../assets/bitwiseLogo.svg';
import { ReactComponent as SocialMedia } from '../../assets/Sociais.svg';
import ImgSrc from '../../assets/Polygon 2.png';

import TableHeader from '../../components/TableHeader';
import TableBody from '../../components/TableBody';
import UserInfo from '../../components/UserInfo';

import { mapGetUserResponseToTableBodyData } from '../../utils/mappers';
import ProfileFooter from '../../components/ProfileFooter';
const Profile: React.FC = () => {
	const {
		data: { user },
    }: any = useContext(UserContext);
    
	const tableHeaderColumns = ['Nome do repositório', 'Qtd de commit', 'Msg Ultimo Commit', 'Hash do ultimo commit'];

	const tableBodyData = mapGetUserResponseToTableBodyData(user);

	return (
		<div className="page">
			<header className="search__header">
				<Logo className="search__logo" />
				<input type="text" className="search__input" placeholder="Buscar usuário.." />
				<SocialMedia style={{ height: '2.5rem' }} className="search__medias" />
			</header>

			<section className="data">
				<UserInfo user={user} />

				<div className="show">
					<h2 className="title">Titulo</h2>
					<table className="table">
						<TableHeader headerColumns={tableHeaderColumns} />

						<TableBody data={tableBodyData} />
					</table>
				</div>
			</section>

			<img src={ImgSrc} className="horizontal-line" alt="Alguma coisa" />
			
            <ProfileFooter />
		</div>
	);
};

export default Profile;
