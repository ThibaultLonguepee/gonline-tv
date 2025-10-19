import { useEffect, useState } from 'react';
import './App.css';
import LoginForm from './pages/login/LoginForm';
import Home from './pages/home/Home';
import { IsAuthenticated } from '../wailsjs/go/main/App'

function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    function handleLogin() {
        setLoggedIn(true)
    }

    useEffect(() => {
        IsAuthenticated()
            .then(result => setLoggedIn(result))
            .catch()
    }, [])

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
