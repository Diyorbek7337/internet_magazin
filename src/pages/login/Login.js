import React from 'react';
import './login.css'
import { Container } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <div className='login'>
                <div className='login-wrapper'>
                    <h1>Customer Login</h1>
                    <div className='login-blocks'>
                        <div className='login-item'>
                            <h2>Registered Customers</h2>
                            <p>If you have an account, sign in with your email address.</p>
                                <div className='inputLogin'>
                                    <label for='email'>Email*</label>
                                    <input type='text' placeholder='Your Email' id='email' />
                                </div>
                                <div className='inputLogin'>
                                    <label for='password'>Password*</label>
                                    <input type='password' placeholder='Your Password' id='password' />
                                </div>
                                <div className='submit'>
                                <button type='button' className='buttons'>Sign In</button>
                                <a href='/'>Forgot Your Password?</a>
                                </div>
                        </div>
                        <div className='login-item' id='login-item-right'>
                            <h2 className='customer'>New Customer?</h2>
                            <p className='benefit'>Creating an account has many benefits:</p>
                            <ul className='ul'>
                                <li>Check out faster</li>
                                <li>Keep more than a address</li>
                                <li>Track orders and more</li>
                            </ul>
                            <button type='button' className='buttons1'>Create An Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;