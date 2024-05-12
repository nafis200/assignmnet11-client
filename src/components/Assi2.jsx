import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";



const Assi2 = ({item,items,setItems,ind}) => {
    const axiosSecure = useAxiosSecure()
    
    const {title, description, marks, image, medium, Dates,pdf,box,Submittedemail,email,obtainmarks,feedback,_id,status} = item
    const [idea,setIdea] = useState(status)
    // console.log(item);
    const url = `/item/${_id}`
    const handleSubmut = e=>{
        e.preventDefault()
        const form = e.target;
        const  mark = form.obtainmark.value
        const feed = form.feedback.value     
        const totalvalue = {
          title, description, marks, image, medium, Dates,pdf,box,status,Submittedemail,email,mark,feed   
        }
        setIdea("completed")
        axiosSecure.patch(url,{
           status: 'completed',
           obtainmarks:mark,
           feedback:feed
        })
        .then(res =>{
           const data = res.data
           const filtered = items.filter(it=> it._id !== _id)
           setItems(filtered)
        })
    
        e.target.reset()
        
    }
    return (
        <tbody>
        <tr>
          <th>{ind + 1}</th> 
          <td>{title}</td> 
          <td>{marks}</td> 
          <td>{Submittedemail}</td> 
          <td> <button
            className="btn btn-primary"
            onClick={() => document.getElementById(_id).showModal()}
          >
            give marks
          </button>
          <section>
            <dialog
              id={_id}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Submission box</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <form onSubmit={handleSubmut}>
                  <h1 className={idea === "not completed" ? 'text-red-400 text-xl' : 'text-blue-400 text-2xl' }>status:{idea}</h1>
                 
                  <label htmlFor="">
                    <span className="text-xl">pdf link: </span>
                    <input className="ml-2 mt-3" type="text" defaultValue={pdf} />
                    <NavLink to={pdf} className='ml-2 text-blue-400 font-bold'>open the link</NavLink>
                  </label>
                   <br />
                  <label htmlFor="">
                     <span className="text-xl"><span className="mr-2">notes:</span> <span className="font-extralight">{box}</span> </span>
                     
                  </label>
                    <br />
                  <input
                    type="text"
                    placeholder="mark input field"
                    className="input input-bordered w-full max-w-xs mt-5"
                    name="obtainmark"
                    required
                  />
                  <br />
                  <textarea
                    placeholder="feedback field"
                    className="textarea textarea-bordered textarea-sm w-full max-w-xs mt-5"
                    name="feedback"
                    required
                  ></textarea>
                  <input type="text" defaultValue={_id} name="id" className="hidden"/>
                  <input
                    type="submit"
                    className="lg:mt-4 md:mt-4 mt-2 btn btn-primary w-3/4 lg:ml-16"
                    value="Submit"
                  />
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </section>

          </td> 
        </tr>
       
      </tbody> 
    );
};

export default Assi2;