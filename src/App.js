import React, { useState} from 'react'

import './App.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    return (
        <div className="container">
            <input
                type='text'
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                // type='password'
                //Show / hide password in the input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <h1>{username}</h1>
            {/* If the showPassword is true then we display Show else
             we display * sign as man times as there are letters in the password */}
            <h1>{showPassword ? password : '*'.repeat(password.length)}</h1>
            <button onClick={(e) => {setShowPassword(!showPassword)}}>Show/Hide password</button>
        </div>
    )
}

export default App;
