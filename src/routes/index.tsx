import React from 'react';
import { BrowserRouter as Router, Route, Routes as R } from 'react-router-dom';
import { HomePage, HeroPage } from '../pages';

const Routes = () => {
	return (
		<Router>
			<R>
				<Route path='/' element={<HomePage />} />
				<Route path='/hero/:id' element={<HeroPage />} />
			</R>
		</Router>
	);
};

export default Routes;
