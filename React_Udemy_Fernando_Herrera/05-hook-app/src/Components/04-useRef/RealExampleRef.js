import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    
    const buttonOnClick = () => {
        setShow(!show);
    };
    
    return (
        <div>
            <h1>Real example</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <button className='btn btn-primary mt-3' onClick={buttonOnClick}>Show/Hide</button>
        </div>
    );
};
