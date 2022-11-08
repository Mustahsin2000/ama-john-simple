import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'
const Login = () => {
    const [error,seterror] = useState(null);

    const navigate = useNavigate(); //sign in korar por kothay jabe

    
    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handlesubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        if(password.length < 6){
            seterror('pass should be 6 chacter');
            return;
        }
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true}); //sign in korar por kothay jabe
        })
        .catch(error=>console.error(error));
    }


    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form  onSubmit={handlesubmit}>  
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email"  name='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password"  name='password' required/>
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p>New to ama-john ?<Link to='/signup'>create new account</Link></p>
            <p className='errorr'>{error}</p>
        </div>
    );
};

export default Login;