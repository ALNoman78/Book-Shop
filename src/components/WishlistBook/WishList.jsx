import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getStoredWishList } from '../utility/addToDB'
import { useLoaderData } from 'react-router-dom'

const WishList = () => {
    const allBooks = useLoaderData()
    const [wishlist, setWishList] = useState([])

    useEffect(() => {
        const wishListData = getStoredWishList()
        const storedListInt = wishListData.map((id) => parseInt(id));

        const wishListBook = allBooks.filter((book , idx) => storedListInt.includes(book.bookId))
        setWishList(wishListBook)
    }, [])
    console.log(allBooks);
    return (
        <div>

        </div>
    )
}

WishList.propTypes = {}

export default WishList