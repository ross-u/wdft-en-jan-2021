import React, { Component } from 'react'

import data from '../../data';
import ImprovedMovieCard from './../ImprovedMovieCard/ImprovedMovieCard';
import AddMovie from './../AddMovie/AddMovie';

class MovieList extends Component {
  state = {
    movies: data,
    showMovies: false
  }

  toggleMovies = () => {
    this.setState({ showMovies: ! this.state.showMovies  })
  }


  handleDelete = (movieId) => {

    const filteredMovies = this.state.movies.filter((movie) => {
      if (movie._id !== movieId) {
        return true;
      }
      else if (movie._id === movieId) {
        return false;
      }
    });
    this.setState({ movies: filteredMovies });

  }


  render() {
    return (
      <div>
        <h1>Movie List</h1>

        <AddMovie />

        <button onClick={this.toggleMovies}>
          {this.state.showMovies ? "Hide" : "Show" } Movies
        </button>

        {
          this.state.showMovies
            ? this.state.movies.map((movie) => {
                return (
                  <ImprovedMovieCard
                    oneMovie={movie} 
                    clickToDelete={this.handleDelete}
                  />
                )
            })
            : null
        }

        {}
      </div>
    )
  }
}


export default MovieList;