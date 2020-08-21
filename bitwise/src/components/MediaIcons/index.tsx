import React from 'react';

import { ReactComponent as LinkedInSVG } from '../../assets/in.svg';
import { ReactComponent as MediumSVG } from '../../assets/medium.svg';
import { ReactComponent as InstaSVG } from '../../assets/insta.svg';

const MediaIcons = () => {
	return (
		<div className="icons">
			<MediumSVG className="icons__icon" />
			<a
				className="icons__link"
				href="https://www.linkedin.com/company/bitwisetechnology/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedInSVG className="icons__icon" />
			</a>
			<a
				className="icons__link"
				href="https://www.instagram.com/bitwisetechnology/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<InstaSVG className="icons__icon" />
			</a>
		</div>
	);
};

export default MediaIcons;
