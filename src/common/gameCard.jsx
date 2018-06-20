import React from 'react'

export default (game) => <div className="col m6">
    <div className="card" key={game.name}>
    <div className="card-image">
      <img src={game.photo} />
    </div>
    <div className="card-content">
      <span className="card-title">{game.name}</span>
      <p>{game.description}</p>
    </div>
    <div className="card-action ">
      <a href={game.site} target="_blank">Play</a>
    </div>
  </div>
</div>