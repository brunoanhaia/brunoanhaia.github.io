import { useState } from 'react';
import { NavbarComponentProps } from './Navbar.type';

export function Navbar({ items }: NavbarComponentProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleOpenMenuClick = () => {
		setIsMenuOpen(true);
	};

	const handleCloseMenuClick = () => {
		setIsMenuOpen(false);
	};

	const handleMenuItemClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="top-bar">
			<button
				className="open-menu"
				onClick={handleOpenMenuClick}
			>
				Abrir Menu
			</button>
			<nav className={`navbar ${isMenuOpen ? 'menu-active' : ''}`}>
				<ul className="menu">
					<button
						className="close-menu"
						onClick={handleCloseMenuClick}
					>
						Fechar Menu
					</button>
					{items.map((item) => {
						return (
							<li key={item.href}>
								<a
									href={item.href}
									target={item.target}
									onClick={handleMenuItemClick}
									rel="noreferrer"
								>
									{item.text}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
