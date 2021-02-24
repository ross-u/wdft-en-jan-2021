import React from 'react'

function ImprovedMovieCard(props) {


  return (
    <div key={props.oneMovie._id} className="MovieCard">
  
      
      <h2>{ props.oneMovie.title}</h2>
      <p>Director: { props.oneMovie.director}</p>
      <p>Rating: {props.oneMovie.IMDbRating}</p>

      {/* Using ternary operator */}
      {
        props.oneMovie.hasOscars
          ? (
            <div>
              <p>Got the Oscar Award!!!!</p>
            </div>  
            )
          : (
            <div>
              <p>Great movie but no Oscars! 😔</p>
            </div>
            )
      }

      {/* Using && short circuit evaluation */}
      { props.oneMovie.hasOscars && <p>Got the Oscar Award!!!!</p>}
      { !props.oneMovie.hasOscars && <p>Great movie but no Oscars! 😔</p>}



      <button
        onClick={() => { props.clickToDelete(props.oneMovie._id) }}
      >
        Delete
      </button>
    </div>
  )
}

export default ImprovedMovieCard
