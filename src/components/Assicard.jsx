

import { NavLink } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import useHost from "./useHost";


const Assicard = ({data,items,setItems}) => {
    
    const {users} = useAuth()
    const loggedinemail = users?.email ? users?.email : 'null'
    const axiosSecure = useHost()
    
   
    const { title,
        description,
        marks,
        image,
        medium,
        Dates,
        email,
        _id} = data
        

        const handleDelete = id =>{
               if(loggedinemail !== email){
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "you cant delete another assignment"
                });
                return
               }
               const url = `/create/${id}`
               Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                  // fetch(`https://module-57-2.vercel.app/item/${id}`, {
                  //   method: "DELETE"
                  // })
                  //   .then((res) => res.json())
                  //   .then((data) => {
                  //     const reamining = items.filter((it) => it._id !== id);
                  //     console.log(reamining);
                  //     setItems(reamining);
                  //   });

                  axiosSecure.delete(url)
                  .then(res=>{
                     const data = res.data 
                     const reamining = items.filter((it) => it._id !== id);
                      console.log(reamining);
                      setItems(reamining);
                  })
          
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
          
             


        }
    return (
        <div>
      <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
      <figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        /> 
      </figure>
      <div className="card-body">
     <h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight">Title:</span> {title}</h2> 
       <h2 className='font-bold flex items-center gap-2'>  marks <span className='text-red-500'>{marks}</span> </h2>
       <h2 className='font-bold flex items-center gap-2'> <span className="flex items-center gap-2">  <span className="text-orange-400">Difficulty level</span>  </span> {medium}</h2> 

      <NavLink to ={`/updatelist/${_id}`}> <button className='btn btn-success'>Update Assignment</button> </NavLink>
      <NavLink><button onClick={()=>(handleDelete(_id))} className='btn btn-warning'>delete Assignment</button></NavLink>
      <NavLink to={`/view/${_id}`}> <button className='btn btn-primary'>View Assignment</button> </NavLink>
    
      </div>
      
    </div>
    </div>
    );
};

export default Assicard;