import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);
    useEffect(() => {
        setState({
            ...state,
            loading: true
        });
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null, 
                            data: data
                        });
                    } /* else {
                        console.log('Set state no se llamo');
                    } */
                // }, 4000);
            })
            .catch(() => {
                setState({
                    loading: false,
                    error: 'No se pudo obtener la informacion', 
                    data: null
                });
            });
    }, [url]);

    return state;
};

export default useFetch;