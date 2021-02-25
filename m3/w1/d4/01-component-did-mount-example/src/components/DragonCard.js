import React from 'react'

function DragonCard(props) {
  const { dragonData } = props;
  return (
    <div key={dragonData.id}>
      <h3>{dragonData.name}</h3>
      <img src={dragonData.flickr_images[0]} width="250" alt="" />
    </div>
  )
}

export default DragonCard
