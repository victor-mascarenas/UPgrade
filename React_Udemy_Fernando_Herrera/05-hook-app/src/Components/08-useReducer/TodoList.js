import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, pOnClick, buttonOnClick}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => {
                    return <TodoListItem key={todo.id} todo={todo} i={i} pOnClick={pOnClick} buttonOnClick={buttonOnClick}/>;
                })
            }
        </ul>
    );
};
