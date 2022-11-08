import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Signup.css'
const Signup = () => {
    const [error,seterror] = useState(null);

    const {createUser} = useContext(AuthContext);

    const handlesubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(password.length < 6){
            seterror('pass should be 6 chacter');
            return;
        }

        if(password !== confirm){
         seterror('your pass did not match');
         return;
        }
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error(error));
    }

    return (
        <div className='form-container'>
        <h3 className='form-title'>sign Up</h3>
        <form  onSubmit={handlesubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email"  name='email' required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password"  name='password' required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password"  name='confirm' required/>
            </div>
            <input className='btn-login' type="submit" value="signUp" />
        </form>
        <p>Already have an account ?<Link to='/login'>Login</Link></p>
        <p className='errorr'>{error}</p>
    </div>
    );
};

export default Signup;