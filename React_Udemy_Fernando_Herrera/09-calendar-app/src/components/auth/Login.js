import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import useForm from '../../hooks/useForm';
import './login.css';

const initialLoginForm = {
    loginEmail: '',
    loginPassword: ''
};
const initialRegisterForm = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
};

export const Login = () => {
    const dispatch = useDispatch();
    const {values: loginValues, inputOnChange: loginInputOnChange, reset: loginReset} = useForm(initialLoginForm);
    const {values: registerValues, inputOnChange: registerInputOnChange, reset: registerReset} = useForm(initialRegisterForm);

    const {loginEmail, loginPassword} = loginValues;
    const {registerName, registerEmail, registerPassword, registerPassword2} = registerValues;

    const loginOnSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(loginEmail, loginPassword));
    };
    const registerOnSubmit = (e) => {
        e.preventDefault();
        if (registerPassword !== registerPassword2) {
            Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        } else {
            dispatch(startRegister(registerEmail, registerPassword, registerName));
        }
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
                    <form onSubmit={registerOnSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nombre" name='registerName' value={registerName} onChange={registerInputOnChange}/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" laceholder="Correo" name='registerEmail' value={registerEmail} onChange={registerInputOnChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Contraseña" name='registerPassword' value={ registerPassword} onChange={registerInputOnChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Repita la contraseña" name='registerPassword2' value={registerPassword2} onChange={registerInputOnChange}/>
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
