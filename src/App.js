import {BrowserRouter as Router, Routes, Route,Link} from  "react-router-dom"

import Navbar from './components/Links';
import Links from './components/Links';
import Dashboard from './components/Dashboard/Dashboard';
import BranchDetails from "./components/BranchDetails/BranchDetails";

function App() {
  return (
    <div className="App">
    


      
      <Router>
     


      
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/branch" element={<BranchDetails />} />
      <Route path="/customer" element={<BranchDetails />} />
      </Routes>
     
      </Router>
     
    
    </div>
  
  
    
  );
}

export default App;
