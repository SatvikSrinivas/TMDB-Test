import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database, emalVal).then(data => {
            alert("A password reset link has been sent to your email.")
            navigate("/")
        }).catch(err => {
            alert(err.code)
        })
    }
    return (
        <div className="App">
            <h1>Forgot Password</h1>
            <p>Please enter the email associated with your account below:</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="email" /><br /><br />
                <button>Reset</button>
            </form>
        </div>
    )
}
export default ForgotPassword;