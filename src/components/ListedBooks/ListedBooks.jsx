import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../utility/addToDB';
import ReadList from '../ReadList/ReadList';

const ListedBooks = () => {
    const allBooks = useLoaderData()
    const [read , setReadBook] = useState([])

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map((id) => parseInt(id))

        // worst way to code this
        const readBookList = allBooks.filter((book , idx) => storedReadListInt.includes(book.bookId))

        setReadBook(readBookList)

    }, [])
    return (
        <div>
            <h3 className='md:text-4xl font-bold text-center bg-base-200 rounded-xl p-5 my-8'>Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read List : {read.length}</h2>
                    <div>
                        {
                            read.map((book , idx) => <ReadList key={idx} book={book}></ReadList>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

ListedBooks.propTypes = {}

export default ListedBooks