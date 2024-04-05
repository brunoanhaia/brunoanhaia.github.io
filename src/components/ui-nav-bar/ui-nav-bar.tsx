import { UiNavLink } from '../ui-nav-link';
import { NavbarItems } from './ui-nav-bar-items';
import { menuIconType } from './ui-nav-bar.constants';
import { navbarOrientation } from './ui-nav-bar.enum';
import { UiNavbarThemeButton } from './ui-navbar-theme-button';
import { UiIconButton } from '@components/ui-icon-button';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Drawer, List, ListItem, Toolbar, Tooltip } from '@mui/material';
import { useBreakpoint } from '@src/hooks/use-breakpoint';
import { menuConfig } from '@src/menu.config';
import { useState } from 'react';

const UiHorizontalMenu = () => {
	return (
		<NavbarItems
			items={menuConfig.textList}
			orientation={navbarOrientation.horizontal}
		/>
	);
};

const UiVerticalMenu = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setIsDrawerOpen(open);
	};

	return (
		<>
			<UiIconButton onClick={toggleDrawer(true)}>
				<MenuIcon />
			</UiIconButton>
			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={toggleDrawer(false)}
			>
				<NavbarItems
					items={menuConfig.textList}
					orientation={navbarOrientation.vertical}
				/>
			</Drawer>
		</>
	);
};

const getIconButton = (icon: keyof typeof menuIconType) => {
	const CustomIcon = menuIconType[icon];
	return <CustomIcon />;
};
const UiHorizontalIconBar = () => {
	return (
		<List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
			{menuConfig.iconList.map(({ href, target, text, icon }) => (
				<ListItem key={text}>
					<UiNavLink
						to={href}
						target={target}
					>
						<Tooltip title={icon}>
							<UiIconButton>{icon && getIconButton(icon)}</UiIconButton>
						</Tooltip>
					</UiNavLink>
				</ListItem>
			))}
			<ListItem>
				<UiNavbarThemeButton />
			</ListItem>
		</List>
	);
};

export const UiNavbar = () => {
	const { isXs } = useBreakpoint();

	return (
		<AppBar
			position="static"
			color="default"
		>
			<Toolbar
				sx={{
					minHeight: { xs: '60px', sm: '60px' },
					justifyContent: 'space-between',
				}}
			>
				{isXs ? <UiVerticalMenu /> : <UiHorizontalMenu />}
				<UiHorizontalIconBar />
			</Toolbar>
		</AppBar>
	);
};
