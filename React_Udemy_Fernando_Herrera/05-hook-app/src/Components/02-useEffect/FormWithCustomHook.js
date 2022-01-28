import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {
    const {values: formValues, inputOnChange} = useForm({
        name: '',
        email: '',
        password: ''
    });
    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('Email cambio');
    }, [email]);

    const formOnSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr/>
            <form onSubmit={formOnSubmit}>
                <div className='form-group'>
                    <input type='text' name='name' className='form-control' placeholder='Enter your name' autoComplete='off' value={name} onChange={inputOnChange}/>
                </div>
                <div className='form-group'>
                    <input type='email' name='email' className='form-control' placeholder='Enter your email' autoComplete='off' value={email} onChange={inputOnChange}/>
                </div>
                <div className='form-group'>
                    <input type='password' name='password' className='form-control' placeholder='Enter your password' autoComplete='off' value={password} onChange={inputOnChange}/>
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </>
    );
};

export default FormWithCustomHook;