import React from 'react'
import PropTypes from 'prop-types'

const ErrorPage = props => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 place-items-center my-12 md:my-32'>
            <h2 className='text-5xl italic text-center'>ErrorPage</h2>
            <p className='text-center font-bold text-3xl'>Status 404</p>
        </div>
    )
}

ErrorPage.propTypes = {}

export default ErrorPage