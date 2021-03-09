// components/projects/AddProject.js

import React, { Component } from "react";
import axios from "axios";

import { connect } from 'react-redux';
import { addProject } from './../../redux/slices/projects.slice';



class AddProject extends Component {
  state = { title: "", description: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;

    axios
    .post(`http://localhost:5000/api/projects`, { title, description })
    .then(() => {
      this.setState({ title: "", description: "" });
      
      const newProject = { title, description }
      this.props.addProjectToRedux(newProject);
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// Specify the data you want to read from the redux state
const mapStateToProps = (reduxState) => ({})

// Specify the actions that you want to dispatch to redux
const mapDispatchToProps = (dispatch) => ({
  addProjectToRedux: (payload) => dispatch(addProject(payload))  // this.props.addProjectToRedux()
})


export default connect(mapStateToProps, mapDispatchToProps)(AddProject); 
