import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-8'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'>
                {
                    books.map((book, idx) => <Book key={idx} data={book}></Book>)
                }
            </div>
        </div>
    )
}

Books.propTypes = {}

export default Books