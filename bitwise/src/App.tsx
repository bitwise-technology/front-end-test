import React from 'react'

import './globalStyles.scss'
import Landing from './pages/Landing'

import Alert from './components/Alert'

const App = () => {
    return (
        <div>
            <Landing />
            <Alert show={true} />
        </div>
    )
}

export default App
