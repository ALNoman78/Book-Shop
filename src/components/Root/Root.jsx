import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { TailSpin } from 'react-loader-spinner'

const Root = () => {
    const navigation = useNavigation()
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                /> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    )
}

Root.propTypes = {}

export default Root