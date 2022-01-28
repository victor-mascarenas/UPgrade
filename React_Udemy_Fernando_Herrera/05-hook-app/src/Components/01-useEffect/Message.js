import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

const Message = ({message}) => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });
    const {x, y} = coords;
    useEffect(() => {
        const mouseMove = (e) => {
            const coords = {
                x: e.x,
                y: e.y
            };
            setCoords(coords);
        };
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <div>
            <h3>{message}</h3>
            <p>
                x: {x} y: {y}
            </p>
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