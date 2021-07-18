import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase/firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); //this stops refresh
        //do login logic...
        history.push('/');

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to homepage...
            history.push('/');
        })
        .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //this stops refresh
        //do register logic...

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //create a user and logged in, redirect to homepage...
        })
        .catch(e => alert(e.message));

        alert("Your account was succesfully created");
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg"/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value ={email} onChange={e => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signini-in you agree to Amazon's Conditions of Use and Sale. Please see our privacy Notice, our Cookies Notice and our Interest Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
