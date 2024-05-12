

import { NavLink } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import useHost from "./useHost";
import { Slide } from 'react-awesome-reveal'

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
             
                if (result.isConfirmed) {
                  // fetch(`https://module-57-2.vercel.app/item/${id}`, {
                  //   method: "DELETE"
                  // })
                  //   .then((res) => res.json())
                  //   .then((data) => {
                  //     const reamining = items.filter((it) => it._id !== id);
                  
                  //     setItems(reamining);
                  //   });

                  axiosSecure.delete(url)
                  .then(res=>{
                     const data = res.data 
                     const reamining = items.filter((it) => it._id !== id);
                     
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
      <Slide direction={'down'}>
      <figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        /> 
      </figure>
      </Slide>
      <div className="card-body">
      <Slide direction={'left'}><h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight">Title:</span> {title}</h2> </Slide>
       <Slide direction={'right'}><h2 className='font-bold flex items-center gap-2'>  marks <span className='text-red-500'>{marks}</span> </h2></Slide>
       <Slide direction={'left'}><h2 className='font-bold flex items-center gap-2'> <span className="flex items-center gap-2">  <span className="text-orange-400">Difficulty level</span>  </span> {medium}</h2></Slide> 

      <Slide direction={'up'}><NavLink to ={`/updatelist/${_id}`}> <button className='btn btn-success'>Update Assignment</button> </NavLink></Slide>
      <Slide direction={'down'}><NavLink><button onClick={()=>(handleDelete(_id))} className='btn btn-warning'>delete Assignment</button></NavLink></Slide>
      <Slide direction={'left'}><NavLink to={`/view/${_id}`}> <button className='btn btn-primary'>View Assignment</button> </NavLink>
    </Slide>
      </div>
      
    </div>
    </div>
    );
};

export default Assicard;