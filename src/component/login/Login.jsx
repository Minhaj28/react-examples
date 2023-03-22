import React, { useState } from 'react';

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
                <div className="formInput">
                    <label>User ID: </label>
                    <input onChange={handleOnChange} name='email' type="email" />
                </div>
                <div className="formInput">
                    <label>Password: </label>
                    <input onChange={handleOnChange} name='password' type="password" />
                </div>
                <div className="formInput" id='submit'>
                    <input type="submit" value='Login' id='btn'/>
                </div>
            </form>
        </div>
    );
};

export default Login;