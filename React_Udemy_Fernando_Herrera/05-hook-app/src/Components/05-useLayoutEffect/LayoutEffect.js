import React, { useLayoutEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import './layout.css';

const Layout = () => {
    const {state: counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div> 
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            <blockquote className='blockquote text-right'>
                <p ref={pTag} className='mb-3'>{quote}</p>
            </blockquote>
            <pre>{JSON.stringify(boxSize, null, 3)}</pre>
            <button className='btn btn-primary' onClick={increment.bind(null, 1)}>Siguiente frase</button>
        </div>
    );
};

export default Layout;