import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';

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
        
    };

    const isFormValid = () => {

    };

    return (
        <>
            <h3 className='auth__title'>Create an account</h3>
            <form onSubmit={handleRegister}>
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
