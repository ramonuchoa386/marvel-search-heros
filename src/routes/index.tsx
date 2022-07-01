import React from 'react';
import { BrowserRouter as Router, Route, Routes as R } from 'react-router-dom';

const Routes = () => {
	return (
		<Router>
			<R>
				<Route path='/' element={<h1>inicio</h1>} />
				<Route path='/hero/:id' element={<h1>hero page</h1>} />
			</R>
		</Router>
	);
};

export default Routes;
