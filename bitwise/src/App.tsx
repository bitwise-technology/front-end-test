import React, { useState } from 'react';

import './styles/main.scss'

import Landing from './pages/Landing';

import Alert from './components/Alert';

const App = () => {
	const [showAlert, setShowAlert] = useState(false);

	return (
		<div>
			<Landing />
			<Alert showAlert={showAlert} setShowAlert={setShowAlert} text="User não encontrado!" />
		</div>
	);
};

export default App;
