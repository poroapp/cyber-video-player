import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Player = ({ className, src, type }) => {

    return (
        <video width="620" controls>
            <source
                src={src}
                type={type} />
        </video>
    )
}

Player.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    type: PropTypes.string,
}

export default Player
