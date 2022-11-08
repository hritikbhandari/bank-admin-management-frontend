import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import { getAllBranch } from '../../Service';
import Dashboard from '../Dashboard/Dashboard';




const BranchDetails = props => {
   

  const[branchs,setBranchs]=useState([]);
  const[err,setError]=useState('')


  const init=async()=>{
    try{
      let {data}=await getAllBranch();
      setBranchs(data)

    }
    catch(err)
    {
      setError(err)
    }
  }

  const dummyBranch=[
    {
    "BranchId":"b001",
    "BranchName":"Asif Ali Road",
    "BranchAddress":"Delhi",
    },
    {
      "BranchId":"b001",
      "BranchName":"Asif Ali Road",
      "BranchAddress":"Delhi",
      }
   
];

const deleteBranch = async id => {

};

    
    return (
      <>
      <Dashboard/>
          <div className="container">
      <div className="py-4">
        <h1>Branch Details</h1>
        <table class="table border shadow table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">BranchId</th>
              <th scope="col">Branch Name</th>
              <th scope="col">Branch Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {dummyBranch.map((branch) => (
              <tr>
                <td>{branch.BranchId}</td>
                <td>{branch.BranchName}</td>
                <td>{branch.BranchAddress}</td>
                
                <td>
                 
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteBranch()}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
       
      </div>
    </div>
      </>
      
    );
};

BranchDetails.propTypes = {
    
};

export default BranchDetails;

