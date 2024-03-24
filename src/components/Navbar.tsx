import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { NavbarProps } from './Navbar.type';
import { Drawer } from '@mui/material';
import { Fragment, useState } from 'react';
import { NavbarItems, NavbarOrientation } from './NavbarItems';

export const Navbar = (props: NavbarProps) => {
	const { isXs } = useBreakpoint();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			console.log(event);
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setIsDrawerOpen(open);
		};

	return (
		<Fragment>
			<AppBar position="static">
				<Toolbar
					sx={{
						minHeight: { xs: '60px', sm: '60px' },
						backgroundColor: 'white',
						justifyContent: { xm: 'flex-start', sm: 'center' },
					}}
				>
					{isXs ? (
						<Fragment>
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
						</Fragment>
					) : (
						<NavbarItems
							items={props.items}
							orientation={NavbarOrientation.Horizontal}
						/>
					)}
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};
