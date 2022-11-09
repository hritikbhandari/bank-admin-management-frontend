import React, { useState, useEffect } from "react"
import "./account-style.css";
import Select from "react-select";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";
import { getAllBranch, createAccount } from "../../Service";
//eslint-disable-next-line 
export default function (props) {

    const [accountNumber,setAccountNumber]=useState('');
    const [customerNumber,setCustomerNumber]=useState('');
    const [branchId,setBranchId]=useState([]);
    const [openingBalance,setOpeningBalance]=useState('');
    const [openingDate,setOpeningDate]=useState('');
    const [accountType,setAccountType]=useState([]);
    const [accountStatus,setAccountStatus]=useState([]);
    const [options, setOptions] = useState([]);
    const[err,setError]=useState('')
    const navigate = useNavigate();
    
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
        const init=async()=>{
            const tempAccountType = ["Savings, Current"];
            setAccountType(tempAccountType);
            const tempAccountStatus = ["Active", "Inactive"];
            setAccountStatus(tempAccountStatus);
            try{
                let {data}= await getAllBranch();
                let tempBranchID = new Set();
                data.map(branch => {
                    tempBranchID.add(branch.branchId);
                });
                let tempOptions = [];
                [...tempBranchID].map(id => {
                    tempOptions.push({
                    "value": id,
                    "label": id
                    });
                })
                console.log(tempOptions)
                setOptions([...tempOptions]);
              }
              catch(err)
              {
                setError(err)
              }
          }
    
        useEffect(() => {
          init();
        }, []);


        const Add = async (e) => {
            e.preventDefault();

            const accountData = {
                accountNumber: parseInt(accountNumber),
                branchId: parseInt(branchId),
                openingBalance: parseInt(openingBalance),
                openingDate,
                accountStatus,
                accountType
            };
            console.log(accountData);
        
        try{
            // let {status} = await createAccount(customerNumber, accountData);
            // if(status === 201) {
            //   Swal.fire({
            //     title: "Account Details created successfully!",
            //     type: "success", 
            //     confirmButtonText: 'Ok'
            //   }).then((result) => {  if (result.isConfirmed) { navigate("/dashboard")}});
            //   setAccountNumber('');
            //   setCustomerNumber('');
            //   setOpeningDate('');
            //   setOpeningBalance('');
            // }
            
          }
          catch(err)
          {
            Swal.fire({
              title: err.response.data,
              type: "success", 
              confirmButtonText: 'Ok'
            }).then((result) => {  if (result.isConfirmed) { navigate("/add-branch")}});
          }
        };
                             
   
    
    return (

        <div class="login-form">
            <div class="login">

                <h1 class="text-center">Add Customer</h1>

                <form class="needs-validation">
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
                            <Select options={options}  onChange={BranchHandler}></Select>
                            {/* <option value={branchId} onChange={BranchHandler}></option> */}
                         
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
