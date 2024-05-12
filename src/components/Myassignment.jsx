import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Myassigmentcard from "./Myassigmentcard";



const Myassignment = () => {
    const axiosSecure = useAxiosSecure()
    const {users} = useAuth()
    const [items, setItems] = useState([]);
    
    
    const url = `http://localhost:5008/item?email=${users?.email}`
    useEffect(()=>{
        // fetch(url,{credentials:'include'})
        // .then(res => res.json())
        // .then(data=> setItems(data))
        axiosSecure.get(url)
        .then(res=>{
           setItems([...res.data])
        })
    },[url])
    console.log(items);


    return (
        <div>
            <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]" >
            {
                items.map((data,index)=> <Myassigmentcard data={data}></Myassigmentcard> )
            }
        </div>
        </div>
    );
};

export default Myassignment;