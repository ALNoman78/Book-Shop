import React from 'react'
import PropTypes from 'prop-types'
import bannerImage from '../../assets/Book 1.png'

const Banner = props => {
    return (
        <div className="hero bg-[rgba(19,19,19,0.05)] md:p-20 rounded-xl mt-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

Banner.propTypes = {}

export default Banner