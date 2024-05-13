// import { useContext } from "react";
// import { AuthContext } from "./Authprovider";
import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";


const Navbar = () => {
  
  const { users, logout } = useAuth();

  let names = "unknown";
  let images = "https://i.postimg.cc/0N2Fs1LG/photo-2024-04-10-15-50-24.jpg";

  let names1 = "";
  let images1 = "";
  if (users) {
    const { displayName, photoURL } = users;
    console.log(displayName, photoURL);
    if (displayName) {
      names1 = displayName;
    }
    if (photoURL) {
      images1 = photoURL;
    }
  }
  if (names1) {
    names = names1;
  }
  if (images1) {
    images = images1;
  }



  const [mode, setMode] = useState(
    localStorage.getItem("lightmode") ? localStorage.getItem("lightmode") : "light"
  );

  const handlechange = (e) => {
    if (e.target.checked) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("lightmode", mode);
    const localTheme = localStorage.getItem("lightmode");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [mode]);

  const handlelogout = () => {
    logout()
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        
      });
  };
  const links = (
    <>
      <li>
        {" "}
        <input
          type="checkbox"
          onClick={handlechange}
          className="toggle toggle-success toggle-md mt-4 mr-2"
        />{" "}
      </li>
      <li>
        {" "}
        <Link className="mt-2" to="/">
          Home
        </Link>{" "}
      </li>

      <li>
        {" "}
        <Link className="mt-2" to="/assi">
          Assignment
        </Link>{" "}
      </li>

      {users?.email ? (
        <>
          <li>
            {" "}
            <Link className="mt-2" to="/create">
              Create assignment
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="mt-2" to="/assi1">
              Pending assignment
            </Link>{" "}
          </li>
          <li className="mt-1">
            <details>
             <summary>
             <div className=" w-10 h-10  ml-0 rounded-full " id="image">
                    <img
                      className=" mt-0 rounded-full ml-1"
                      alt="Tailwind CSS Navbar component"
                      src={images}
                    />
                  </div>
             </summary>
              <ul className="p-2 bg-base-100 rounded-t-none lg:p-8">
                <Link to="/my">
                  <span className="lg:p-8">My assignment attempt</span>
                </Link>
              </ul>
            </details>
          </li>
          <li>
            {" "}
            <button className="mt-2" onClick={handlelogout}>
              Log out
            </button>{" "}
          </li>{" "}
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink className="mt-2" to="/login">
              Login
            </NavLink>
          </li>{" "}
          <li>
            {" "}
            <Link className="mt-2" to="/registration">
              Sign Up
            </Link>{" "}
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
        <img
          className="h-24 w-24 ml-4"
          src="https://i.postimg.cc/tCYs3Ygp/302424953-491546976311439-2706882930290413380-n.png"
          alt=""
        />
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
