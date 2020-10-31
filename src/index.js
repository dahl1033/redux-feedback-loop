import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux'; 
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';


const reduxStore = createStore(
    combineReducers({
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
