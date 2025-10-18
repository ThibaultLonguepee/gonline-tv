import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    function handleLogin() {
        setLoggedIn(true)
    }

    return (
        <div id='app'>
            {
                loggedIn ? (
                    <></>
                ) : (
                    <LoginForm onSuccess={handleLogin} />
                )
            }
        </div>
    )
}

export default App
