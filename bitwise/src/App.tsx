import React, { useContext, lazy, Suspense } from 'react';

import Spinner from './components/Spinner';

import { UserContext } from './contexts/UserContext';

import { Switch, Route, Redirect } from 'react-router-dom';

import './styles/main.scss';

const Landing = lazy(() => import('./pages/Landing'));
const Profile = lazy(() => import('./pages/Profile'));

const App = () => {
	const { user } = useContext(UserContext) as { user: any };

	return (
		<div>
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path="/" component={Landing} />
					<Route path="/profile" render={() => (user ? <Profile /> : <Redirect to="/" />)} />
				</Suspense>
			</Switch>
		</div>
	);
};

export default App;
