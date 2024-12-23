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
            <h2 className='text-4xl font-bold text-center my-8'>Books : {books.length}</h2>
            {
                books.map((book , idx) => <Book key={idx} data={book}></Book>)
            }
        </div>
    )
}

Books.propTypes = {}

export default Books