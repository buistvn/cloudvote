import React, { useState } from 'react';
import './Home.css';
import Register from './Register';
import Login from './Login';

const Home = (props) => {
    const [login, selectLogin] = useState(true);
    // 2)
    // Similar to how handAuth works, this function
    // acts as a median for the transport of data
    // to both the Login and Register components.
    // This is given the four parameters that are
    // relayed up the prop chain via using
    // handleAuth.
    // Using Redux would be another solution that
    // I did not want to implement for the sake of
    // time.
    const handleLogin = (id, user, token, status) => {
        // With the passed in controller function from
        // App, the Login and Register components can
        // obtain and relay the login/register credentials
        // up the data/state pipeline.
        //
        // Go to step 3, parts a and b, located in
        // Login and Register, respectively.
        props.handleAuth(id, user, token, status);
        props.history.push('/voting/about');
    };

    const showOptions = (e) => {
        console.log(e.target.textContent);
        selectLogin(!login);
        let q = document.querySelector('.question');
        if (e.target.textContent === 'Login') {
            e.target.textContent = 'Register';
            q.textContent = 'Need an account?';
        } else {
            e.target.textContent = 'Login';
            q.textContent = 'Have an account?';
        }
    };

    return (
        <div className="home">
            {login ? (
                <Register handleLogin={handleLogin} />
            ) : (
                <Login handleLogin={handleLogin} />
            )}
            <div className="helpMsgBtn">
                <p className="question">Have an account?</p>
                <button className="homeBtn" onClick={showOptions}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Home;
