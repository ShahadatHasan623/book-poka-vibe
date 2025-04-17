import React from 'react';
import bookimage from '../../assets/pngwing .png'
const Banner = () => {
    return (
        <div className='flex p-20 w-full mx-auto gap-2 items-center justify-around bg-slate-200 rounded-2xl my-15'>
            <div className='space-y-5'>
                <h1 className='text-5xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white text-xl'>View The List</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;