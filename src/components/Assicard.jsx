

import { NavLink } from "react-router-dom";

const Assicard = ({data}) => {
    const { title,
        description,
        marks,
        image,
        medium,
        Dates,
        email} = data
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

      <NavLink> <button className='btn btn-success'>Update Assignment</button> </NavLink>
      <NavLink> <button className='btn btn-warning'>delete Assignment</button> </NavLink>
      <NavLink> <button className='btn btn-primary'>View Assignment</button> </NavLink>
    
      </div>
      
    </div>
    </div>
    );
};

export default Assicard;