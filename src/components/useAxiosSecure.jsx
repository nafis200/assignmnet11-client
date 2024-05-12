
import axios from "axios"
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
     baseURL: 'https://module63-2.vercel.app',
     withCredentials: true
})


const useAxiosSecure = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    useEffect( () =>{
 
         axiosSecure.interceptors.response.use(res=> {
            
            return res
        },

        error =>{
           
             if(error.response.status === 401 || error.response.status === 403){
                
               //  logout()
               //  .then(()=>{
               //       navigate('/login')
               //  })
               //  .catch(error => {
               //      
               //  })
             }
        }
    
       )

    },[])

    return (
         axiosSecure
    );
};

export default useAxiosSecure;