import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

import ImgSrc from '../../assets/Polygon 2.png';

import UserInfo from '../../components/UserInfo';

import { mapGetUserResponseToTableBodyData } from '../../utils/mappers';

import ProfileFooter from '../../components/ProfileFooter';
import ProfileHeader from '../../components/ProfileHeader';
import Alert from '../../components/Alert';
import Table from '../../components/Table';


const Profile: React.FC = () => {
	const [alertText, setAlertText] = useState('');
	const [showAlert, setShowAlert] = useState(false);

	const tableHeaderColumns = ['Nome do repositório', 'Qtd de commit', 'Msg Ultimo Commit', 'Hash do ultimo commit'];

	const { user }: any = useContext(UserContext);

	useEffect(() => {
		console.log(user);
		if (user.user.repositories.totalCount === 0) {
			setAlertText('Usuário encontrado não possui repositórios');
			setShowAlert(true);
		}
	}, [user]);

	return (
		<div id="#top">
			<Alert setShowAlert={setShowAlert} text={alertText} showAlert={showAlert} />

			<main className="user-info">
				
				<ProfileHeader />

				<section className="profile-user__data">
					<UserInfo user={user.user} />

					<div className="profile-user__repositories">
						<h2 className="title">Titulo</h2>
						<Table columns={tableHeaderColumns} data={user} mapper={mapGetUserResponseToTableBodyData} />
					</div>
				</section>
			</main>

			<img src={ImgSrc} className="horizontal-line" alt="Horizontal" />

			<ProfileFooter />
		</div>
	);
};

export default Profile;
