import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleEmailSignIN = () => {
        const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    console.log(user);
    
  })
  .catch((error) => {
    console.error(error);
  });
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>

                <button className='login-btn' onClick={handleEmailSignIN}>Email Sign In</button>
                <button className='login-btn' onClick={handleEmailSignIN}>Google Sign In</button>
                <button className='login-btn' onClick={handleEmailSignIN}>Github Sign In</button>
                <button className='login-btn' onClick={handleEmailSignIN}>Facebook Sign In</button>
            </div>
        </div>
    );
};

export default Login;