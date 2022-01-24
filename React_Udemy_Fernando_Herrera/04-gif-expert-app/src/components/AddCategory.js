import React, {useState} from 'react';

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Hola Mundo');

    const inputOnChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };
    const formOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={formOnSubmit}>
            <input type="text" value={inputValue} onChange={inputOnChange}/>
        </form>
    );
};