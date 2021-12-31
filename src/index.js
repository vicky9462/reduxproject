
import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import Store from './containers/Store'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import Header from '../src/containers/Header'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={Store}>
  <Header/>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);