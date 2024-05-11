

import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import useHost from "./useHost";
import Assicard from "./Assicard";

const Assi = () => {
    const axiosSecure = useHost()
    const [items, setItems] = useState([]);
    const [store,setStore] =useState([])
    const url = `/create`
   
    useEffect(()=>{
     axiosSecure.get(url)
    .then(res => {
        setItems(res.data
        )
        setStore(res.data)
    })
    },[])
   

    const Sortfunction = (check) =>{
        // console.log(typeof(check));
        // items.map(data=>console.log((data.medium)))
        if(check == 'all'){
            setItems(store)
            return
        }
        const newCard = store.filter(data=> data.medium === check)
        setItems(newCard)
    }
    return (
        <div>
            <section className="container mx-auto flex justify-center">
        <div className="dropdown dropdown-bottom ">
          <div tabIndex={0} role="button" className="btn m-1 bg-blue-400 text-center lg:w-[100px] p-2 text-white mt-5">
            <span className=" flex items-center gap-2">Filter by difficulty <IoIosArrowDropdown className="lg:text-2xl"></IoIosArrowDropdown> </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={()=>Sortfunction('all')}>all</a>
            </li>
            <li>
              <a onClick={()=>Sortfunction('easy')}>easy</a>
            </li>
            <li>
              <a onClick={()=>Sortfunction('medium')}>Medium</a>
            </li>
            <li>
              <a onClick={()=>Sortfunction('hard')}>Hard</a>
            </li>
            </ul>
        </div>
      </section> 
      <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]" >
            {
                items.map((data,index)=> <Assicard data={data} items={items} setItems={setItems}></Assicard> )
            }
        </div>
        </div>
    );
};

export default Assi;