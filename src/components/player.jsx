import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Video = styled.video`
    margin: 5px;
`

const Player = ({ src, type, width = '100%' }) => {
  const videoRef = useRef(null)

  const play = () => {
    videoRef.current.play()
  }

  const pause = () => {
    videoRef.current.pause()
  }

  return (
    <Video width={width} ref={videoRef} onMouseEnter={play} onMouseLeave={pause} controls>
      <source
        src={src}
        type={type}
      />
    </Video>
  )
}

Player.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string
}

export default Player
