import { useContext, useEffect } from "react";
import { AuthContext } from "./Authprovider";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useHost from "./useHost";
import Swal from "sweetalert2";
const Create = () => {

    const [startDate, setStartDate] = useState(new Date());

    const axiosSecure = useHost()
    const {users} = useContext(AuthContext)

    

    const handleSubmit = e=>{
         e.preventDefault();
         const form = e.target
         const medium = form.difficulty.value 
         const Dates = form.date.value
         const title = form.title.value 
         const description = form.description.value 
         const marks = form.marks.value
         const image = form.thumbnail.value 
         const email = users?.email
         
         const totalValue = {
              title,
              description,
              marks,
              image,
              medium,
              Dates,
              email
         }
         

        
         const url = `/create`
         axiosSecure.post(url,totalValue)
         .then(res=>{
          
          Swal.fire({
            title: "Added!",
            text: "Your file has been Added.",
            icon: "success"
          });
    })
      e.target.reset()
    }
  return (
    <div className="hero min-h-screen bg-base-200  bg-[url('https://i.postimg.cc/C1qvq4JS/pexels-photo-949587.jpg')]">
       
      <form onSubmit={handleSubmit} className="card-body">
        {/* 1st input */}
        <h2 className="text-2xl text-white text-center">Create assignment</h2>
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
          <div className="">
            <label className="label">
              <span className="label-text text-white">title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="title"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <input
              type="text"
              placeholder="description"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="description"
              required
            />
          </div>
        </div>
        {/* 2nd input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
          <div className="">
            <label className="label">
              <span className="label-text text-white">Marks</span>
            </label>
            <input
              type="text"
              placeholder="marks"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="marks"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-white">thumbnail Image URL</span>
            </label>
            <input
              type="text"
              placeholder="thumbnail Image URL"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="thumbnail"
              required
            />
          </div>
        </div>
        {/* 3rd input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
          <div className="">
            <label className="label">
              <span className="label-text text-white">Select difficulty</span>
            </label>
            <select className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px] " name="difficulty" required>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-white">Date</span>
            </label>
            <DatePicker name="date" className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            className="lg:mt-4 md:mt-4 mt-2 btn btn-primary w-3/4 lg:ml-16"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
