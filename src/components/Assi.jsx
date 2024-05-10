

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Assi = () => {
    const [items, setItems] = useState(0);
    const Sortfunction = (check) =>{
        let datacard = [...items]
        if(check === "des"){
            datacard.sort((a,b)=>a.average_cost - b.average_cost)
        }
        console.log(datacard);
        setItems(datacard)
    }
    return (
        <div>
            <section className="container mx-auto flex justify-center">
        <div className="dropdown dropdown-bottom ">
          <div tabIndex={0} role="button" className="btn m-1 bg-blue-400 text-center lg:w-[100px] p-2 text-white mt-5">
            <span className=" flex items-center gap-2">Filter by difficulty <IoIosArrowDropdown className="lg:text-2xl"></IoIosArrowDropdown> </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={()=>Sortfunction('Easy')}>easy</a>
            </li>
            <li>
              <a onClick={()=>Sortfunction('Medium')}>Medium</a>
            </li>
            <li>
              <a onClick={()=>Sortfunction('Hard')}>Hard</a>
            </li>
           
          </ul>
        </div>
      </section> 
        </div>
    );
};

export default Assi;