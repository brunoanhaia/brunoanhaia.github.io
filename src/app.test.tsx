import { App } from './app';
import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';

vi.mock('./router', async () => {
	const { createMemoryRouter } = await import('react-router-dom');
	const { HomePage } = await import('./pages/home');
	const testRoutes = [
		{
			path: '/',
			Component: HomePage,
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
	const elements = await screen.findAllByText(/Bruno Anhaia/i);
	expect(elements.length).toBeGreaterThan(0);
});
