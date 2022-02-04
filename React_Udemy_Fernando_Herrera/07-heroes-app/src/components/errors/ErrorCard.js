import React from 'react';

export const ErrorCard = ({header, title, message}) => {
    return (
        <div className='mt-3 card bg-warning text-dark mb-3'>
            <div className='card-header'>{header}</div>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{message}</p>
            </div>
        </div>
    );
};
