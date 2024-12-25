import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetails from './components/BookDetail/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import WishList from './components/WishlistBook/WishList';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      }, 
      {
        path : '/listedBooks',
        loader : () => fetch('/booksData.json'), // worst way to load some data
        element : <ListedBooks></ListedBooks>
      },
      {
        path : '/books/:bookId',
        // loader : ({params}) => fetch(`/booksData.json/${params.bookId}`),
        loader : () => fetch('/booksData.json'), // worst way to load some data
        element : <BookDetails></BookDetails>
      },
      {
        path : '/listBooks',
        loader : () => fetch('/booksData.json'),
        element : <WishList></WishList>
      }
      ,
      {
        path : '/dashboard',
        element : <Dashboard></Dashboard>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
