import React, { useContext } from 'react';

import './styles/main.scss';

import Landing from './pages/Landing';
import Profile from './pages/Profile'

import { UserContext } from './contexts/UserContext';

import { Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
	const userContext: any = useContext(UserContext);

	console.log(userContext.user);

	return (
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/profile" render={() => userContext.user ? <Profile /> : <Redirect to="/" />} />
			</Switch>
		</div>
	);
};

export default App;
