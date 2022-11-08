import React,{useState} from "react";
import Select from "react-select";

import {useNavigate} from "react-router-dom"
import { createBranch, getAllBranch } from "../../Service";
export default function(props)
{

    const[branchId,setBranchId]=useState('');
    const[branchName,setBranchName]=useState('')
    const[branchAddress,setBranchAddress]=useState('')
    const[allBranch,setAllBranch]=useState('')
    const[err,setError]=useState('')
    const navigate=useNavigate();
    
    const options=[
        {value:"Delhi",label:"Delhi"},
        {value:"Mumbai",label:"Mumbai"},
        {value:"Bangalore",label:"Bangalore"}

    ];

    const handleChange=(selectedOption) =>
    {
        setBranchAddress(selectedOption)
            console.log("handleChange",selectedOption);
    }

    const init=async()=>{
        try{
          let {data}=await getAllBranch()
          setAllBranch(data)
    
        }
        catch(err)
        {
          setError(err)
        }
      }

    
    const addBranch = async(e) => {

        e.preventDefault();
        console.log(branchId);
        console.log(branchAddress);
        console.log(branchName);
        const branchData = {
          branchId,
          branchName,
          branchAddress
        };
        
        try{
            let {data}=await createBranch(branchData)
            console.log(data)
            
      
          }
          catch(err)
          {
            setError(err)
          }
        }
    

    


    return(


        <div class="login-form">
        <div class="login">
    
        <h1 class="text-center">Branch Deatils</h1>
        
        <form class="needs-validation" novalidate>
            <div class="form-group was-validated">
                <label class="form-label" for="branchId">BranchId</label>
                <input class="form-control" type="text" id="branchId" 
                onChange={(e) => setBranchId(e.target.value)}
                value={branchId}
                placeholder="branchId"
                required />
            </div>
            <div class="form-group was-validated">
                <label class="form-label" for="branchName">BranchName</label>
                <input class="form-control" type="text" id="branchName" 
                onChange={(e) => setBranchName(e.target.value)}
                value={branchName}
                placeholder="branchName"
                required />
            </div>

            <div class="form-group was-validated">
                <label class="form-label" for="branchAddress">Branch Address</label>
                <Select options={options}  onChange={handleChange}></Select>
            </div>
            <input class="btn btn-success w-100" type="submit" onClick={addBranch} value="SUBMIT" />
        </form>
        </div>
    </div>


    )
}