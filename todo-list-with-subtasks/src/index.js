import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App from './components/App'
import './assets/scss/style.scss'

ReactDOM.render(
  <Router>
    <App />
    </Router>
  ,
  document.getElementById('root')
);

