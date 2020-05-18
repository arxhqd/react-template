import './styles/global.scss';
import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { createStore } from './store';
import { Provider } from './provider';
import { App } from '@app';
import './localization';

const history = createBrowserHistory();
const store = createStore(history);
const setup = () => {
  render(
    <Provider store={store} history={history}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

setup();
