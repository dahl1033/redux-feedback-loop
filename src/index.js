import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux'; 
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedBackReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_FEEDBACK":
            return [...state,action.payload];
        case "CLEAR_FEEDBACK":
            return [];
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        feedBackReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
