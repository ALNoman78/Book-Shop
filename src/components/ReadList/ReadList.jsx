import React from 'react'
import PropTypes from 'prop-types'

const ReadList = ({ book }) => {

    const { bookName, author, image, review, totalPage, rating, category, publisher, yearOfPublishing, tags, totalPages } = book

    return (
        <div className='md:m-5 '>
            <div className="card bg-base-100  shadow-xl md:flex-row flex-col gap-6">
                <figure className="md:p-10 md:w-[250px] h-auto w-10/12 mx-auto md:m-5 p-5 bg-base-200 ">
                    <img 
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-44" />
                </figure>
                <div className="card-body">
                    <h2 className='text-4xl font-bold'>{bookName}</h2>
                    <p className='text-lg font-medium text-[rgba(19,19,19,0.8)]'>By : {author}</p>
                    <p className='my-4'>Tag :
                        {
                            tags.map((tags, idx) => <span key={idx} className="cursor-pointer ml-4 badge p-4 text-lg bg-[rgba(36,190,1,0.05)] font-medium text-[#23BE0A]">
                                {tags}
                            </span>)
                        }
                    </p>
                    <p className='font-medium text-[15px]'>Publishing Data : {yearOfPublishing}</p>
                    <div className='flex items-center gap-6'>
                        <span className='font-medium'><span className='font-bold'>Page</span> : {totalPages}</span>
                        <span className='btn btn-error w-20'>{rating}</span>
                        <button className='btn btn-success rounded-xl text-white'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReadList.propTypes = {}

export default ReadList