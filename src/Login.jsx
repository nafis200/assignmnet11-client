// import { useContext } from "react";
// import { AuthContext } from "./components/Authprovider";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import useAuth from "./components/useAuth";
import useAxiosSecure from "./components/useAxiosSecure";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  // const {signInUser} = useContext(AuthContext)
  const [errors,setErrors] = useState("")
  const { signInUser, signIngoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const user = { email };
        setErrors(' ')

        //  axios.post('http://localhost:5008/jwt',user,{withCredentials:true})

        axiosSecure.post("/jwt", user).then((res) => {
          console.log(res.data, "withcredential axiospost");
          console.log(res.data.success);
          if (res.data.success) {
            navigate(location?.state ? location?.state : "/");
          }
        });
        //  navigate(location?.state ? location?.state : '/')
      })
      .catch((error) => {
        setErrors("email password should be match");
        toast.error("email password should be match");
      });
  };
  const handlegoogle = () => {
    signIngoogle()
      .then((result) => {
        console.log(result.user);
        const user = result.user
        console.log(user);
        
        
      })
  };
  return (
    <>
     
      <div className="hero min-h-screen bg-base-200  bg-[url('https://i.postimg.cc/mkGsv8Hy/1000-F-767620795-dc-VEg9-TKd-QQ3-PO8km54pc-A5-C1pd-K87l-U.jpg')] ">
        <div className="hero-content flex-col lg:flex-row">
          {<div className="mr-12 w-1/2">
            {/* <img src="https://i.ibb.co/T2cpBd5/888.jpg" alt="" /> */}
          </div> }
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            
            <div className="space-y-2 mb-5 ml-4">
              <div className="form-control mt-1">
                <button
                  onClick={handlegoogle}
                  className="btn  font-bold bg-slate-300 w-3/4 ml-7"
                >
                  <span> 
                    <FaGoogle className="text-2xl"></FaGoogle>{" "}
                  </span>
                  login with google
                </button>

                <p className="text-center text-red-500">{errors}</p>
              </div>

    </div>


          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Login;
