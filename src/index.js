import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fellowship = {
  title: "The Fellowship of the Ring",
  hours: "2",
  minutes: "58",
}

const two = {
  title: "The Two Towers",
  hours: "2",
  minutes: "59",
}

const king = {
  title: "The Return of the King",
  hours: "3",
  minutes: "21",
}

ReactDOM.render(
  <React.StrictMode>
    <App fellowship={fellowship}
    two={two}
    king={king}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
