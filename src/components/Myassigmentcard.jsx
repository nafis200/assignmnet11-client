const Myassigmentcard = ({ data }) => {
    const {title, description, marks, image, medium, Dates,pdf,box,Submittedemail,email,obtainmarks,feedback,_id,status} = data
  return (
    <>
      <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
        <figure>
          <img
            className="w-[300px] lg:w-full md:w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-9">
            <span className="flex mb-7 lg:mb-7 md:mb-7"></span>{" "}
            <span className="font-extralight">Title:</span> {title}
          </h2>
          <h2 className="card-title">
            <span className="flex mb-7 lg:mb-7 md:mb-7"></span>{" "}
            <span className="font-extralight text-center">Assignment status</span> {status}
          </h2>
          <h2 className="font-bold flex items-center gap-2 text-center">
           Assignment marks <span className="text-red-500 text-center">{marks}</span>{" "}
          </h2>
          <h2 className="font-bold flex items-center gap-2 text-center">
           obtained marks  <span className="text-blue-500 text-center">{obtainmarks}</span>{" "}
          </h2>
          <h2 className="font-bold flex items-center gap-2 text-center">
           feedback: 
          </h2>
          <span className="text-blue-500 text-center">{feedback}</span>
        </div>
      </div>
    </>
  );
};

export default Myassigmentcard;
