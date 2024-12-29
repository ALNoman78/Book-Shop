import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }
    return (
        <div className='flex flex-col justify-center items-center gap-5 place-items-center my-12 md:my-32'>
            <img src="https://t3.ftcdn.net/jpg/01/01/89/46/360_F_101894688_RVSZUtDfPR6Cr5eBDQI7Qo5pZ01jmyK3.jpg" alt="" />
            <h2 className='text-5xl italic text-center'>ErrorPage</h2>
            <p className='text-center font-bold text-3xl'>Status 404</p>
            <button onClick={handleBackButton} className='btn btn-error'>Go Back</button>
        </div>
    )
}

ErrorPage.propTypes = {}

export default ErrorPage