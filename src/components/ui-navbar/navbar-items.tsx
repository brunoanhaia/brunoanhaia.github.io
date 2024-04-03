import { NavbarOrientation } from './navbar.enum';
import { NavbarItemsProps } from './navbar.type';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavbarItems = ({ items, orientation = NavbarOrientation.Horizontal }: NavbarItemsProps) => {
	const flexDirection = orientation === NavbarOrientation.Horizontal ? 'row' : 'column';

	return (
		<List sx={{ display: 'flex', flexDirection, padding: 0 }}>
			{items.map(({ href, target, text }) => (
				<ListItem key={text}>
					<NavLink
						to={href}
						target={target}
						style={{
							textDecoration: 'none',
						}}
					>
						{({ isActive }) => (
							<ListItemButton selected={isActive}>
								<Typography
									fontWeight="light"
									fontSize="1.1em"
								>
									{text}
								</Typography>
							</ListItemButton>
						)}
					</NavLink>
				</ListItem>
			))}
		</List>
	);
};
