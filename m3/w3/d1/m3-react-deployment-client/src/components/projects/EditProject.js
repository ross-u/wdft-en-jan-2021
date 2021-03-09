// components/projects/EditProject.js

import React, { Component } from 'react';
import project from './../../lib/project-services';


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
  
    project.updateProject(_id,{ title, description })
    .then( () => {
      this.props.history.push('/projects');    
    })
     .catch( (err) => console.log(err) )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })

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