import React from 'react';
import PropTypes from 'prop-types';
import './dashboard.css'
import { Link ,useNavigate } from "react-router-dom";
const Dashboard = props => {


  const navigate = useNavigate();
  const logout = () => {
    console.log("log out user")
    localStorage.removeItem('token-info');
    navigate("/login")

  };
    return (

  <div>
   <ul>
   <li><Link to="/customers">Customers</Link></li> 
    <li><Link to="/branchs">Branch Details</Link></li>
    <li><Link to="#">Add Customer</Link></li>
    <li><Link to="#">Add Branch</Link></li>
    {/* <li class="logout"><button type="button" class="btn btn-outline-dark" onClickCapture={logout}>logout user</button></li> */}
    <li class="logout"><Link to="/login" onClick={logout}>Logout</Link></li>

  </ul>  
  </div>    

    );
};

Dashboard.propTypes = {
    
};

export default Dashboard;