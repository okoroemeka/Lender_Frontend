import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducer';
import { saveState, loadState } from './utils/persistState';
import './style/style.scss';

const persisitedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
  reducers,
  persisitedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState({
    authLogin: store.getState().authLogin,
  });
});

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(jsx, document.querySelector('#root'));
