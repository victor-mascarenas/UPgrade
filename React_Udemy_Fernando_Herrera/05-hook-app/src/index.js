import React from 'react';
import ReactDOM from 'react-dom';
//import CounterApp from './Components/01-useState/CounterApp';
import CounterWithCustomHook from './Components/01-useState/CounterWithCustomHook';
//import HooksApp from './HooksApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <CounterWithCustomHook />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();