import React from 'react'
import { useDispatch } from 'react-redux';
import { eventStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(eventStartDelete());
    };

    return (
        <button className='btn btn-danger fab-danger' onClick={onClick}>
            <i className='fas fa-trash'></i>
            <span> Borrar</span>
        </button>
    )
}
