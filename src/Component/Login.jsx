

import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Provider';
import { FaFacebookSquare ,FaGoogle} from "react-icons/fa";

const Login = () => {
  const {CreateLogin, logingoole,signWithFb}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  
    const handleLogin=e=>{
        e.preventDefault()
        const from=new FormData(e.currentTarget);
        const email=from.get('email');
        const password=from.get('password');
        console.log(email,password);
        CreateLogin(email,password)
         .then(result=>{
         console.log(result.user);
         navigate(location ?.state ? location.state : "/")
        })
       .catch(error=>{
         console.error(error)
         })
     }
     const handlegoogle=()=>{
      logingoole()
      .then(result=>{
        console.log(result.user);
        navigate(location ?.state ? location.state : "/")
      })
     }
     const handleSignWithFb=()=>{
      signWithFb()
      .then(result=>{
        console.log(result.user);
        navigate(location ?.state ? location.state : "/")
      })
     }
    
    return (
        <div>
          <h2 className='text-4xl font-poppins font-extrabold text-center'>Hurry up! Login Now</h2> <br />
          <div className="hero bg-base-200 min-h-screen">
          
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-poppins font-bold">Login now!</h1>
        <p className="py-6 font-poppins font-bold">
          hurry up! don’t waste your time choice your tourist place. <br /> How to viste any tourist place . you have no idea ? why are so late please login now!
  
        </p>
              
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
   
               <div className='flex mx-auto'> 
                <h2 className='mr-20'>Are you New?</h2>
               <h3 className='ml-3'><Link to="/register" className='text-center text-blue-300'>Crate a account</Link></h3>
               </div>
               <div>
                <h2 className='text-center text-xl font-bold'>Login with</h2>
                <div>
                <button onClick={handlegoogle} className='btn btn-outline w-full'> <FaGoogle></FaGoogle> Login with Google </button>
                <button onClick={handleSignWithFb} className="btn btn-outline w-full">
            <FaFacebookSquare></FaFacebookSquare>
          Login with FaceBook
          </button>
                </div>
               </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Login;