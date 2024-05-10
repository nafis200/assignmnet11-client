import { useLocation } from "react-router";
import Banner from "./components/Banner";
import Feature from "./Feature";



const Home = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div>
           <Banner></Banner>
           <Feature></Feature>
        </div>
    );
};

export default Home;