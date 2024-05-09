// import { useContext } from "react";
// import { AuthContext } from "./Authprovider";
import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const Navbar = () => {
  // const{users,logout} = useContext(AuthContext)

  const { users, logout } = useAuth();

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
      <li>
        {" "}
        <Link to="/">Assignment</Link>{" "}
      </li>

      {users?.email ? (
        <>
          <li>
            {" "}
            <Link to="/create">Create assignment</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/pending">Pending assignment</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/avatar" className="dropdown dropdown-bottom">
            <div className="dropdown dropdown-bottom">
            <div tabIndex={0}>Use avatar</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-52">
   
            <li><Link to="/my">My assignment</Link></li>
            </ul>
           </div>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <button onClick={handlelogout}>Log out</button>{" "}
          </li>{" "}
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>{" "}
          <li>
            {" "}
            <Link to="/registration">Sign Up</Link>{" "}
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
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
