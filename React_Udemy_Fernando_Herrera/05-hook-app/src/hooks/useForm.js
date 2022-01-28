import { useState } from "react";

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const inputOnChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return {values, inputOnChange};
};

export default useForm;