import React,{useState} from 'react';
import PropTypes from 'prop-types';
import "./style.css"
import { useNavigate,Link } from 'react-router-dom';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Swal from 'sweetalert2'
import { adminLogin } from '../../Service';
const Login = props => {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    const navigate = useNavigate();
 
  const login = async (e) => {
    e.preventDefault();
    const userData = {
      userId,
      password,
    };
    try {
      const {status, data} = await adminLogin(userData);
      if(status === 200) {
          localStorage.setItem('token-info', JSON.stringify(userData));
          setIsLoggedin(true);
          setUserId('');
          setPassword('');
          navigate("/customers")
      }
    } catch (err) {
      if(err.response.status) {
        Swal.fire({
          title: "Bad Credentials, Please try again!",
          type: "failure", 
          confirmButtonText: 'Ok'
        }).then((result) => {  if (result.isConfirmed) { navigate("/login")}});
      }
    }
   
  };
 
 
    return (

    <>

    {!isLoggedin?(
    <div class="login-form">
    <div class="login">

    <h1 class="text-center">Bank Admin </h1>
    
    <form class="needs-validation">
        <div class="form-group was-validated ">
            <label class="form-label" for="email">UserId</label>
            <input class="form-control" type="text" id="email" 
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
            placeholder="userId"
            required />
        </div>
        <div class="form-group was-validated">
            <label class="form-label" for="password">Password</label>
            <input class="form-control" type="password" id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required />
        </div>
        <input class="btn btn-success w-100" type="submit" onClick={login} value="SIGN IN" />
    </form>
    </div>
</div>): (
          <>
           <h1>Please login here</h1>
           <Link to="/login" >Login Here</Link>
          </>
        )}
</>
    );
};

Login.propTypes = {
    
};

export default Login;