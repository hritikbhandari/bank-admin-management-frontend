import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";

NavBar.propTypes = {
    
};

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                <NavLink className="navbar-brand" to="/">
          Admin
        </NavLink>
         <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/customers">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/branchs">
                Branch Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/add-customer">
                Add Customer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/add-branch">
                Add Branch
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">Logout</Link>
      </div> 
    </nav>
    
    );
}

export default NavBar;