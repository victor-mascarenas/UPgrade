import { useState } from "react";

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const inputOnChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };
    const reset = () => {
        setValues(initialState);
    };

    return [values, inputOnChange, reset];
};

export default useForm;