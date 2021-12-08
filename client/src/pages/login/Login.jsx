import "./login.css"
import { useState } from "react"
import React, { useParams } from "react-router"
import useFetch from "../../useFetch"

export default function Login( {onLogin}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        })
          .then((r) => r.json())
          .then((user) => onLogin(user));
      }


    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Pokebook</h3>
                    <span className="loginDesc">Connect with like minded individuals and poke'em!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Email" className="loginInput" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder="Password" className="loginInput" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="loginButton" type="submit">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}