import React, {useState} from 'react';
import { PropTypes } from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const inputOnChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };
    const formOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [...categories, inputValue]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={formOnSubmit}>
            <input type="text" value={inputValue} onChange={inputOnChange} placeholder='Add a new category'/>
        </form>
    );
};
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;