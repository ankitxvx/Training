import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

// Create the Redux store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    
      <App />
    
  </Provider>,
);
