import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItem from './';

describe('ListItem tests', () => {
	const testId = 'listItemTest';
	const testNames = ['Super Dev', 'Tech Lead'];

	test('Renderiza um item de lista', () => {
		render(<ListItem data-testid={testId} />);

		const el = screen.getByTestId(testId);

		expect(el).toBeInTheDocument();
		expect(el).toContainHTML('li');
	});

	test('Verifica o parametro passado para ter mais de um item', () => {
		render(
			<ul aria-label='sampleList'>
				{testNames.map((name, key) => {
					const keyName = name.replace(' ', '').toLocaleLowerCase();

					return <ListItem key={`${keyName}-${key}`} name={name} />;
				})}
			</ul>,
		);

		const list = screen.getByRole('list', { name: 'sampleList' });
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');

		expect(items.length).toBe(2);
	});
});
