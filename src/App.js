import {BrowserRouter as Router, Routes, Route,Link} from  "react-router-dom"

import Dashboard from './components/Dashboard/Dashboard';
import BranchDetails from "./components/BranchDetails/BranchDetails";
import Customer from "./components/CustomerDetails/Customer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Branch from "./components/Branch/Branch";
import CustomerAccount from "./components/CustomerAccount/CustomerAccount";


function App() {
  return (
    <div className="App">

     
    
       
       <Router>
     


       {/* <Dashboard /> */}
        {/* <NavBar />  */}
      <Routes>


      <Route path="/login" element={<Login />} />
      <Route path="/branchs" element={<BranchDetails />} />
      <Route path="/customers" element={<Customer />} />
      <Route path="/add-customers" element={<CustomerAccount />} />
      <Route path="/add-branch" element={<Branch />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
     
      </Router> 
     
    
    </div>
  
  
    
  );
}

export default App;
