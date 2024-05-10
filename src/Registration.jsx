import { useContext } from "react";
import { AuthContext } from "./components/Authprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Registration = () => {

   const {createUser} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        createUser(email,password)
        .then(result =>{
           console.log(result.user)
           toast.success("successfully register");
        })
        .catch(error =>{
          toast.error(error.message);
        })
        
        
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200 bg-[url('https://i.postimg.cc/Y075n05X/1000-F-668433624-HGKul-Uw-Qjae-LV8-Xay-QYy6-F3-RCVQff-TGv.jpg')]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
           {/* <img src="https://i.ibb.co/T2cpBd5/888.jpg" alt="" /> */}
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Sign up!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" 
                name ="email"
                required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"
                name ="password"
                required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;