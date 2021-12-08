import "./login.css"
import { useState } from "react"
import React, { useParams } from "react-router"
import useFetch from "../../useFetch"

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                    <form onSubmit={handleSubmit}
                    <div className="loginBox">
                        <input placeholder="Email" type="email" className="loginInput"value={email}
        onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="loginInput" />
                        <button className="loginButton" type="submit">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}