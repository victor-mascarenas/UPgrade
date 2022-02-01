import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch]= useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const buttonOnClick = (id) => {
        dispatch({
            type: 'delete',
            payload: id
        });
    };
    const pOnClick = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        });
    };

    const addTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} pOnClick={pOnClick} buttonOnClick={buttonOnClick}/>
                </div>
                <div className='col-5'>
                    <TodoAdd addTodo={addTodo}/>
                </div>
            </div>
        </div>
    );
};
