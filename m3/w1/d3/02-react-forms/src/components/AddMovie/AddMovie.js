import React, { Component } from 'react'

class AddMovie extends Component {
  state = {
    title: '',
    director: '',
    hasOscars: false,
    IMDbRating: 5,
  }

  handleInput = (event) => {
    let { value, name, type } = event.target;  //  value="asdfasdf"  name="director"

    if (type === 'checkbox') {
      value = event.target.checked;
    }

    this.setState( { [name]: value }  )
  }

  handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Take the value from the `state` object, send it to MovieList
    const newMovie = this.state;
    this.props.addMovie(newMovie);

    // Clear the form at the end, by resetting the `state`
    this.setState({title: '', director: '', hasOscars: false, IMDbRating: 5})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add a movie:</h2>
          <br />
          
          <label>Title:</label>
          <input 
            type="text" 
            name="title"
            value={this.state.title} 
            onChange={this.handleInput} 
          />
          
          <br />
          
          <label>Director:</label>
          <input 
            type="text" 
            name="director" 
            value={this.state.director} 
            onChange={this.handleInput}/>
          <br />
          
          <label>Oscar Awarded:</label>
          <input 
            type="checkbox" 
            name="hasOscars" 
            checked={this.state.hasOscars} 
            onChange={this.handleInput}
            />
          <br />
          
          <label>IMDb Rating:</label>
          <input 
            type="number" 
            name="IMDbRating" 
            value={this.state.IMDbRating} 
            onChange={this.handleInput}/>

          <br/>
          <button type="submit">Create</button>
        </form>

        <br />
        
      </div>
    )
  }
}

export default AddMovie;
