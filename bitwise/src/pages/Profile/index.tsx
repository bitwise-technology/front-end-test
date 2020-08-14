import React, { useContext, useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';

import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as Logo } from '../../assets/bitwiseLogo.svg';
import { ReactComponent as SocialMedia } from '../../assets/Sociais.svg';
import { ReactComponent as SearchSVG } from '../../assets/searchIcon.svg';

import ImgSrc from '../../assets/Polygon 2.png';

import TableHeader from '../../components/TableHeader';
import TableBody from '../../components/TableBody';
import UserInfo from '../../components/UserInfo';
import { useGithubApiData } from '../../hooks/useGithubApiData';

import { GET_USER_INFO } from '../../apollo-queries';

import { mapGetUserResponseToTableBodyData } from '../../utils/mappers';
import ProfileFooter from '../../components/ProfileFooter';
const Profile: React.FC = () => {
	const {
		data: { user },
		setUser,
	}: any = useContext(UserContext);

	const [username, setUsername] = useState('');

	const { getData: getUserData, data: userInfo } = useGithubApiData(GET_USER_INFO, (error: any) =>
		console.log(error)
	);

	useEffect(() => {
		if (userInfo) {
			setUser(userInfo);
		}
	}, [userInfo]);

	const tableHeaderColumns = ['Nome do repositório', 'Qtd de commit', 'Msg Ultimo Commit', 'Hash do ultimo commit'];

	const tableBodyData = mapGetUserResponseToTableBodyData(user);

	const handleChange = ({ target: input }: ChangeEvent) => {
		setUsername((input as HTMLInputElement).value);
	};

	const handleKeyUp = ({ keyCode }: KeyboardEvent) => {
		if (keyCode === 13) {
			getUserData({
				variables: {
					user: username,
				},
			});
		}
	};

	return (
		<div className="page">
			<header className="profile__header">
				<Logo className="profile__logo" />
				<div style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
					<SearchSVG style={{ position:'absolute', top: '50%' , transform: 'translateY(-50%)', left: '13%' }} className="profile-container__search-icon" />

					<input
						value={username}
						onKeyUp={handleKeyUp}
						onChange={handleChange}
						type="text"
						className="profile__input"
						placeholder="Buscar usuário.."
					/>
				</div>
				<SocialMedia style={{ height: '2.5rem' }} className="profile__medias" />
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
