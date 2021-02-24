import React from 'react'

function MovieCard(props) {

  
  return (
    <div key={props.oneMovie_id} className="MovieCard">
      <h2>{ props.oneMovie.title}</h2>
      <p>Director: { props.oneMovie.director}</p>
      <p>Rating: {props.oneMovie.IMDbRating}</p>
      <button
        onClick={ () => { props.clickToDelete(props.oneMovie._id) } }
      >
        Delete
      </button>
    </div>
  )
}

export default MovieCard
