import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterInput from './';

describe('InputFilter tests', () => {
	test('Renderiza um input', () => {
		render(<FilterInput />);

		const el = screen.getByPlaceholderText('Procure por heróis');

		expect(el).toBeInTheDocument();
	});
});
