import React, { Component } from 'react'

import data from '../../data';
import MovieCard from './../MovieCard';

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
            <MovieCard
              oneMovie={movie} 
              clickToDelete={this.handleDelete}
              />
          )
        })}
      </div>
    )
  }
}


export default MovieList;