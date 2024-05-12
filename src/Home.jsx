import { useLocation } from "react-router";
import Banner from "./components/Banner";
import Feature from "./Feature";
import Faq from "./Faq";



const Home = () => {
    const location = useLocation()
    return (
        <div>
           <Banner></Banner>
           <Feature></Feature>
           <Faq></Faq>
        </div>
    );
};

export default Home;