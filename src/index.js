import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
    appReducer,
    composeEnhancer(applyMiddleware(thunk))

);

ReactDOM.render(
    <Provider  store = {store} >
        <App/> 
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
