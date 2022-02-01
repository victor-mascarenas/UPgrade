import React from 'react';

export const TodoListItem = ({todo, i: index, pOnClick, buttonOnClick}) => {
    return (
        <li key={todo.id} className='list-group-item'>
            <p onClick={pOnClick.bind(null, todo.id)} className={todo.done ? 'completed' : ''}>
                {index + 1}. {todo.desc}
            </p>
            <button className='btn btn-danger' onClick={buttonOnClick.bind(null, todo.id)}>Borrar</button>
        </li>
    );
};
