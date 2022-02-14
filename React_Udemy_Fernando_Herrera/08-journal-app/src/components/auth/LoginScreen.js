import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLogin } from '../../actions/auth';
import useForm from '../../hooks/useForm';

export const LoginScreen = () => {
    const {values: formValues, inputOnChange} = useForm({
        email: 'nando@gmail.com',
        password: '123456'
    });
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const {email, password} = formValues;

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));//async action
    };
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };

    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={loginSubmit} className='animate__animated animate__fadeIn'>
                <input className='auth__input' type='text' placeholder='Email' name='email' autoComplete='off' value={email} onChange={inputOnChange}/>
                <input className='auth__input' type='password' placeholder='Password' name='password' value={password} onChange={inputOnChange}/>
                <button className='btn btn-primary btn-block' type='submit' disabled={state.ui.loading ? true : false}>Login</button>
                <div className='auth__social-networks'>
                    <p>Login woth social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className='link' to='/auth/register'>Create an account instead</Link>
            </form>
        </>
    )
}
