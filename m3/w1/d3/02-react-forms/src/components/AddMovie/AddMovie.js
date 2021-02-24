import React, { Component } from 'react'

class AddMovie extends Component {
  state = {
    title: '',
    director: '',
    hasOscars: false,
    IMDbRating: 5,
  }

  handleTitleInput = (event) => {
    const { value } = event.target;
    this.setState({ title: value })
  }  
  handleDirectorInput = (event) => {
    const { value } = event.target;
    this.setState({ director: value })
  }
  handleOscarsCheckbox = (event) => {
    const { checked } = event.target;
    this.setState({ hasOscars: checked })
  }
  handleRatingInput = (event) => {
    const { value } = event.target;
    this.setState({ IMDbRating: value })
  }

  handleInput = (event) => {
    let { value, name, type } = event.target;  //  value="asdfasdf"  name="director"


    if (type === 'checkbox') {
      value = event.target.checked;
    }

    this.setState( { [name]: value }  )
  }  

  render() {
    return (
      <div>
        <form>
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
            onChange={this.handleInput}/>
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
