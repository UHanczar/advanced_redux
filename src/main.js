import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getStore } from './getStore';
import { OFFLINE, updateStatus } from './actions';
import { App } from './App';

const store = getStore();

const Main = ({ state }) => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

const render = store => (
  ReactDOM.render(
    <div>
      <Main state={store.getState()} />
    </div>, document.getElementById('root')));

render(store);

const action = updateStatus(OFFLINE);
store.dispatch(action);
