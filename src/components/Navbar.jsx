// import { useContext } from "react";
// import { AuthContext } from "./Authprovider";
import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import { FaRegLightbulb } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  // const{users,logout} = useContext(AuthContext)

  const { users, logout } = useAuth();
  const [mode,setMode] = useState(() => localStorage.getItem('lightmode') || 'light')

  const handlechange = () =>{
    const oldmode = localStorage.getItem('lightmode')
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('lightmode', newMode);
  }

  const handlelogout = () => {
    logout()
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        console.log("logout error meesage", error.message);
      });
  };
  const links = (
    <>
     <li> <input type="checkbox" onClick={handlechange} className="toggle toggle-success toggle-md mt-4 mr-2" /> </li>
      <li>
        {" "}
        <Link className="mt-2" to="/">Home</Link>{" "}
      </li>

      <li> <Link className="mt-2" to="/assi">Assignment</Link> </li>

      {users?.email ? (
        <>
          <li>
            {" "}
            <Link className="mt-2" to="/create">Create assignment</Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="mt-2" to="/assi1">Pending assignment</Link>{" "}
          </li>
      <li className="mt-2">
        <details>
          <summary className="">
            user avatar
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none lg:p-8">
            <Link to="/my"><span className="lg:p-8">My assignment attempt</span></Link>
            
          </ul>
        </details>
      </li>
          <li>
            {" "}
            <button className="mt-2" onClick={handlelogout}>Log out</button>{" "}
          </li>{" "}
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink className="mt-2" to="/login">Login</NavLink>
          </li>{" "}
          <li>
            {" "}
            <Link className="mt-2" to="/registration">Sign Up</Link>{" "}
          </li>{" "}
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100  h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img className="h-24 w-24 ml-4" src="https://i.postimg.cc/tCYs3Ygp/302424953-491546976311439-2706882930290413380-n.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn hidden">Jwt</button>
      </div>
    </div>
  );
};

export default Navbar;
