


const Assi2 = ({item,items,setItems,ind}) => {
    console.log(items);
    const handleSubmut = e=>{
        e.preventDefault()
    }
    const {image,title,description,status,marks,Submittedemail} = item
    return (
        <tbody>
        <tr>
          <th>{ind + 1}</th> 
          <td>{title}</td> 
          <td>{marks}</td> 
          <td>{Submittedemail}</td> 
          <td> <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            give marks
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

          </td> 
        </tr>
       
      </tbody> 
    );
};

export default Assi2;