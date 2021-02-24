import React, { Component } from 'react'

import data from '../../data';
import ImprovedMovieCard from './../ImprovedMovieCard/ImprovedMovieCard';
import AddMovie from './../AddMovie/AddMovie';

class MovieList extends Component {
  state = {
    movies: data,
    showMovies: true,
    showForm: true
  }

  toggleMovies = () => {
    this.setState({ showMovies: ! this.state.showMovies  })
  }

  toggleForm = () => {
    this.setState({ showForm: ! this.state.showForm  })
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

  addNewMovie = (newMovie) => {
    const updateMovies = [newMovie, ...this.state.movies];
    
    this.setState({ movies: updateMovies });

  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>

        <button onClick={this.toggleForm}>
          {this.state.showForm ? "Close" : "Add Movie" }
        </button>

        {/* If this.state.showForm is `true` the `AddMovie` is shown */}
        { this.state.showForm && <AddMovie addMovie={this.addNewMovie} /> }

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