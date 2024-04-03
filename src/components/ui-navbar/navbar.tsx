import { NavbarItems } from './navbar-items';
import { NavbarOrientation } from './navbar.enum';
import { NavbarProps } from './navbar.type';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton, Toolbar } from '@mui/material';
import { useBreakpoint } from '@src/hooks/useBreakpoint';
import { useState } from 'react';

export const Navbar = (props: NavbarProps) => {
	const { isXs } = useBreakpoint();
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
		<AppBar position="static">
			<Toolbar
				sx={{
					minHeight: { xs: '60px', sm: '60px' },
					backgroundColor: 'white',
					justifyContent: { xm: 'flex-start', sm: 'center' },
				}}
			>
				{isXs ? (
					<>
						<Box>
							<IconButton
								size="large"
								edge="start"
								color="primary"
								aria-label="menu"
								onClick={toggleDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
						</Box>
						<Drawer
							anchor="left"
							open={isDrawerOpen}
							onClose={toggleDrawer(false)}
						>
							<NavbarItems
								items={props.items}
								orientation={NavbarOrientation.Vertical}
							/>
						</Drawer>
					</>
				) : (
					<NavbarItems
						items={props.items}
						orientation={NavbarOrientation.Horizontal}
					/>
				)}
			</Toolbar>
		</AppBar>
	);
};
