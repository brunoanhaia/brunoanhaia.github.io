import { useEffect, useState } from 'react';
import './App.css';

const personal_data = {
	name: 'Bruno Anhaia',
	age: '30',
	education: [
		{
			institution: 'Sorocaba Technological College (FATEC)',
			status: 'in progress',
			name: 'System Analysis and Development - Information Technology',
		},
		{
			institution: 'University of Campinas (UNICAMP)',
			status: 'in progress',
			name: 'Masters in Electrical Engineering',
		},
		{
			institution: 'Sorocaba College of Engineering (FACENS)',
			status: 'finished',
			name: 'Bachelor in Electrical Engineering',
		},
		{
			institution: 'TOkyo University of Electrical Communications (UEC)',
			status: 'finished',
			name: 'Sandwich degree',
		},
	],
	work: [
		{
			company: 'FIT - Institute of Technology',
			period: '2019/01 ~ NOW',
			experience: 'C/C++, Python, Batch',
		},
		{
			company: 'VA Engenharia',
			period: '2018/03 ~ 2019/01',
			experience:
				'PHP, MySQL, jQuery, JavaScript, HTML, SASS, Python Flask',
		},
	],
};

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [gitHubProfileData, setGitHubProfileData] =
		useState<GitHubProfileData>({
			name: '',
			company: '',
			avatarUrl: '',
			repositoriesInfo: [],
		});

	const handleOpenMenuClick = () => {
		setIsMenuOpen(true);
	};

	const handleCloseMenuClick = () => {
		setIsMenuOpen(false);
	};

	const handleMenuItemClick = () => {
		setIsMenuOpen(false);
	};

	const menuItems = [
		{
			href: 'https://www.linkedin.com/in/anhaiabruno/',
			target: '_blank',
			onClick: handleMenuItemClick,
			text: 'Linkedin',
		},
		{
			href: 'https://github.com/brunoanhaia/',
			target: '_blank',
			onClick: handleMenuItemClick,
			text: 'Github',
		},
		{
			href: '#resume',
			target: undefined,
			onClick: handleMenuItemClick,
			text: 'Resumé',
		},
		{
			href: '#projects',
			target: undefined,
			onClick: handleMenuItemClick,
			text: 'Projects',
		},
	];

	type GitHubProfileData = {
		name: string;
		company: string;
		avatarUrl: string;
		repositoriesInfo: Array<GitHubRepositoryInfo>;
	};

	type GitHubRepositoryInfo = {
		name: string;
		url: string;
	};

	useEffect(() => {
		Promise.all([
			fetch('https://api.github.com/users/brunoanhaia'),
			fetch('https://api.github.com/users/brunoanhaia/repos'),
		])
			.then(([personalInfo, repositoriesInfo]) =>
				Promise.all([personalInfo.json(), repositoriesInfo.json()])
			)
			.then(
				([
					{ name, company, avatar_url: avatarUrl },
					repositoriesInfo,
				]) => {
					console.log('Sucess');
					setGitHubProfileData({
						name,
						company,
						avatarUrl,
						repositoriesInfo,
					});
				}
			)
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="App">
			<header>
				<div className="top-bar">
					<button
						className="open-menu"
						onClick={handleOpenMenuClick}
					>
						Abrir Menu
					</button>
					<nav
						className={`navbar ${isMenuOpen ? 'menu-active' : ''}`}
					>
						<ul className="menu">
							<button
								className="close-menu"
								onClick={handleCloseMenuClick}
							>
								Fechar Menu
							</button>
							{menuItems.map((item) => {
								return (
									<li key={item.href}>
										<a
											href={item.href}
											target={item.target}
											onClick={item.onClick}
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
			</header>
			<div className="content">
				<section className="section__main">
					<div className="div__image--profile">
						<figure>
							<img
								className="image--profile"
								src={gitHubProfileData.avatarUrl}
								alt="Me"
							/>
							<figcaption>{gitHubProfileData.name}</figcaption>
							<h1 className="company">
								{gitHubProfileData.company}
							</h1>
						</figure>
					</div>
					<div className="div__footer--profile">
						<h1>Embedded Software Developer</h1>
					</div>
				</section>

				<section
					id="projects"
					className="section__gh--projects"
				>
					<div className="wrapper">
						<h1>Github projects</h1>
						<ul className="gh--projects-list">
							{gitHubProfileData.repositoriesInfo.map(
								(repositoryInfo) => {
									return (
										<li key={repositoryInfo.name}>
											<a href={repositoryInfo.url}>
												{repositoryInfo.name}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div>
				</section>

				<section
					id="resume"
					className="section__resume"
				>
					<div className="wrapper">
						<h1>Resumé</h1>
						<pre>{JSON.stringify(personal_data, null, '  ')}</pre>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
