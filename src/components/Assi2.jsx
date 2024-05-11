


const Assi2 = ({item}) => {
    const {image,title,description,status} = item
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h2>{description}</h2>
        </div>
    );
};

export default Assi2;