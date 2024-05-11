import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Assi2 from "./Assi2";

const Assi1 = () => {
    
    const axiosSecure = useAxiosSecure()
    const {users} = useAuth()
    const [items, setItems] = useState([]);
    
    const url = `http://localhost:5008/items?email=${users?.email}`
    useEffect(()=>{
        // fetch(url,{credentials:'include'})
        // .then(res => res.json())
        // .then(data=> setItems(data))
        axiosSecure.get(url)
        .then(res=>setItems(res.data))
    },[url,axiosSecure])
    return (
        
        <div>
          <h2 className="text-2xl">{items.length}</h2>
          <div>
            {
                items.map(item=> <Assi2 item={item}></Assi2> )
            }
          </div>
        </div>
    );
};

export default Assi1;