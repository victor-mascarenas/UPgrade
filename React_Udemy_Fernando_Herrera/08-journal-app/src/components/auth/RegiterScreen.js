import React from 'react'
import { Link } from 'react-router-dom'

export const RegiterScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Create an account</h3>
            <form>
                <input className='auth__input' type='text' placeholder='Name' name='name' autoComplete='off'/>
                <input className='auth__input' type='text' placeholder='Email' name='email' autoComplete='off'/>
                <input className='auth__input' type='password' placeholder='Password' name='password'/>
                <input className='auth__input' type='password' placeholder='Repeat password' name='confirm-password'/>
                <button className='btn btn-primary btn-block mb-5' type='submit'>Sign up</button>
                <Link className='link' to='/auth/login'>Login instead</Link>
            </form>
        </>
    )
}
