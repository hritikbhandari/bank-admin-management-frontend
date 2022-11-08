import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { getAllCustomer } from '../../Service';
import Dashboard from '../Dashboard/Dashboard';



const Customer = props => {

    const [customers, setCustomers] = useState([]);
    const [err, setError] = useState('');
    const dummyCustomers=[
        {
        "AccountNo":"C001",
        "customerNo":"1234",
        "branchId":"b001",
        "balance":"6000",
        "openingDate":"2022-7-11"
        },
        {
            "AccountNo":"C001",
        "customerNo":"1234",
        "branchId":"b001",
        "balance":"6000",
        "openingDate":"2022-7-11"
        }
    ];

    const init = async () => {

        try {
            let { data } = await getAllCustomer()
           
            setCustomers(data);
        } catch (err) {
            setError(err);
        }


       
    }

    useEffect(() => {
        init();
    }, []);

    const deleteCustomer = async id => {

      };
    return (
        <>

        <Dashboard/>
         <div className="container">
      <div className="py-4">
        <h1>Customer Details</h1>
        <table class="table border shadow table-hover">
          <thead class="thead-dark">
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
          {dummyCustomers.map((customer) => (
              <tr>
                <td>{customer.AccountNo}</td>
                <td>{customer.customerNo}</td>
                <td>{customer.branchId}</td>
                <td>{customer.balance}</td>
                <td>{customer.openingDate}</td>
                <td>
                 
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteCustomer()}
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