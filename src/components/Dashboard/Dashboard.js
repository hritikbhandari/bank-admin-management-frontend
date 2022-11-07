import React from 'react';
import PropTypes from 'prop-types';
import './dashboard.css'
const Dashboard = props => {
    return (

  <div>
   <ul>
    <li><a  href="#">Customers</a></li>
    <li><a href="#">Branch-Details</a></li>
    <li><a href="#">Add-Customer</a></li>
    <li><a href="#">Add-Branch</a></li>
    <li class="logout"><a href="#">Logout</a></li> 
  </ul>  
  </div>    

    );
};

Dashboard.propTypes = {
    
};

export default Dashboard;