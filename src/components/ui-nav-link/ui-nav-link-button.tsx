import { UiNavLink } from './ui-nav-link';
import { UiNavLinkProps } from './ui-nav-link.type';
import { ListItemButton } from '@mui/material';
import { ReactNode } from 'react';

type UiNavLinkButtonProps = Exclude<UiNavLinkProps, 'chidren'> & {
	children: ReactNode;
};

const UiNavLinkButton = ({ to, target, children }: UiNavLinkButtonProps) => {
	return (
		<UiNavLink
			to={to}
			target={target}
		>
			{({ isActive }) => {
				return (
					<ListItemButton
						disableTouchRipple
						selected={isActive}
					>
						{children}
					</ListItemButton>
				);
			}}
		</UiNavLink>
	);
};

export { UiNavLinkButton };
