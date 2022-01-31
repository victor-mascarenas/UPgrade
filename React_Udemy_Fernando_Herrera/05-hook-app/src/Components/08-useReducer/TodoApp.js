import React, { useEffect, useReducer, useRef } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import useForm from '../../hooks/useForm';

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
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo
        };
        dispatch(action);
        reset();
        input.current.focus();
    };

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => {
                                return <li key={todo.id} className='list-group-item'>
                                    <p className='text-center'>
                                        {i + 1}. {todo.desc}
                                    </p>
                                    <button className='btn btn-danger'>Borrar</button>
                                </li>;
                            })
                        }
                    </ul>
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
