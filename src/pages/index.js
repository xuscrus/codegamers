
import React from 'react'
import gameCard from '../common/gameCard'
import games from '../data/games'

export default ({data}) => {
  return <div>
    {games.map(gameCard)}
  </div>
}
 
