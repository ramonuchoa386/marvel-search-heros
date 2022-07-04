import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './theme';
import Routes from './routes';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
