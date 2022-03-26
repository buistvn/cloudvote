import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = (props) => {
    // not setting after post
    // probably wont use them in this size of app
    //const [token, setToken] = useState('');
    const [invalid, invalidCredentials] = useState(false);
    //const [status, setStatus] = useState(0);
    //const [user, setUserName] = useState('');

    // 3a)
    // Again, another controller function that handles the
    // transport of state data. A request is sent to the
    // server, authenticating the user with a JWT. Once a
    // response is provided to the user, the data/state is
    // passed up the prop pipeline, resulting in the
    // VotingPage to be rendered to the DOM.
    //
    // Go to part 4, located in VotingPage.js

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.elements.useremail.value;
        const password = e.target.elements.password.value;

        axios
            .post('/api/user/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(`name: ${response.data.name}`);
                console.log(`_id: ${response.data._id}`);
                console.log(`email: ${response.data.email}`);
                if (response.status === 200) {
                    //setStatus(response.status);
                    //setToken(response.headers['auth-token']);
                    //setUserName(response.data.name);
                    props.handleLogin(
                        response.data._id,
                        response.data.name,
                        response.headers['auth-token'],
                        response.status
                    );
                }
            })
            .catch((err) => {
                invalidCredentials(true);
                console.log(err);
            });

        if (invalid === true) {
            e.target.elements.useremail.focus();
        }
        e.target.elements.useremail.value = null;
        e.target.elements.password.value = null;
    };

    return (
        <>
            <div className="formContainer">
                <div className="topForm">
                    <h2 className="formHeader">Login</h2>
                </div>
                <div className="middleForm"></div>
                <div className="bottomForm">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email"></label>
                            <input
                                placeholder="Your email"
                                required
                                name="useremail"
                                type="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input
                                placeholder="Password"
                                required
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className="errorMsg">
                            {invalid ? 'try again' : null}
                        </div>
                        <div className="loginButtons">
                            <button className="loginButton">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
