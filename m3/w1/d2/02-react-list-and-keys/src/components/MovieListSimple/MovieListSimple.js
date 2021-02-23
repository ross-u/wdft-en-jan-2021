import React, { Component } from 'react'

import data from '../../data';

class MovieList extends Component {
  state = {
    movies: data
  }


  handleDelete = (movieId) => {

    // Filter the movies from the state to remove one
    const filteredMovies = this.state.movies.filter((movie) => {

      if (movie._id !== movieId) {
        return true;  // include the movie in the new array
      }
      else if (movie._id === movieId) {
        return false; // exclude the movie from the new array
      }
      // a bit shorter way:
      // const isMovieToDelete = !movie._id === movieId;
      // return isMovieToDelete
    });

    this.setState({ movies: filteredMovies });

  }


  render() {
    return (
      <div>
        <h1>Movie List</h1>
        {this.state.movies.map((movie) => {
          return (
            <div key={movie._id} className="MovieCard">
              <h2>{ movie.title}</h2>
              <p>Director: { movie.director}</p>
              <p>Rating: {movie.IMDbRating}</p>
              <button
                onClick={() => { this.handleDelete(movie._id) }}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}


export default MovieList;