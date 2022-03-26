import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

// 3b)
// Again, another controller function that handles the
// transport of state data. A request is sent to the
// server, authenticating the user with a JWT. Once a
// response is provided to the user, the data/state is
// passed up the prop pipeline, resulting in the
// VotingPage to be rendered to the DOM.
//
// I believe we discussed the issues that still exist
// with this component after a user registers. Any
// additional issues can be place in this comment
// section.
//
// Issues:
//
// Go to part 4, located in VotingPage.js

const Register = (props) => {
    const [invalid, invalidCredentials] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.elements.username.value;
        const email = e.target.elements.useremail.value;
        const password = e.target.elements.password.value;
        const vpassword = e.target.elements.verifypassword.value;

        console.log(password, vpassword);

        if (password !== vpassword) {
            e.target.elements.username.value = name;
            e.target.elements.useremail.value = email;
            e.target.elements.password.value = null;
            e.target.elements.verifypassword.value = null;
            e.target.elements.password.focus();
            invalidCredentials(true);
        }

        if (password === vpassword) {
            axios
                .post('/api/user/register', {
                    name: name,
                    email: email,
                    password: password,
                })
                .then((response) => {
                    if (response.status === 200) {
                        invalidCredentials(false);
                        props.handleLogin(
                            response.data._id,
                            response.data.name,
                            response.headers['auth-token'],
                            response.status
                        );
                    }
                    console.log('res: ' + response.data);
                })
                .catch((err) => {
                    console.log('err: ' + err);
                });
            e.target.elements.username.value = null;
            e.target.elements.useremail.value = null;
            e.target.elements.password.value = null;
            e.target.elements.verifypassword.value = null;
        }
    };

    return (
        <>
            <div className="formContainer">
                <div className="topForm">
                    <h2 className="formHeader">Register</h2>
                </div>
                <div className="middleForm"></div>
                <div className="bottomForm">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name"></label>
                            <input
                                placeholder="Your name" //required
                                name="username"
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input
                                placeholder="Your email" //required
                                name="useremail"
                                type="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input
                                placeholder="Password" //required
                                name="password"
                                type="password"
                            />
                        </div>
                        <div>
                            <label htmlFor="verifypassword"></label>
                            <input
                                placeholder="Verify Password" //required
                                name="verifypassword"
                                type="password"
                            />
                        </div>
                        <div className="errorMsg">
                            {invalid ? 'try again' : null}
                        </div>
                        <div className="loginButtons">
                            <button className="loginButton">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
