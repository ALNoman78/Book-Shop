import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ data }) => {
    const { bookId, bookName, author, image, review, totalPage, rating, category, publisher, yearOfPublishing, tags } = data
    console.log(data);
    return (
        <div className='p-3 md:p-0'>
            <div className="card shadow-xl border-emerald-500 border p-6">
                <figure className='bg-[#F3F3F3] w-full p-6 border border-base-200 h-[230px] object-cover'>
                    <img className='w-[150px] p-8'
                        src={image}
                        alt="Shoes" />
                </figure>

                <div className="card-body">
                    {/* <div className="card-actions">
                        <div className="badge p-4 text-lg bg-[rgba(36,190,1,0.05)] font-medium text-[#23BE0A]">Fashion</div>
                        <div className="badge p-4 text-lg bg-[rgba(36,190,1,0.05)] font-medium text-[#23BE0A]">Products</div>
                    </div> */}
                    <div className='card-actions'>
                        {
                            tags.map((tags, idx) => <div key={idx} className="cursor-pointer badge p-4 text-lg bg-[rgba(36,190,1,0.05)] font-medium text-[#23BE0A]">
                                {tags}
                            </div>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p className='text-lg font-medium text-[rgba(19,19,19,0.8)] mb-4'>By : {author}</p>
                    <div className='border-dashed border-t-2 border-[rgba(19,19,19,0.3)]'></div>
                    <div className='flex items-center justify-between'>
                        <p>{tags[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Book.propTypes = {}

export default Book