import React, { useState } from "react"
import "./account-style.css"
//eslint-disable-next-line 
export default function (props) {

    const [accountNumber,setAccountNumber]=useState('');
    const [customerNumber,setCustomerNumber]=useState('');
    const [branchId,setBranchId]=useState('');
    const [openingBalance,setOpeningBalance]=useState([]);
    const [openingDate,setOpeningDate]=useState('');
    const [accountType,setAccountType]=useState([]);
    const [accountStatus,setAccountStatus]=useState([]);

    
        const BranchHandler=(selectedOption)=>{
            setBranchId(selectedOption);
            console.log("Branch Handle",selectedOption);
        }
        
        const StatusHandler=(selectedOption)=>{
            setAccountStatus(selectedOption);
            console.log("Acccount Status",selectedOption);
        }
        
        const accountTypeHandler=(selectedOption)=>{
            setAccountType(selectedOption);
            console.log("Branch Handle",selectedOption);
        }
        const Add={}
                             
   
    
    return (

        <div class="customer-form">
            <div class="customer">

                <h1 class="text-center">Add Customer</h1>

                <form class="needs-validation was-validated">
                    <div class="form-group ">
                        <label class="form-label">Account Number</label>
                        <input class="form-control" type="text"
                            onChange={(e)=>setAccountNumber(e.target.value)}
                            value={accountNumber}
                            placeholder="Account Number"
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Customer Number</label>
                        <input class="form-control" type="text"
                            onChange={(e)=>setCustomerNumber(e.target.value)}
                            value={customerNumber}
                            placeholder="Customer Number"
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Branch Id</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Choose</option>
                            <option value={branchId} onChange={BranchHandler}></option>
                         
                        </select>
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Opening Balance</label>
                        <input class="form-control" type="number" min="5000"
                              onChange={(e)=>setOpeningBalance(e.target.value)}
                              value={openingBalance}
                            placeholder="atleast 5000"
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Opening Date</label>
                        <input class="form-control" type="date"
                         
                         onChange={(e)=>setOpeningDate(e.target.value)}
                         value={openingDate}
                            required />
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Account Type</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Choose</option>
                            <option value={accountType} onChange={accountTypeHandler}></option>
                           
                        </select>
                    </div>
                    <div class="form-group ">
                        <label class="form-label">Account Status</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Choose</option>
                            <option value={accountStatus} onChange={StatusHandler}>Active</option>
                        
                        </select>
                    </div>
                    <input class="btn btn-success w-100" type="submit" onClick={Add} value="Add"  />
                </form>
            </div>
        </div>

    )
}
