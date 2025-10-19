import { ChangeEvent, FormEvent, useState } from "react"
import { Authenticate } from "../../wailsjs/go/main/App"
import styles from './LoginForm.module.css';

export default function LoginForm({ onSuccess }: { onSuccess: () => void }) {

    const [state, setState] = useState({
        status: "",
        url: "",
        username: "",
        password: ""
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event: FormEvent) {
        Authenticate(state.url, state.username, state.password)
            .then(onSuccess)
            .catch(() => {
                setState(prevState => ({
                    ...prevState,
                    status: "❌ Failed to authenticate",
                    password: ""
                })
                )
            })
        event.preventDefault()
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.top}>
                    <span className={styles.title}>👋 Welcome back</span>
                    <span className={styles.subtitle}>Enter your credentials below</span>
                </div>
                {
                    state.status != "" && <span className={styles.error}>{state.status}</span>
                }
                <form onSubmit={handleSubmit}>
                    <input type='text' name='url' value={state.url} onChange={handleChange} placeholder='Server URL' />
                    <input type='text' name='username' value={state.username} onChange={handleChange} placeholder='Username' />
                    <input type='password' name='password' value={state.password} onChange={handleChange} placeholder='Password' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}