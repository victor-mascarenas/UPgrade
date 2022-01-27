import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

const Message = ({message}) => {
    useEffect(() => {
        console.log('Componente montado');
        return () => {
            console.log('Componente desmontado');
        };
    }, []);

    return (
        <div>
            <h3>{message}</h3>
        </div>
    );
};
Message.propTypes = {
    message: PropTypes.string.isRequired
};
Message.defaults = {
    message: 'Hola'
};

export default Message;