import React from "react";
export default function(props)
{
    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Global Bank Admin Login Page</h3>
                        <label>Enter the branch id   </label>
                        <input type="text" required/><br/>
                        <label>Enter the branch name</label>
                        <input type="text" required/><br/>
                        <label>Enter the branch address</label>
                        <input type="text" required/><br/>
                        <button type="submit" >submit</button>
                </div>
            </form>
        </div>
    )
}