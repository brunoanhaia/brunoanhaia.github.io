export type MenuItem = {
	href: string;
	target: string | undefined;
	text: string;
};

export type NavbarProps = {
	items: Array<MenuItem>;
};
