import React, { useRef } from 'react';
import useForm from '../../hooks/useForm';

export const TodoAdd = ({addTodo}) => {
    const [{description}, inputOnChange, reset] = useForm({
        description: ''
    });
    const input = useRef();

    const formOnSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        addTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });
        reset();
        input.current.focus();
    };

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr/>
            <form onSubmit={formOnSubmit}>
                <input type='text' name='description' placeholder='Comprar...' autoComplete='false' className='form-control' onChange={inputOnChange} value={description} ref={input}/>
                <button className='btn btn-outline-primary mt-1 col-12' type='submit'>Agregar</button>
            </form>
        </>
    );
};
