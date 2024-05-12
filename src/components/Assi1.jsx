import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Assi2 from "./Assi2";

const Assi1 = () => {
    
    const axiosSecure = useAxiosSecure()
    const {users} = useAuth()
    const [items, setItems] = useState([]);
    // const [filteredItems, setFilteredItems] = useState(items)
    
    const url = `http://localhost:5008/items`
    useEffect(()=>{
        // fetch(url,{credentials:'include'})
        // .then(res => res.json())
        // .then(data=> setItems(data))
        axiosSecure.get(url)
        .then(res=>{
           const filtered = res.data.filter(item => item.status === 'not completed')
           setItems([...filtered])
           
        })
    },[])
    return (
        
        <div>
          

          <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Assisgnment title</th> 
        <th>Assignment marks</th> 
        <th>examine name</th> 
        <th>button</th> 
      </tr>
    </thead> 
     
     {
        items.map((item,ind)=><Assi2 item={item} key={item._id}  items={items} setItems={setItems} ind={ind}></Assi2> )
     }
    
  </table>
</div>

        </div>
    );
};

export default Assi1;