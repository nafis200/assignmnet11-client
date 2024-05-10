

import axios from "axios"
import { useEffect } from "react";

const axiossec = axios.create({
    baseURL: 'http://localhost:5008'
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