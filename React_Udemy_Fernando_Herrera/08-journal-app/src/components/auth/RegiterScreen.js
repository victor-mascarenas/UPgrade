import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import validator from 'validator';

export const RegiterScreen = () => {
    const {values: formValues, inputOnChange} = useForm({
        name: 'Victor',
        email: 'nando@gmail.com',
        password: '123456',
        confirmPassword: '123456'
    });
    const {name, email, password, confirmPassword} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('correcto');
        }
    };

    const isFormValid = () => {
        let valid = false;
        if (name.trim().length === 0) {
            console.log('Name is required');
        } else if (!validator.isEmail(email)) {
            console.log('Email is not valid');
        } else if (email.trim().length === 0) {
            console.log('Email is required');
        } else if (password !== confirmPassword) {
            console.log('Passwords are ot the same');
        } else if (password.trim().length < 5) {
            console.log('Password needs to be at least 5 characters long');
        } else {
            valid = true;
        }
        return valid;
    };

    return (
        <>
            <h3 className='auth__title'>Create an account</h3>
            <form onSubmit={handleRegister}>
                <div className='auth__alert-error'>
                    Campos no validos
                </div>
                <input className='auth__input' type='text' placeholder='Name' name='name' autoComplete='off' value={name} onChange={inputOnChange}/>
                <input className='auth__input' type='text' placeholder='Email' name='email' autoComplete='off' value={email} onChange={inputOnChange}/>
                <input className='auth__input' type='password' placeholder='Password' name='password' value={password} onChange={inputOnChange}/>
                <input className='auth__input' type='password' placeholder='Repeat password' name='confirmPassword' value={confirmPassword} onChange={inputOnChange}/>
                <button className='btn btn-primary btn-block mb-5' type='submit'>Sign up</button>
                <Link className='link' to='/auth/login'>Login instead</Link>
            </form>
        </>
    )
}
