import { useLoaderData, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
const Viewassi = () => {
   
  const axiosSecure = useAxiosSecure()


  const data = useLoaderData();
  const navigate = useNavigate();
  const { users } = useAuth();

  const { title, description, marks, image, medium, Dates, email} = data;
  const handleSubmut = (e) => {
    e.preventDefault();

    const Submittedemail = users?.email
    const form = e.target;
    const pdf = form.link.value
    const box = form.box.value 
    const status = "not completed"
    const obtainmarks = 'not published'
    const feedback = "no published"
    const totalvalue = {
      title, description, marks, image, medium, Dates,pdf,box,status,Submittedemail,email,obtainmarks,feedback   
    }
    // console.log(totalvalue);

    axiosSecure.post('/item',totalvalue)
    .then(res=>{
      console.log(res.data)
    })

    e.target.reset()
  };
  return (
    <div className="card lg:w-96  w-72 bg-base-100 shadow-xl ml-7 lg:ml-[350px] md:ml-52 xl:ml-[580px]">
      <figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mt-9">{title}</h2>
        <p className="font-extralight">{description}</p>
        <h2 className="font-bold flex items-center gap-2">
          {" "}
          <span>Marks:</span> {marks}
        </h2>
        <h2 className="font-bold flex items-center gap-2">
          {" "}
          <span>Dificulty:</span>
          {medium}
        </h2>

        <h2 className="font-bold flex items-center gap-2">
          {" "}
          prepared By:{" "}
        </h2>
        <span className="font-bold">{email}</span>

        <div className="card-actions mt-2 ">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Take Assignmnet
          </button>
          <section>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Submission box</h3>
                {/* <p className="py-4">
                  Press ESC key or click the button below to close
                </p> */}
                <form onSubmit={handleSubmut}>
                  <input
                    type="text"
                    placeholder="pdf link"
                    className="input input-bordered w-full max-w-xs mt-5"
                    name="link"
                    required
                  />
                  <br />
                  <textarea
                    placeholder="quick note"
                    className="textarea textarea-bordered textarea-sm w-full max-w-xs mt-5"
                    name="box"
                    required
                  ></textarea>
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
        </div>
      </div>
    </div>
  );
};

export default Viewassi;