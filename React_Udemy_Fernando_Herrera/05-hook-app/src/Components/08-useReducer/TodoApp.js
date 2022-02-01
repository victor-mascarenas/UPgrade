import React, { useEffect, useReducer, useRef } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import useForm from '../../hooks/useForm';
import { TodoList } from './TodoList';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch]= useReducer(todoReducer, [], init);
    const [{description}, inputOnChange, reset] = useForm({
        description: ''
    });
    const input = useRef();
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const formOnSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        dispatch({
            type: 'add',
            payload: {
                id: new Date().getTime(),
                desc: description,
                done: false
            }
        });
        reset();
        input.current.focus();
    };
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

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} pOnClick={pOnClick} buttonOnClick={buttonOnClick}/>
                </div>
                <div className='col-5'>
                    <h4>Agregar ToDo</h4>
                    <hr/>
                    <form onSubmit={formOnSubmit}>
                        <input type='text' name='description' placeholder='Comprar...' autoComplete='false' className='form-control' onChange={inputOnChange} value={description} ref={input}/>
                        <button className='btn btn-outline-primary mt-1 col-12' type='submit'>Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
