import React from "react"
//eslint-disable-next-line 
export default function(props)
{
    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Global Bank Admin Login Page</h3>
                    <label>AccountNo</label>&nbsp;&nbsp;&nbsp;
                        <input type="text" required/><br/>
                    <label>CustomerNo</label>&nbsp;&nbsp;&nbsp;
                        <input type="text" required/><br/>
                    <label>BranchId</label>&nbsp;&nbsp;&nbsp;
                        <input type="text" required/><br/>
                    <label>balance</label>&nbsp;&nbsp;&nbsp;
                        <input type="text" name="balanceamount" required/><br/>
                    <label>Opening Date</label>&nbsp;&nbsp;&nbsp;
                        <input type="text" required/><br/>
                    <button type="Submit">submit</button>
                </div>
            </form>
        </div>
    )
}