
import './App.css'

import React, { useState } from "react";
import { database } from "./FirebaseConfig.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// The below repo was helpful for configuring the login UI
// https://github.com/AkajithAk/ReactUiYt/blob/main/src/PasswordLoginWithFirebase/FirebaseConfig.js

function Login() {
    const [login, setLogin] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type == "signup") {
            createUserWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    navigate("/discover");
                })
                .catch((err) => {
                    alert(err.code);
                    setLogin(true);
                });
        } else {
            signInWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    navigate("/discover");
                })
                .catch((err) => {
                    alert(err.code);
                });
        }
    };

    const handleReset = () => {
        navigate("/reset");
    }
    return (
        <div className="App">
            {/* Registration and login Screen */}
            <div className="row">
                <div
                    className={login == false ? "activeColor" : "pointer"}
                    onClick={() => setLogin(false)}
                >
                    SignUp
                </div>
                <div
                    className={login == true ? "activeColor" : "pointer"}
                    onClick={() => setLogin(true)}
                >
                    SignIn
                </div>
            </div>
            <h1>{login ? "SignIn" : "SignUp"}</h1>
            <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                <input name="email" placeholder="Email" />
                <br />
                <input name="password" type="text" placeholder="Password" />
                <br />
                <p onClick={handleReset}>Forgot Password?</p>
                <br />
                <button>{login ? "SignIn" : "SignUp"}</button>
            </form>
        </div>
    );
}
export default Login;