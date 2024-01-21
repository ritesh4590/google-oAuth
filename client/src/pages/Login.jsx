import React from 'react'

const Login = () => {
    const loginwithgoogle = () => {
        window.open("http://localhost:8000/auth/google/callback", "_self")
    }
    return (
        <div>
            <button onClick={loginwithgoogle}>Login with google</button>
        </div>
    )
}

export default Login
