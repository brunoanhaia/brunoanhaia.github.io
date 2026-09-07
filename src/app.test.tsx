import { App } from './app';
import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';

vi.mock('./router', async () => {
	const { createMemoryRouter } = await import('react-router-dom');
	const { RootPage } = await import('./pages/root');
	const { MainPage } = await import('./pages/main');
	const testRoutes = [
		{
			path: '/',
			Component: RootPage,
			children: [
				{
					path: '',
					Component: MainPage,
				},
			],
		},
	];
	return {
		routes: testRoutes,
		router: createMemoryRouter(testRoutes, { initialEntries: ['/'] }),
	};
});

beforeEach(() => {
	vi.stubGlobal(
		'fetch',
		vi.fn().mockImplementation((url: string) => {
			if (String(url).includes('repos')) {
				return Promise.resolve({
					json: () => Promise.resolve([]),
				});
			}
			return Promise.resolve({
				json: () =>
					Promise.resolve({
						name: 'Bruno Anhaia',
						company: 'Tech',
						avatar_url: '',
						bio: 'Developer',
					}),
			});
		})
	);
});

test('renders application with author name', async () => {
	render(<App />);
	const linkElement = await screen.findByText(/Bruno Anhaia/i);
	expect(linkElement).toBeInTheDocument();
});
