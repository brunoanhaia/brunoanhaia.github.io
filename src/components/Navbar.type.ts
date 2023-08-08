export type MenuItem = {
	href: string;
	target: string | undefined;
	text: string;
};

export type NavbarComponentProps = {
	items: Array<MenuItem>;
};
