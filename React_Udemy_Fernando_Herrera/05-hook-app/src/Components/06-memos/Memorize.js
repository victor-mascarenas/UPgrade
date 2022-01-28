import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';

export const Memorize = () => {
    const {state: counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    const secondBtnOnClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <h1>
                Counter: <Small value={counter}/>
            </h1>
            <hr/>
            <button className='btn btn-primary' onClick={increment.bind(null, 1)}>+ 1</button>
            <button className='btn btn-outline-primary m-2' onClick={secondBtnOnClick}>Show/Hide {show ? 'TRUE' : 'FALSE'}</button>
        </div>
    );
};
