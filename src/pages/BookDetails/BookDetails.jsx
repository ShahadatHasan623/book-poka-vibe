import React from "react";
import { BsListNested } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../addToDB/addToDB";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)
const BookDetails = () => {
  const { userId } = useParams();
  const bookid = parseInt(userId);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookid);
  const {
    image,
    bookName,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  const handleMarkAsRead =userId=>{

    // MySwal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success"
    // });
    toast("Wow so easy!");
    addToStoreDB(userId)
  }
  return (
    <div className="py-26 flex items-center gap-6 mx-auto w-full">
      <div className="bg-gray-200 h-170 w-100 flex justify-center items-center rounded-2xl">
        <img className="h-98" src={image} alt="" />
      </div>
      <div className="space-y-4 w-1/2 mx-auto">
        <h1 className="text-5xl font-semibold">{bookName}</h1>
        <div className="border-t-2 border-gray-300 "></div>
        <h3 className="text-gray-600 text-2xl font-semibold">{category}</h3>
        <div className="border-t-2 border-gray-300 "></div>
        <p>
          <span className="text-2xl font-semibold ">Review: </span>
          {review}
        </p>

        <div className="flex items-center gap-5">
          <span className="text-2xl font-bold">Tag</span>
          {tags.map((tag) => (
            <button className="bg-gray-200 px-6 py-2 rounded-4xl text-green-500 text-xl font-semibold">
              #{tag}
            </button>
          ))}
        </div>
        <div className="border-t-2 border-gray-300 "></div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
                <th>Number of Pages</th>
                <th>Publisher</th>
                <th>Year of Publishing:</th>
                <th>Rating:</th>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>{totalPages}</td>
                <td>{publisher}</td>
                <td>{yearOfPublishing}</td>
                <td>{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-t-2 border-gray-300 "></div>
        <button onClick={()=>handleMarkAsRead(userId)} className="btn btn-info m-2">Mark as read</button>
        <button className="btn btn-active btn-secondary m-2">Wishlist</button>
      </div>
      <ToastContainer />
    </div>
    
  );
};

export default BookDetails;
