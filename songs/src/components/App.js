import React from 'react'
import { selectSong } from '../actions'
import SongList from './SongList'

const App = () => {
  console.log("hello")
  return (
    <div>
      <SongList />
    </div>
  )
}

export default App