import React, { useEffect, useState } from 'react';
import './effects.css';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const {name, email} = formState;

    useEffect(() => {
        console.log('Hey');
    }, []);
    useEffect(() => {
        console.log('FormState cambio');
    }, [formState]);
    useEffect(() => {
        console.log('email cambio');
    }, [email]);

    const inputOnChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input type='text' name='name' className='form-control' placeholder='Enter your name' autoComplete='off' value={name} onChange={inputOnChange}/>
            </div>
            <div className='form-group'>
                <input type='email' name='email' className='form-control' placeholder='Enter your email' autoComplete='off' value={email} onChange={inputOnChange}/>
            </div>
        </>
    );
};

export default SimpleForm;