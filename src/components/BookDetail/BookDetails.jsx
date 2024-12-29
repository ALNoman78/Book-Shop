import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { addToStoredReadList, addToStoredWishlist } from '../utility/addToDB'

const BookDetails = () => {
    const { bookId } = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }
    const book = data.find((bookDel) => bookDel.bookId === id);

    const { bookName, author, image, review,  rating, category, publisher, yearOfPublishing, tags, totalPages } = book
    // console.log(book);

    const handleMarkAsRead = (id) => {
        /**
         * 1. Understand what to store or save => bookId
         * 2. Where to store => database
         * 3. Array , List , Condition : 
         * 4. check if the  book is already in the read list .
         * 5. if not then added the book list.
         * 6.if yes, don't added the read book list.
         */
        
        addToStoredReadList(id)
    }
    const handleAddToWishList = (id) => {
        addToStoredWishlist(id)
    }
    return (
        <div className="flex w-full flex-col lg:flex-row my-8">
            <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
                <img src={image} className='h-[450px] md:p-8' alt="" />
            </div>
            <div className="card rounded-box grid  flex-grow m-8">
                <h2 className='text-4xl font-bold'>{bookName}</h2>
                <p className='text-lg font-medium text-[rgba(19,19,19,0.8)] mb-4'>By : {author}</p>
                <div>
                    <div className='border-t-2 mt-2'></div>
                    <div className="text-lg font-medium my-4">{category}</div>
                    <div className='border-b-2 mb-5'></div>
                </div>
                <h2 className='md:w-[550px] w-full text-wrap'><span className='font-bold text-lg'>Review</span>  : {review}</h2>
                <p className='my-4'>Tag :
                    {
                        tags.map((tags, idx) => <span key={idx} className="cursor-pointer ml-4 badge p-4 text-lg bg-[rgba(36,190,1,0.05)] font-medium text-[#23BE0A]">
                            {tags}
                        </span>)
                    }
                </p>
                <div className='border-b-2'></div>
                <div className='mt-4'>
                    <p className='text-[rgba(19,19,19,0.70)] mb-4 font-medium'> <span className='font-bold ml-4'>Number of Page : </span>{totalPages}</p>
                    <p className='text-[rgba(19,19,19,0.70)] mb-4 font-medium'> <span className='font-bold ml-4'>Published  :</span> {publisher}</p>
                    <p className='text-[rgba(19,19,19,0.70)] mb-4 font-medium'> <span className='font-bold ml-4'>Year of Publishing :</span> {yearOfPublishing}</p>
                    <p className='text-[rgba(19,19,19,0.70)] mb-4 font-medium'> <span className='font-bold ml-4'>Rating : </span>{rating}</p>
                </div>
                <div>
                    <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline mr-5'>Mark as Read</button>
                    <button onClick={() => handleAddToWishList(bookId)} className='btn btn-accent text-white'>Add to Wishlist</button>
                    <button onClick={handleNavigate} className='btn btn-error text-white ml-4'>Back</button>
                </div>
            </div>
        </div>
    )
}

BookDetails.propTypes = {}

export default BookDetails