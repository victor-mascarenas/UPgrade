import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {
    // const [state, dispatch]= useReducer(reducer, initialState, init);
    const [todos]= useReducer(todoReducer, initialState);
    console.log(todos);

    return (
        <div>
            <h1>Todo App</h1>
            <hr/>
            <ul>
                <li>Hola</li>
                <li>Hola mundo</li>
                <li>Hola de nuevo</li>
            </ul>
        </div>
    );
};
