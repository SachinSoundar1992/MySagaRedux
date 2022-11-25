import { combineReducers, createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import myFirstReducer from './reducers/reducer';

import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({myFirstReducer});
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

// Run redux-saga 


export default store 