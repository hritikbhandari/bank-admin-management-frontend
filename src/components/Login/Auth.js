import React from "react"
export default function(props)
{
    return(
        <div className="Auth-form-container">
            <form className="Auth-form" action="Branch.js">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Global Bank Admin Login Page</h3>
                        <label>Enter the user id   </label>
                        <input type="text" required/><br/>
                        <label>Enter the password</label>
                        <input type="password" required/><br/>
                        <button type="submit">link</button>
                </div>
            </form>
        </div>
    )
}