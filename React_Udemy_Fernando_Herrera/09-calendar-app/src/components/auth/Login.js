import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import useForm from '../../hooks/useForm';
import './login.css';

const initialLoginForm = {
    loginEmail: 'mario@gmail.com',
    loginPassword: '123456'
};

export const Login = () => {
    const dispatch = useDispatch();
    const {values: loginValues, inputOnChange: loginInputOnChange, reset: loginReset} = useForm(initialLoginForm);

    const {loginEmail, loginPassword} = loginValues;

    const loginOnSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(loginEmail, loginPassword));
    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginOnSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Correo" name='loginEmail' onChange={loginInputOnChange} value={loginEmail}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Contraseña" name='loginPassword' onChange={loginInputOnChange} value={loginPassword}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit btn" value="Login"/>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nombre"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" laceholder="Correo"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Contraseña"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Repita la contraseña"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit btn" value="Crear cuenta"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
