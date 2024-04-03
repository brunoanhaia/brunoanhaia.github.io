import { App } from './app';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Bruno Anhaia/i);
	expect(linkElement).toBeInTheDocument();
});
