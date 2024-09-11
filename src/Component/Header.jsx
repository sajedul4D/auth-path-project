

import { Link, NavLink } from 'react-router-dom';


import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Provider';

const Header = () => {
  const {user,LogOut}=useContext(AuthContext);
  console.log(user);
  const handleLogOut=()=>{
    LogOut()
    .then(result=>{
      console.log(result.user);
    })
  }
  
    const link=<>
    
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    {
      user &&  <> <li><NavLink to="/review">Review</NavLink></li>
       <li><NavLink to="/update">Profile </NavLink></li> </>
    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 font-bold rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
   <Link to="/"><h2 className='font-poppins font-bold'><span className='text-2xl text-red-500'>Tour</span> <span className='text-3xl text-green-500'>_Zone</span></h2></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-bold px-1">
    {link}
    </ul>
  </div>
  
  <div className="navbar-end gap-5">
  { user ? <> <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">
  <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
    <img src={user?.photoURL ||"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }/>
  </div>
</div>

  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
  <li><a>{user?.displayName || "not found"}</a></li>
    <li><a onClick={handleLogOut}>Logout</a></li>
  </ul>
</div>
   </>
   :
  <Link to='/login'>
    <button  className="btn btn-sm">login</button>
  </Link>
   }

  
  </div>
  
  

</div>
    );
};

export default Header;