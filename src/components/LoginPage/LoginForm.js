import InputField from '../common/InputField'
import './LoginForm.css'
import { useState } from 'react'

export default function LoginForm(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        //TODO: reset input fields

        //TODO: if no matching credentials in database, send error.

        //TODO: if credentials exist, direct to calendar page
    }

    const handleAccountCreation = () => {
        //TODO: direct to account creation page or modal

        //TODO: Communicate with database to add a user account

        //TODO: If user account exists, warn user.

        //TODO: After account creation, bring back to this page.
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='form-container'>
            <div className='form-inputs'>
                <form onSubmit={handleSubmit}>
                    <InputField type='text' placeholder='Username or Email' onChange={handleChangeUsername}/>
                    <InputField type='password' placeholder='Password' onChange={handleChangePassword}/>
                    <button type='submit'>Log In</button>
                </form>
            </div>
            <div className='new-account'>
                <button onClick={handleAccountCreation}>Create New Account</button>
            </div>
        </div>
    )
}