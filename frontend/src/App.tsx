import { useState } from 'react';
import './App.css';
import LoginForm from './pages/login/LoginForm';
import Home from './pages/home/Home';

function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    function handleLogin() {
        setLoggedIn(true)
    }

    return (
        <div id='app'>
            {
                loggedIn ? (
                    <Home />
                ) : (
                    <LoginForm onSuccess={handleLogin} />
                )
            }
        </div>
    )
}

export default App
