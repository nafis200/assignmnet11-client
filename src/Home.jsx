import { useLocation } from "react-router";



const Home = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div>
           <p>hellow world</p> 
        </div>
    );
};

export default Home;