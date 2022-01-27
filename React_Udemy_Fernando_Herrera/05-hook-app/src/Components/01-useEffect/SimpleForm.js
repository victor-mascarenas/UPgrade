import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const {name, email} = formState;

    useEffect(() => {
        
    }, []);
    useEffect(() => {
        
    }, [formState]);
    useEffect(() => {
        
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
            {
                (name === '123') && <Message message='Eres genial!'/>
            }
        </>
    );
};

export default SimpleForm;