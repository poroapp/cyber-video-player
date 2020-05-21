import React from 'react'
import { storiesOf } from '@storybook/react'

import Player from '../src/index.js'

const videos = {
    league_of_legends: "https://poro.sfo2.digitaloceanspaces.com/jefri/videos/gameplay.mp4",
    cyber_punk: "https://poro.sfo2.digitaloceanspaces.com/jefri/videos/cyberpunk_teaser.mp4"
}

const videoTypes = {
    mp4: "video/mp4"
}

storiesOf('Player', module).add('default league', () => <Player src={videos.league_of_legends} type={videoTypes.mp4} />)

storiesOf('Player', module).add('default cyberpunk', () => <Player src={videos.cyber_punk} type={videoTypes.mp4} />)