import React, {  ChangeEvent, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SearchSVG } from '../../assets/searchIcon.svg';
import { ReactComponent as Logo } from '../../assets/bitwiseLogo.svg';

import CustomInput from '../../components/CustomInput';
import MediaIcons from '../MediaIcons';
import useUserInfo from '../../hocs/useUserInfo';

interface ProfileHeaderProps {
	userToGetInfo: string;
	showAlert: boolean;

	onChange: (event: ChangeEvent) => void;
	onKeyUp: (event: KeyboardEvent) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userToGetInfo, onChange, onKeyUp }) => {
	const inputIcon = (
		<SearchSVG
			style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '13%' }}
			className="profile-container__search-icon"
		/>
	);

	return (
		<header className="profile__header">
			<Link to="/">
				<Logo className="profile__logo" />
			</Link>

			<CustomInput
				type="text"
				name="username"
				placeholder=""
				id="username"
				value={userToGetInfo}
				onKeyUp={onKeyUp}
				onChange={onChange}
				icon={inputIcon}
				isShadowed={true}
			/>

			<MediaIcons />
		</header>
	);
};

export default useUserInfo(ProfileHeader);
