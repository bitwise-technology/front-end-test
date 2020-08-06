import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Base from "./components/Base";
import reducer from "./reducers";
import { ToastContainer } from 'react-toastify';


const App = () => (
  <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
    <ToastContainer/>
    <Base/>
  </Provider>
)

export default App;
