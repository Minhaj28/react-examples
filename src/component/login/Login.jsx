import React, { useState } from 'react';
import { FormInput } from '../formInput';

import './Login.css';
import { authenticate } from './LoginServices';

const Login = () => {
    const [credential, setCredential] = useState({
        email: '',
        password: '',
    })

    const handleOnChange = (event) => {
        const update = {
            [event.target.name]: event.target.value,
        }
        setCredential({...credential, ...update});
    }

    const handleLogin = (event) => {
        event.preventDefault();
        try{
            const m = authenticate(credential);
            console.log(m);
        } catch(err) {
            alert(err.message);
        }
    }
    return (
        <div className='login'>
            <form action="" className='loginForm' onSubmit={handleLogin}>
                <FormInput 
                    label = 'User ID'
                    name = 'email'
                    //type = 'email'
                    handleOnChange = {handleOnChange}
                />
                <FormInput 
                    label = 'Password'
                    name = 'password'
                    type = 'password'
                    handleOnChange = {handleOnChange}
                />
                <div className="formInput" id='submit'>
                    <input type="submit" value='Login' id='btn'/>
                </div>
            </form>
        </div>
    );
};

export default Login;