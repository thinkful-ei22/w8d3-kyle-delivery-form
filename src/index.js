import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import DeliveryForm from './components/DeliveryForm';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <DeliveryForm />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
