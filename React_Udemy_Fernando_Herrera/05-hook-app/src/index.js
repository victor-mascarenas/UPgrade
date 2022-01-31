import React from 'react';
import ReactDOM from 'react-dom';
// import CallbackHook from './Components/06-memos/CallbackHook';
// import { Padre } from './Components/07-tarea-memo/Padre';
// import { MemoHook } from './Components/06-memos/MemoHook';
//import SimpleForm from './Components/01-useEffect/SimpleForm';
//import FormWithCustomHook from './Components/02-useEffect/FormWithCustomHook';
// import MultipleCustomHooks from './Components/03-examples/MultipleCustomHooks';
// import FocusScreen from './Components/04-useRef/FocusScreen';
// import { RealExampleRef } from './Components/04-useRef/RealExampleRef';
// import Layout from './Components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './Components/06-memos/Memorize';
//import CounterApp from './Components/01-useState/CounterApp';
//import CounterWithCustomHook from './Components/01-useState/CounterWithCustomHook';
//import HooksApp from './HooksApp';
import { TodoApp } from './Components/08-useReducer/TodoApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);

reportWebVitals();

// import './Components/08-useReducer/intro-reducer';