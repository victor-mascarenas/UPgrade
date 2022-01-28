import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    useEffect(() => {
        setState({
            ...state,
            loading: true
        });
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null, 
                    data: data
                });
            });
    }, [url]);

    return state;
};

export default useFetch;