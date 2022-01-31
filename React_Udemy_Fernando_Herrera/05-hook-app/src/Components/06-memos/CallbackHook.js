import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    /* const increment = () => {
        setCounter(counter + 1);
    } */

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    return (
        <div>
            <h3>Callback Hook: {counter}</h3>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    );
};

export default CallbackHook;