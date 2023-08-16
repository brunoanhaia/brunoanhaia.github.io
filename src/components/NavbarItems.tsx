import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import { MenuItem } from './Navbar.type';

export enum NavbarOrientation {
	Horizontal,
	Vertical,
}

export type NavbarItemsProps = {
	items: Array<MenuItem>;
	orientation: NavbarOrientation | undefined;
};

export function NavbarItems({
	items,
	orientation = NavbarOrientation.Horizontal,
}: NavbarItemsProps) {
	const flexDirection =
		orientation === NavbarOrientation.Horizontal ? 'row' : 'column';

	return (
		<List sx={{ display: 'flex', flexDirection, padding: 0 }}>
			{items.map(({ href, target, text }) => (
				<ListItem key={text}>
					<ListItemButton
						target={target}
						href={href}
					>
						<Typography
							color="primary"
							fontFamily="Tajawal"
							fontWeight="700"
							fontSize="1.1em"
						>
							{text}
						</Typography>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
}
