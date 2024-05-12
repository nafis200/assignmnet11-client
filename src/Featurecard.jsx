import { Slide } from 'react-awesome-reveal'
const Featurecard = ({ data }) => {
  const { title, description, image } = data;
  return (
    <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
      <Slide direction={'down'}><figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        />
      </figure></Slide>
      <div className="card-body">
        <Slide direction={'left'}><h2 className="card-title mt-9">
          <span className="flex mb-7 lg:mb-7 md:mb-7"></span> {title}
        </h2> </Slide>
        <Slide direction={'right'}><p className="font-extralight">{description}</p></Slide>
      </div>
    </div>
  );
};

export default Featurecard;
