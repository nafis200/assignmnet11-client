import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import useHost from "./useHost";
import Assicard from "./Assicard";
import { useLoaderData } from "react-router";

const Assi = () => {
  const axiosSecure = useHost();
  const [items, setItems] = useState([]);
  const [store, setStore] = useState([]);

  const { count } = useLoaderData();

  const [itemPerPages, setItemPerPages] = useState(count);
  const [currentPage, setCurrentPage] = useState(0);

  const numberofPages = Math.ceil(count / itemPerPages);

  const pages = [...Array(numberofPages).keys()];

  

  const url = `/create`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      // setItems(res.data);
      setStore(res.data);
    });
  }, []);

  useEffect(() => {
    fetch(`https://module63-2.vercel.app/products?page=${currentPage}&size=${itemPerPages}`)
        .then(res => res.json())
        .then(data => setItems(data))
}, [currentPage,itemPerPages]);

  const handleItemsperpages = e =>{
       
        const val = parseInt(e.target.value)
        setItemPerPages(val)
        setCurrentPage(0)
    }

    const handlePrevs = e =>{
            if(currentPage > 0){
              setCurrentPage(currentPage - 1)
            }
      }
      
      const handleNexts = ()=>{
           if(currentPage <pages.length - 1){
            setCurrentPage(currentPage + 1)
           }
      }




  const Sortfunction = (check) => {
    
    if (check == "all") {
      setItems(store);
      return;
    }
    const newCard = store.filter((data) => data.medium === check);
    setItems(newCard);
  };

  return (
    <div>
      <section className="container mx-auto flex justify-center">
        <div className="dropdown dropdown-bottom ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-blue-400 text-center lg:w-[100px] p-2 text-white mt-5"
          >
            <span className=" flex items-center gap-2">
              Filter by difficulty{" "}
              <IoIosArrowDropdown className="lg:text-2xl"></IoIosArrowDropdown>{" "}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => Sortfunction("all")}>all</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("easy")}>easy</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("medium")}>Medium</a>
            </li>
            <li>
              <a onClick={() => Sortfunction("hard")}>Hard</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {items.map((data, index) => (
          <Assicard data={data} items={items} setItems={setItems}></Assicard>
        ))}
      </div>

      <section className="text-center">
        <p className="mt-8">Current Page: {currentPage}</p>
        <button onClick={handlePrevs} className="btn mt-4">Prev</button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={currentPage === page && "bg-blue-400 btn"}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNexts} className="btn">Next</button>

        <select value={itemPerPages} onChange={handleItemsperpages} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="10">10</option>
        </select>
      </section>
    </div>
  );
};

export default Assi;
