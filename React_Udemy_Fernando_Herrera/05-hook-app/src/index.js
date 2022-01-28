import React from 'react';
import ReactDOM from 'react-dom';
//import SimpleForm from './Components/01-useEffect/SimpleForm';
//import FormWithCustomHook from './Components/02-useEffect/FormWithCustomHook';
// import MultipleCustomHooks from './Components/03-examples/MultipleCustomHooks';
// import FocusScreen from './Components/04-useRef/FocusScreen';
// import { RealExampleRef } from './Components/04-useRef/RealExampleRef';
import Layout from './Components/05-useLayoutEffect/LayoutEffect';
//import CounterApp from './Components/01-useState/CounterApp';
//import CounterWithCustomHook from './Components/01-useState/CounterWithCustomHook';
//import HooksApp from './HooksApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Layout />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
