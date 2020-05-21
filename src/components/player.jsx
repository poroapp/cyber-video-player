import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const Video = styled.video`
    margin: 5px;
`

const Player = ({ src, type }) => {
    const videoRef = useRef(null)

    const play = () => {
        videoRef.current.play()
    }

    const pause = () => {
        videoRef.current.pause()
    }

    return (
        <Video width="620" ref={videoRef} onMouseEnter={play} onMouseLeave={pause} controls>
            <source
                src={src}
                type={type} />
        </Video>
    )
}

Player.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string,
}

export default Player
