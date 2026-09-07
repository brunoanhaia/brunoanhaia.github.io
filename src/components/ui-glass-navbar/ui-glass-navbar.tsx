import { NavItem, SocialLink } from './ui-glass-navbar.type';
import { Close as CloseIcon, DarkMode, GitHub, Language, LightMode, LinkedIn, Menu as MenuIcon } from '@mui/icons-material';
import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Stack,
	Toolbar,
	Tooltip,
	Typography,
	useTheme,
} from '@mui/material';
import { ThemeContext } from '@src/contexts/theme.context';
import { useActiveSection } from '@src/hooks/use-active-section';
import { useLanguage } from '@src/hooks/use-language';
import { useSmoothScroll } from '@src/hooks/use-smooth-scroll';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const NAV_ITEMS: NavItem[] = [
	{ id: 'hero', href: '#hero', labelKey: 'nav.home' },
	{ id: 'experience', href: '#experience', labelKey: 'nav.experience' },
	{ id: 'education', href: '#education', labelKey: 'nav.education' },
	{ id: 'projects', href: '#projects', labelKey: 'nav.projects' },
	{ id: 'blog', href: '#blog', labelKey: 'nav.blog' },
];

const SOCIAL_LINKS: SocialLink[] = [
	{ title: 'GitHub', href: 'https://github.com/brunoanhaia', icon: 'github' },
	{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/anhaiabruno/', icon: 'linkedin' },
];

export const UiGlassNavbar = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';
	const { t } = useTranslation();
	const { mode, setMode } = useContext(ThemeContext);
	const { language, toggleLanguage } = useLanguage();
	const { scrollTo } = useSmoothScroll();
	const [mobileOpen, setMobileOpen] = useState(false);

	const activeSection = useActiveSection(
		NAV_ITEMS.map((item) => item.id),
		'hero'
	);

	const handleThemeToggle = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	const handleNavClick = (href: string) => {
		setMobileOpen(false);
		scrollTo(href);
	};

	return (
		<AppBar
			position="fixed"
			elevation={0}
			sx={{
				top: 0,
				left: 0,
				right: 0,
				zIndex: (theme) => theme.zIndex.appBar,
				backgroundColor: isDark ? 'rgba(10, 10, 12, 0.75)' : 'rgba(248, 250, 252, 0.8)',
				backdropFilter: 'blur(16px) saturate(180%)',
				WebkitBackdropFilter: 'blur(16px) saturate(180%)',
				borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
				transition: 'background-color 0.3s ease, border-color 0.3s ease',
			}}
		>
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{
						minHeight: { xs: 64, md: 70 },
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					{/* Brand Logo */}
					<Box
						component="a"
						href="#hero"
						onClick={(e) => {
							e.preventDefault();
							handleNavClick('#hero');
						}}
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 1.25,
							textDecoration: 'none',
							color: 'inherit',
							cursor: 'pointer',
						}}
					>
						<Box
							sx={{
								width: 36,
								height: 36,
								borderRadius: '10px',
								background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#0a0a0c',
								fontWeight: 800,
								fontSize: '0.9rem',
								letterSpacing: '-0.02em',
								boxShadow: isDark
									? '0 0 20px rgba(0, 212, 255, 0.3)'
									: '0 2px 8px rgba(0, 145, 179, 0.25)',
							}}
						>
							BA
						</Box>
						<Box>
							<Typography
								variant="subtitle1"
								sx={{
									fontWeight: 700,
									lineHeight: 1.1,
									letterSpacing: '-0.01em',
									color: theme.palette.text.primary,
								}}
							>
								Bruno Anhaia
							</Typography>
							<Typography
								variant="caption"
								sx={{
									color: theme.palette.primary.main,
									fontWeight: 600,
									fontSize: '0.7rem',
									letterSpacing: '0.04em',
									textTransform: 'uppercase',
								}}
							>
								{t('hero.role')}
							</Typography>
						</Box>
					</Box>

					{/* Desktop Navigation Links */}
					<Stack
						direction="row"
						spacing={1}
						sx={{
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center',
							backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
							borderRadius: '2rem',
							padding: '4px 8px',
							border: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
						}}
					>
						{NAV_ITEMS.map(({ id, href, labelKey }) => {
							const isActive = activeSection === id;
							return (
								<Button
									key={id}
									onClick={() => handleNavClick(href)}
									sx={{
										px: 1.75,
										py: 0.5,
										fontSize: '0.875rem',
										fontWeight: isActive ? 600 : 500,
										color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
										backgroundColor: isActive
											? isDark
												? 'rgba(0, 212, 255, 0.1)'
												: 'rgba(0, 145, 179, 0.1)'
											: 'transparent',
										borderRadius: '1.5rem',
										transition: 'all 0.2s ease',
										'&:hover': {
											color: theme.palette.text.primary,
											backgroundColor: isDark
												? 'rgba(255, 255, 255, 0.06)'
												: 'rgba(0, 0, 0, 0.05)',
										},
									}}
								>
									{t(labelKey)}
								</Button>
							);
						})}
					</Stack>

					{/* Actions: Language, Theme & Socials */}
					<Stack
						direction="row"
						spacing={0.5}
						sx={{ alignItems: 'center' }}
					>
						{/* Language Toggle */}
						<Tooltip title={t('common.toggleLanguage')}>
							<Button
								onClick={toggleLanguage}
								size="small"
								aria-label={t('common.toggleLanguage')}
								startIcon={<Language sx={{ fontSize: 16 }} />}
								sx={{
									fontSize: '0.75rem',
									fontWeight: 700,
									color: theme.palette.text.primary,
									borderRadius: '0.5rem',
									px: 1,
									minWidth: 'auto',
									border: isDark
										? '1px solid rgba(255, 255, 255, 0.1)'
										: '1px solid rgba(0, 0, 0, 0.1)',
									'&:hover': {
										borderColor: theme.palette.primary.main,
									},
								}}
							>
								{language === 'en' ? 'EN' : 'PT'}
							</Button>
						</Tooltip>

						{/* Theme Toggle */}
						<Tooltip title={t('common.toggleTheme')}>
							<IconButton
								onClick={handleThemeToggle}
								aria-label={t('common.toggleTheme')}
								size="small"
								sx={{
									color: theme.palette.text.primary,
									borderRadius: '0.5rem',
									p: 0.8,
								}}
							>
								{mode === 'dark' ? (
									<LightMode sx={{ fontSize: 20 }} />
								) : (
									<DarkMode sx={{ fontSize: 20 }} />
								)}
							</IconButton>
						</Tooltip>

						{/* Social Links (Desktop) */}
						<Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
							{SOCIAL_LINKS.map(({ title, href, icon }) => (
								<Tooltip
									key={title}
									title={title}
								>
									<IconButton
										component="a"
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={title}
										size="small"
										sx={{
											color: theme.palette.text.secondary,
											p: 0.8,
											'&:hover': {
												color: theme.palette.text.primary,
											},
										}}
									>
										{icon === 'github' ? (
											<GitHub sx={{ fontSize: 20 }} />
										) : (
											<LinkedIn sx={{ fontSize: 20 }} />
										)}
									</IconButton>
								</Tooltip>
							))}
						</Box>

						{/* Mobile Hamburger Toggle */}
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								onClick={() => setMobileOpen(true)}
								aria-label={t('common.openMenu')}
								sx={{
									color: theme.palette.text.primary,
									p: 0.8,
								}}
							>
								<MenuIcon />
							</IconButton>
						</Box>
					</Stack>
				</Toolbar>
			</Container>

			{/* Mobile Drawer */}
			<Drawer
				anchor="right"
				open={mobileOpen}
				onClose={() => setMobileOpen(false)}
				slotProps={{
					paper: {
						sx: {
							width: 280,
							backgroundColor: isDark ? '#0a0a0c' : '#ffffff',
							backgroundImage: 'none',
							p: 3,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						},
					},
				}}
			>
				<Box>
					<Stack
						direction="row"
						sx={{
							justifyContent: 'space-between',
							alignItems: 'center',
							mb: 3,
						}}
					>
						<Typography
							variant="subtitle1"
							sx={{ fontWeight: 700 }}
						>
							Menu
						</Typography>
						<IconButton
							onClick={() => setMobileOpen(false)}
							aria-label={t('common.closeMenu')}
							size="small"
						>
							<CloseIcon />
						</IconButton>
					</Stack>

					<List disablePadding>
						{NAV_ITEMS.map(({ id, href, labelKey }) => {
							const isActive = activeSection === id;
							return (
								<ListItem
									key={id}
									disablePadding
									sx={{ mb: 1 }}
								>
									<ListItemButton
										onClick={() => handleNavClick(href)}
										sx={{
											borderRadius: '0.5rem',
											backgroundColor: isActive
												? isDark
													? 'rgba(0, 212, 255, 0.1)'
													: 'rgba(0, 145, 179, 0.1)'
												: 'transparent',
											color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
										}}
									>
										<Typography
											sx={{
												fontWeight: isActive ? 700 : 500,
												fontSize: '0.95rem',
											}}
										>
											{t(labelKey)}
										</Typography>
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Box>

				{/* Drawer Footer */}
				<Box>
					<Stack
						direction="row"
						spacing={2}
						sx={{
							justifyContent: 'center',
							pt: 2,
							borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
						}}
					>
						{SOCIAL_LINKS.map(({ title, href, icon }) => (
							<IconButton
								key={title}
								component="a"
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={title}
								sx={{ color: theme.palette.text.secondary }}
							>
								{icon === 'github' ? <GitHub /> : <LinkedIn />}
							</IconButton>
						))}
					</Stack>
				</Box>
			</Drawer>
		</AppBar>
	);
};
