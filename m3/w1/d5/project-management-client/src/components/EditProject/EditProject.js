// src/components/EditProject/EditProject.js

import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

class EditProject extends Component {
  state = {
    title: "",
    description: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const { id } = this.props.match.params; // made available by withRouter()

    axios
      .put(`http://localhost:5000/api/projects/${id}`, { title, description })
      .then(() => {
        this.props.getTheProject();
        // this.props.history.push('/projects');
        // after submitting the form, we could also redirect to '/projects'
      })
      .catch((err) => console.log(err));
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
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// By wrapping EditProject in withRouter,
// we inject react-router props (match, location, history)
// to the component. This will help us to access the project's id from the URL (this.props.match.params)
export default withRouter(EditProject);
