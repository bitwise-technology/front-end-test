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
import CustomInput from '../../components/CustomInput';
import Alert from '../../components/Alert';
const Profile: React.FC = () => {
	const [userToGetInfo, setUserToGetInfo] = useState('');
	const [alertText, setAlertText] = useState('');
	const [showAlert, setShowAlert] = useState(false);

	const { user, setUser }: any = useContext(UserContext);

	const { getData: getUserData, data: userInfo } = useGithubApiData(GET_USER_INFO, (error: any) => {
		setAlertText('Usuário não encontrado !')
		setShowAlert(true);
	});

	useEffect(() => {
		if (userInfo) {
			setUser(userInfo);
		}
	}, [userInfo, setUser]);

	useEffect(() => {
		console.log(user);
		if (!user?.repositories?.totalCount) {
			setAlertText('Usuário encontrado não possui repositórios');
			setShowAlert(true)
		}
	}, [user]);

	const tableHeaderColumns = ['Nome do repositório', 'Qtd de commit', 'Msg Ultimo Commit', 'Hash do ultimo commit'];

	const tableBodyData = mapGetUserResponseToTableBodyData(user);

	const handleChange = ({ target: input }: ChangeEvent) => {
		setUserToGetInfo((input as HTMLInputElement).value);
	};

	const handleKeyUp = ({ keyCode }: KeyboardEvent) => {
		if (keyCode === 13) {
			getUserData({
				variables: {
					user: userToGetInfo,
				},
			});
		}
	};

	const inputIcon = (
		<SearchSVG
			style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '13%' }}
			className="profile-container__search-icon"
		/>
	);

	return (
		<div className="page">
			<Alert setShowAlert={setShowAlert} text={alertText} showAlert={showAlert} />

			<header className="profile__header">
				<Logo className="profile__logo" />

				<CustomInput
					type="text"
					name="username"
					placeholder=""
					id="username"
					value={userToGetInfo}
					onKeyUp={handleKeyUp}
					onChange={handleChange}
					icon={inputIcon}
					isShadowed={true}
				/>

				<SocialMedia style={{ height: '2.5rem' }} className="profile__medias" />
			</header>

			<section className="profile__user-data">
				<UserInfo user={user.user} />

				<div className="profile__user-table">
					<h2 className="title">Titulo</h2>
					<table className="table">
						<TableHeader headerColumns={tableHeaderColumns} />

						{tableBodyData && <TableBody data={tableBodyData} />}
					</table>
				</div>
			</section>

			<img src={ImgSrc} className="horizontal-line" alt="Horizontal" />

			<ProfileFooter />
		</div>
	);
};

export default Profile;
