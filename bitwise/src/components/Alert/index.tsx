import React from 'react';

import { ReactComponent as LinkedInSVG } from '../../assets/in.svg';
import { ReactComponent as MediumSVG } from '../../assets/medium.svg';
import { ReactComponent as InstaSVG } from '../../assets/insta.svg';

import './styles.scss';

interface AlertProps {
	show: boolean;
	// setShow: Function;
}
const Alert: React.FC<AlertProps> = ({ show }) => {
	return show ? (
		<div className={`alert ${show ? 'animate' : null}`}>
			<p className="alert__text">Nenhum user encontrado!</p>
			<span className="media__text">Enquanto isso, acompanhe a bitwise nas redes socias</span>
			<div className="media__icons">
				<MediumSVG />

				<LinkedInSVG />
				<InstaSVG />
			</div>

			<span className="cta-button" onClick={() => console.log('clicked')}>
				x
			</span>
		</div>
	) : null;
};

export default Alert;
