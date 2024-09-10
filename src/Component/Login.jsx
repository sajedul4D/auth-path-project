

import { Link } from 'react-router-dom';


const Login = () => {
  
    const handleLogin=e=>{
        e.preventDefault()
        const from=new FormData(e.currentTarget);
        const email=from.get('email');
        const password=from.get('password');
        console.log(email,password);
    //     SignUser(email,password)
    //     .then(result=>{
    //       console.log(result.user)
    //     })
    //     .catch(error=>{
    //       console.error(error)
    //     })
    // }
    // const handleGoogle=()=>{
    //   GoogleLogin()
    //   .then(result=>{
    //     console.log(result)
    //   })
     
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
              <button className='btn btn-secondary w-full'>Google</button>
               <div className='flex mx-auto'> 
                <h2 className='mr-20'>Are you New?</h2>
               <h3 className='ml-3'><Link to="/register" className='text-center text-blue-300'>Crate a account</Link></h3>
               </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Login;