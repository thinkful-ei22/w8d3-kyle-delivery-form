import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DeliveryForm from './components/DeliveryForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DeliveryForm />, document.getElementById('root'));
registerServiceWorker();
