import React from 'react';

import './dashboard.css'
import { Link ,useNavigate } from "react-router-dom";
const Dashboard = props => {


  const navigate = useNavigate();
  const logout = () => {
    console.log("log out user")
    localStorage.removeItem('token-info');
    navigate("/")

  };
    return (
  <>
  {
   console.log(localStorage.getItem("token-info"))
  }
  <div>
   <ul>
   <li><Link to="/customers">Customers</Link></li> 
    <li><Link to="/branchs">Branch Details</Link></li>
    <li><Link to="/add-account">Add Account</Link></li>
    <li><Link to="/add-branch">Add Branch</Link></li>
    <li class="logout"><Link to="/" onClick={logout}>Logout</Link></li>

  </ul>  
  </div>    
  </>
    );
};

Dashboard.propTypes = {
    
};

export default Dashboard;