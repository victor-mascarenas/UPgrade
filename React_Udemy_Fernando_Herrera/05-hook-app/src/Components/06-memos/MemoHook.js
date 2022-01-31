import React, { useMemo, useState } from 'react';
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const {state: counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    const secondBtnOnClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>
                Counter: <small>{counter}</small>
            </h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
            <button className='btn btn-primary' onClick={increment.bind(null, 1)}>+ 1</button>
            <button className='btn btn-outline-primary m-2' onClick={secondBtnOnClick}>Show/Hide {show ? 'TRUE' : 'FALSE'}</button>
        </div>
    );
};
