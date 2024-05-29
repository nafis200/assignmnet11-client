import { useParams } from "react-router";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";
import axios from "axios"
import Swal from "sweetalert2";

const Recheck = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `https://module63-2.vercel.app/items`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      const filtered = res.data.filter((item) => item._id === id);
      setItems(...filtered);
    });
  }, []);
  const {
    title,
    description,
    marks,
    image,
    medium,
    Dates,
    pdf,
    box,
    Submittedemail,
    email,
    obtainmarks,
    feedback,
    _id,
    status
  } = items;

  const handleSubmut = (e) => {
    e.preventDefault();

    const form = e.target;
    const pdf = form.link.value;
    const box = form.box.value;
    const status = "not completed";
    const obtainmarks = "not published";
    const feedback = "no published";
    const totalvalue = {
      title,
      description,
      marks,
      image,
      medium,
      Dates,
      pdf,
      box,
      status,
      Submittedemail,
      email,
      obtainmarks,
      feedback
    };

    axios.patch(`https://module63-2.vercel.app/newitem/${_id}`, totalvalue)
    .then((res) => {

        Swal.fire({
            title: "Recheck!",
            text: "Recheck successfully done.",
            icon: "success"
          });

    });

    e.target.reset();
  };

  return (
    <div>
      <h2 className="text-2xl text-center">Recheck again</h2>
      <div className="mt-5">
        <div className="hero  bg-base-200">
          <div className="hero-content ">
            <div className=" w-full shadow-2xl bg-base-100">
              <form className="p-12" onSubmit={handleSubmut}>
                <input
                  type="text"
                  placeholder="pdf link"
                  className="input input-bordered w-full  mt-5 p-4"
                  name="link"
                  required
                />
                <br />
                <textarea
                  placeholder="what is your problem write down"
                  className="textarea textarea-bordered textarea-sm w-full mt-5 p-4"
                  name="box"
                  required
                ></textarea>
                <input
                  type="submit"
                  className="lg:mt-4 md:mt-4 mt-2 btn btn-primary w-full"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recheck;
