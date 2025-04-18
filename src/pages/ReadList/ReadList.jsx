import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../addToDB/addToDB";
import { CiLocationOn } from "react-icons/ci";
import { SiAffinitypublisher } from "react-icons/si";
import { MdInsertPageBreak } from "react-icons/md";


const ReadList = () => {
  const data = useLoaderData();
  const [readlist, setReadlist] = useState([]);
  const [sort,setSort]=useState("")
  useEffect(() => {
    const storedBook = getStoredBook();
    const convertedBook = storedBook.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedBook.includes(book.bookId)
    );
    setReadlist(myReadList);
  }, []);
  const handleSort =(type)=>{
        setSort(type)
        if(type==="pages"){
            const sortedByPage =[...readlist].sort((a,b)=>a.totalPages-b.totalPages);
            setReadlist(sortedByPage)
        }
        if(type==="rating"){
            const sortRating =[...readlist].sort((a,b)=>a.rating-b.rating)
            setReadlist(sortRating)
        }
  }
  return (
    <div>
      <div className="text-center bg-gray-400 p-5 rounded-2xl my-5">
        <h1 className="text-4xl font-bold">Books</h1>
      </div>
      <div className="dropdown dropdown-bottom dropdown-center flex justify-center">
        <button tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
          Sort By {sort?sort:""} ⬇️
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={()=>handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort("rating")}>Rating</a>
          </li>
        </ul>
      </div>
      <div className="my-15">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {readlist.map((books) => (
              <div className="card card-side bg-base-100 shadow-xl my-5 flex items-center p-5 mx-auto">
                <div className="bg-gray-200 w-39 rounded-2xl h-39 flex justify-center items-center">
                  <img className="h-30" src={books.image} />
                </div>
                <div className="card-body">
                  <h2 className="card-title">{books.bookName}</h2>
                  <div className="lg:flex md:flex items-center gap-5">
                    <h1 className="text-2xl font-bold">Tag</h1>
                    {books.tags.map((tag) => (
                      <button className="px-5 py-2 rounded-4xl text-xl font-semibold text-green-500 bg-gray-200">
                        #{tag}
                      </button>
                    ))}
                    <h1 className="text-xl text-gray-600 flex items-center gap-2">
                      <CiLocationOn size={25} />
                      your of Publishing :{books.yearOfPublishing}
                    </h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <h1 className="flex items-center gap-1">
                      <SiAffinitypublisher size={20} /> Publisher :{" "}
                      {books.publisher}
                    </h1>
                    <h1 className="flex items-center gap-1">
                      <MdInsertPageBreak size={20} />
                      Pages :{books.totalPages}
                    </h1>
                  </div>
                  <div className="border-t-1 border-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <h1 className="px-5 py-2 bg-amber-400 rounded-3xl text-black-800">
                      Category: {books.category}
                    </h1>
                    <h1 className="px-5 py-2 bg-amber-200 rounded-3xl text-black-800">
                      Rating: {books.rating}
                    </h1>
                    <button className="btn bg-green-500 border-none rounded-3xl text-xl text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
