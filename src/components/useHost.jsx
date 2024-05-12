

import axios from "axios"
import { useEffect } from "react";

const axiossec = axios.create({
    baseURL: 'https://module63-2.vercel.app'
})

const useHost = () => {

    useEffect(()=>{
        axiossec.interceptors.response.use(res=> {
            
            return res
        })
    },[])

    return (
        axiossec
    );
};

export default useHost;