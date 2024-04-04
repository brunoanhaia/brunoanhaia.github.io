import { NavbarOrientation } from './ui-nav-bar.enum';
import { NavbarItemsProps } from './ui-nav-bar.type';
import { UiNavLinkButton } from '@components/ui-nav-link';
import { List, ListItem, Typography } from '@mui/material';

export const NavbarItems = ({ items, orientation = NavbarOrientation.Horizontal }: NavbarItemsProps) => {
	const flexDirection = orientation === NavbarOrientation.Horizontal ? 'row' : 'column';

	return (
		<List sx={{ display: 'flex', flexDirection, padding: 0 }}>
			{items.map(({ href, target, text }) => (
				<ListItem key={text}>
					<UiNavLinkButton
						to={href}
						target={target}
					>
						<Typography
							fontWeight="light"
							fontSize="1.1em"
						>
							{text}
						</Typography>
					</UiNavLinkButton>
				</ListItem>
			))}
		</List>
	);
};
