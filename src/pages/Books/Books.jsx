import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-center p-6'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-3'>
                {
                    data.map(singleBooks=><Book singleBooks={singleBooks} key={singleBooks.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;