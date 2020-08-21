import React, { MouseEvent } from 'react';

import MediaIcons from '../MediaIcons';

interface AlertProps {
	showAlert: boolean;
	text: string;
	setShowAlert: Function;
}
const Alert: React.FC<AlertProps> = ({ showAlert, text, setShowAlert }) => {
	const handleClick = (event: MouseEvent): void => {
		setShowAlert((previousState: boolean) => !previousState);
	};

	return showAlert ? (
		<div className="alert">
			<p className="alert__text">{text}</p>
			<span className="media__text">Enquanto isso, acompanhe a bitwise nas redes socias</span>
			<div className="media__icons">
				<MediaIcons />
			</div>

			<span className="cta-button" onClick={handleClick}>
				x
			</span>
		</div>
	) : null;
};

export default Alert;
