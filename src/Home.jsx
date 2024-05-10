import { useLocation } from "react-router";
import Banner from "./components/Banner";



const Home = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div>
           <Banner></Banner>
        </div>
    );
};

export default Home;