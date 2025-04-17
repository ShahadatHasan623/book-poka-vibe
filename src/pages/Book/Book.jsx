import React from "react";
import { CiStar } from "react-icons/ci";
const Book = ({ singleBooks }) => {
  const { bookName, image, rating, category, tags,yearOfPublishing,publisher } = singleBooks;
  return (
    <div className="card bg-base-300 w-90 shadow-xl p-5 mx-auto">
      <figure className="p-4 bg-gray-300 w-3/3 mx-auto">
        <img className="h-[160px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
       <div className="flex items-center gap-3">
       {
          tags.map(tag=><button className="btn rounded-3xl bg-gray-200 border-none text-[#23BE0A] font-semibold">{tag}</button>)
        }
       </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p className="text-xl font-semibold">
          {publisher}
        </p>
        <div className="border-t-1 border-dashed"></div>
        <div className="card-actions justify-between flex items-center gap-3">
          <div className="text-xl">{category}</div>
          <div className="flex items-center text-xl">{rating}<CiStar /></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
