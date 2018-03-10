import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger'; 

import { users } from './../server/db';
import { getDefaultState } from './../server/getDefaultState';
import { initializeDB } from './../server/db/initializeDB';
import { reducer } from './reducers';
import { createSocketMiddleware } from './socketMiddleware';
import { RECEIVE_MESSAGE } from './actions/';
import { getPreloadedState } from './getPreloadedState';

const io = window.io;
const socketConfigOut = {
  UPDATE_STATUS: (data) => ({
    type: 'UPDATE_USER_STATUS',
    status: data
  })
};
const socketMiddleware = createSocketMiddleware(io)(socketConfigOut);
const logger = createLogger({
  stateTransformer: state => state.toJS()
});
const enhancer = compose(applyMiddleware(socketMiddleware, logger));

initializeDB();

// const currentUser = users[0];
// const defaultState = fromJS(getDefaultState(currentUser));

const store = createStore(reducer, getPreloadedState(), enhancer);

const socketConfigIn = {
  NEW_MESSAGE: (data) => ({
    type: RECEIVE_MESSAGE,
    message: data
  })
};
const socket = io();

Object.keys(socketConfigIn).map(key => {
  socket.on(key, data => {
    store.dispatch(socketConfigIn[key](data));
  });
});
// console.log('STORE', store.getState().toJS());
export const getStore = () => store;
