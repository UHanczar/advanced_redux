import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger'; 

import { users } from './../server/db';
import { getDefaultState } from './../server/getDefaultState';
import { initializeDB } from './../server/db/initializeDB';
import { reducer } from './reducers';

initializeDB();

const currentUser = users[0];
const defaultState = fromJS(getDefaultState(currentUser));

const store = createStore(reducer, defaultState, applyMiddleware(createLogger({
  stateTransformer: state => state.toJS()
})));
console.log('STORE', store.getState().toJS());
export const getStore = () => store;
