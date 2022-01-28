import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {
    const inputRef = useRef();

    const btnOnClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>
            <input ref={inputRef} className='form-control' placeholder='Su nombre'/>
            <button className='btn btn-outline-primary mt-3' onClick={btnOnClick}>Focus</button>
        </div>
    );
};

export default FocusScreen;