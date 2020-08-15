import React, {ChangeEvent, KeyboardEvent } from 'react';

interface CustomInputProps {
	value: string;
	type: string;
	placeholder: string;
	name: string;
    id: string;
    style?: any
    isShadowed?: boolean;
	icon?: any;
	onChange?: (event: ChangeEvent) => void;
	onKeyUp?: (event: KeyboardEvent) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ icon, isShadowed, ...othersProperties }) => {
	return (
		<div className="input-container">
			{icon}
			<input className={`input-container__input ${isShadowed ? 'shadow' : null}`} {...othersProperties} />
		</div>
	);
};

export default CustomInput;