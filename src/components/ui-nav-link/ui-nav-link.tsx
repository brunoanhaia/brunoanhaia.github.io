import { UiNavLinkProps } from './ui-nav-link.type';
import { NavLink } from 'react-router-dom';

const UiNavLink = ({ to, target, children }: UiNavLinkProps) => {
	return (
		<NavLink
			to={to}
			target={target}
			style={{
				textDecoration: 'none',
				color: 'inherit',
			}}
		>
			{children}
		</NavLink>
	);
};

export { UiNavLink };
