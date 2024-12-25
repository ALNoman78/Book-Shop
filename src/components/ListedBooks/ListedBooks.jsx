import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from '../utility/addToDB';
import ReadList from '../ReadList/ReadList';

const ListedBooks = () => {
    //read list book
    const allBooks = useLoaderData()
    const [read, setReadBook] = useState([])

    // wishlist book 

    const allWishListBook = useLoaderData()
    const [wishlist, setWishList] = useState([])

    useEffect(() => {
        const wishListData = getStoredWishList()
        const storedListInt = wishListData.map((id) => parseInt(id));

        const wishListBook = allWishListBook.filter((book, idx) => storedListInt.includes(book.bookId))
        setWishList(wishListBook)
    }, [])
    // console.log(allWishListBook);

    // read list book

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map((id) => parseInt(id))

        // worst way to code this
        const readBookList = allBooks.filter((book, idx) => storedReadListInt.includes(book.bookId))

        setReadBook(readBookList)

    }, [])
    
    return (
        <div>
            <h3 className='md:text-4xl font-bold text-center bg-base-200 rounded-xl p-5 my-8'>Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read Books : {read.length}</Tab>
                    <Tab>Wishlist Books : {wishlist.length}</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='font-medium my-5 text-center'>Read List : {read.length}</h2>
                    <div>
                        {
                            read.map((book, idx) => <ReadList key={idx} book={book}></ReadList>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='font-medium text-center my-5'>Wishlist Book : {wishlist.length}</h2>
                    <div>
                        {
                            wishlist.map((book , idx) => <ReadList book={book} key={idx}></ReadList>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

ListedBooks.propTypes = {}

export default ListedBooks