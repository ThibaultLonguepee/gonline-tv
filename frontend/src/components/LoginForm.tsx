import { ChangeEvent, FormEvent, useState } from "react"
import { Authenticate } from "../../wailsjs/go/main/App"

export default function LoginForm({ onSuccess }: { onSuccess: () => void }) {

    const [state, setState] = useState({
        status: "",
        url: "",
        username: "",
        password: ""
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event: FormEvent) {
        Authenticate(state.url, state.username, state.password)
            .then(onSuccess)
            .catch(() => {
                setState(prevState => {
                    return {
                        ...prevState,
                        status: "Failed to authenticate ❌"
                    }
                })
            })
        event.preventDefault()
    }

    return (
        <div className='login-form-container'>
            <div className='login-form-card'>
                <div className='login-form-top'>
                    <span className='login-form-title'>Welcome back</span>
                    <span className='login-form-subtitle'>Enter your credentials below</span>
                </div>
                {
                    state.status != "" && <span className='login-form-error'>{state.status}</span>
                }
                <form onSubmit={handleSubmit}>
                    <input type='text' name='url' value={state.url} onChange={handleChange} placeholder='Server URL'/>
                    <input type='text' name='username' value={state.username} onChange={handleChange} placeholder='Username'/>
                    <input type='password' name='password' value={state.password} onChange={handleChange} placeholder='Password'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}