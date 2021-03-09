// components/projects/EditProject.js

import React, { Component } from 'react';
import axios from 'axios';

class EditProject extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theProject.title, 
        description: this.props.theProject.description
    }
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const { _id } = this.props.theProject;
  
    axios.put(
      `http://localhost:5000/api/projects/${_id}`,
      { title, description }
    )
    .then( () => {
      this.props.getTheProject();						//  <---  hmmm
      this.props.history.push('/projects');    
      // after submitting the form, redirect to '/projects'
    })
     .catch( (err) => console.log(err) )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    //                 ▲   Assign value to property using "object bracket notataion"
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
  }

  render(){
    return (
      <div>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Title:</label>
          <input type="text"
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange}/>
          
          <label>Description:</label>
          <textarea name="description" 
            value={this.state.description} 
            onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProject;