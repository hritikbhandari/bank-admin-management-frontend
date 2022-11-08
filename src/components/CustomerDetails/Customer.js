import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { deleteCustomerAccount, getAllCustomerAccount } from '../../Service';
import Dashboard from '../Dashboard/Dashboard';



const Customer = props => {

    const [customerAccounts, setCustomerAccounts] = useState([]);
    const [err, setError] = useState('');
    const [loadFlag, setLoadFlag] = useState(true);
    

    const loadData = async () => {
        try {
            const {status, data} = await getAllCustomerAccount();
            if(status === 200)
            setCustomerAccounts(data);
        } catch (err) {
            setError(err);
        }
    }

    useEffect(() => {
      if(loadFlag) {
        loadData();
        setLoadFlag(false);
      }
    }, [loadFlag]);

    const deleteAccountHandler = async (id) => {
      console.log(id);
      const {status, data} = await deleteCustomerAccount(id);
      if(status === 200) {
        setLoadFlag(true);
      }
      else {
        alert(data);
      }
    };

    return (
        <>

        <Dashboard/>
         <div className="container">
      <div className="py-4">
        <h1>Customer Details</h1>
        <table className="table border shadow table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">AccountNo</th>
              <th scope="col">CustomerNo</th>
              <th scope="col">BranchId</th>
              <th scope="col">Balance</th>
              <th scope="col">OpeningDate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {customerAccounts.map((account) => (
              <tr key={account.accountNumber}>
                <td>{account.accountNumber}</td>
                <td>{account.customer.customerNumber}</td>
                <td>{account.branchId}</td>
                <td>{account.openingBalance}</td>
                <td>{account.accountOpeningDate}</td>
                <td>
                 
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteAccountHandler(account.accountNumber)}
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

Customer.propTypes = {
    
};

export default Customer;