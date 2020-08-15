import React, { ReactComponentElement } from 'react';

interface MediaIconsProps {
	icons: Array<{
		icon: SVGElement;
        link: string;
        inverse: boolean
	}>;
}
const MediaIcons: React.FC<MediaIconsProps> = ({ icons }) => {
	return (
		<>
			{icons.map(({ icon, link }) => (
				<a href={link} target="_blank" ref="noopener noreferrer">
					{' '}
					{icon}
				</a>
			))}
		</>
	);
};

export default MediaIcons;
