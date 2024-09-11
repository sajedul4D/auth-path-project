import  {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaRegEye,FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/Provider';

const Register = () => {
   
     const {createUser,updateUserProfile}=useContext(AuthContext)
    const [debug, setDebug]=useState()
    const [success,setSuccess]=useState()
    const [show,setShow]=useState();
    const location=useLocation()
    const navigate=useNavigate();
    const make=location?.state || "/" ;
    
    const handleRegister=e=>{
        e.preventDefault()
        const from=new FormData(e.currentTarget);
        const name=from.get("name");
        const photo=from.get("photo")
        
        const email=from.get('email');
        const password=from.get('password');
        const confirm=from.get("confirm")
        console.log(name,photo ,email,password,confirm);

if(password.length <6){
 setDebug("please use must be 6 characters")
    return
}
if(password !== confirm){
    setDebug('password do not match')
    return
}
if(!/[a-z]/.test(password)){
    setDebug('please use lower case characters')
    return
  
    
  }
  if(!/[A-Z]/.test(password)){
    setDebug('please use Upper case characters')
    return
  
    
  }


        createUser(email,password)
        .then(()=>{
          updateUserProfile(name,photo)
      .then(()=>{
        setSuccess('your Registration successfully')
            navigate(make)
      })
            
           
        })
        .catch(error=>{
            console.error(error)
        })
        setDebug('');
        setSuccess('')
    }
    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control w-[600px]">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="Photo" placeholder="Photo" name='Photo' className="input input-bordered" required />
        </div>
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
          <input type={show ? "test" :"password"} placeholder="password" name='password' className="input input-bordered" required />
          <label className="label"> <span onClick={()=>setShow(!show)}>{! show ? <FaEyeSlash></FaEyeSlash> :<FaRegEye></FaRegEye>}</span>
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ConfirmPassword</span>
          </label>
          <input type="confirm" placeholder="confirmPassword" name='confirm' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
           
          <button className="btn btn-primary">Register</button>
        </div>  
       <div className='text-2xl font-bold text-center'>
       {debug && <span className='text-red-500'>{debug}</span>}
       {success && <span className='text-red-400'>{success}</span>}
       </div>
      </form>
      <div className='flex mx-auto '>
        <h2 className='mr-9'>Have an account?</h2>
        <h2 className='ml-64 text-2xl font-bold'><Link to="/login" className=" text-red-300 bottom-3">Login Now</Link></h2>
      </div>
    </div>
  </div>
</div>    );
};

export default Register;