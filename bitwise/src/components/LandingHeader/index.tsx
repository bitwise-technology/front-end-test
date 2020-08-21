import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BitwiseLogo } from '../../assets/bitwiseLogo.svg';

const Header = () => {
	return (
		<header className="header">
			<Link to='/'>
				<BitwiseLogo className="header__brand" />
			</Link>
		</header>
	);
};

export default Header;
