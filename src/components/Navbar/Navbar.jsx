import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import auth from '../../Firebase/firebase.init'

const Navbar = () => {
    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider()

    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/listedBooks'>Listed Book</NavLink></li>
            <li><NavLink to='/readPage'>Page to Read</NavLink></li>
        </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {/* Dynamic value / list items */}
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">BookVibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user &&
                    <div className='flex items-center gap-5'>
                        <img className='rounded-full h-14' src={user.photoURL} alt="" />
                        <div>
                            <h3>{user.displayName}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                }
                {
                    user ?
                        <a onClick={handleSignOut} className="btn btn-accent text-white">Sign Out</a> :
                        <a onClick={handleGoogleAuth} className="btn btn-success mx-4 text-white">Sign In</a>
                }

            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar