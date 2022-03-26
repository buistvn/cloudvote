import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import VotingPage from './components/VotingPage';
import Home from './components/Home';
import './App.css';

const App = () => {
    const [authStatus, setAuthStatus] = useState(0);
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        console.log(`auth stat: ${authStatus}`);
    }, [authStatus]);

    // Main controller that enables the Login and
    // Register components to pass data/state up to the
    // parent components (App, Home, VotingPage)
    const handleAuth = (id, user, token, status) => {
        console.log(`
    From App {\n
        Id: ${id}
        User: ${user}\n  
        Token: ${token}\n  
        Status: ${status}\n
    }`);
        setId(id);
        setUser(user);
        setAuthStatus(status);
        setToken(token);
    };

    // 1)
    // Until the user provides credentials,
    // the Home component is rendered.
    //
    // go to step 2, located in Home.js
    return (
        <div className="backDrop">
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Home
                            {...props}
                            handleAuth={handleAuth}
                            auth={authStatus}
                        />
                    )}
                />
                <Route
                    exact
                    path="/voting/about"
                    render={(props) => (
                        <VotingPage
                            {...props}
                            id={id}
                            user={user}
                            token={token}
                            auth={authStatus}
                        />
                    )}
                ></Route>
                {user}
            </Switch>
        </div>
    );
};

export default App;
