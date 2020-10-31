import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux'; 
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

const scales = (state = 3, action) => {
    switch (action.type){
        case (action.type === 'UNDERSTANDING_FEEDBACK'):
            return action.payload;
        case (action.type === 'FEELING_FEEDBACK'):
            return action.payload;
        case (action.type === 'SUPPORT_FEEDBACK'):
            return action.payload;
        case (action.type === 'COMMENTS_FEEDBACK'):
            return action.payload;
        case (action.type === 'RESET'):
            return 3;
        default:
            return state;
    }
    

}
const reduxStore = createStore(
    combineReducers({
        scales
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
