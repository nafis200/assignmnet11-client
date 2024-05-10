import { useContext } from "react";
import { AuthContext } from "./Authprovider";

const Create = () => {
    const handleSubmit = e=>{
         e.preventDefault();
         const form = e.target
         const medium = form.difficulty.value 
         console.log(medium);
         
    }
  return (
    <div>
      <h2>Create assignment</h2>

      <form onSubmit={handleSubmit} className="card-body">
        {/* 1st input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
          <div className="">
            <label className="label">
              <span className="label-text">title</span>
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
              <span className="label-text">Description</span>
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
              <span className="label-text">Marks</span>
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
              <span className="label-text">thumbnail Image URL</span>
            </label>
            <input
              type="text"
              placeholder="thumbnail Image URL"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="thumbnail Image URL"
              required
            />
          </div>
        </div>
        {/* 3rd input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
          <div className="">
            <label className="label">
              <span className="label-text">Select difficulty</span>
            </label>
            <select name="difficulty" required>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {/* <div className="">
            <label className="label">
              <span className="label-text">average_cost</span>
            </label>
            <input
              type="number"
              placeholder="average_cost"
              className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
              name="average_cost"
              required
            />
          </div> */}
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
