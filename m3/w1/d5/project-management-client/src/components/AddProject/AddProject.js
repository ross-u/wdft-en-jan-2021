import React, { Component } from "react";
import axios from "axios";

class AddProject extends Component {
  state = {
    title: "",
    description: "",
  };

  handleSubmit = (event) => {
    // prevent the page reload
    event.preventDefault();

    //  get the values from the state
    const { title, description } = this.state;

    // send the POST request to our server to create the project
    axios
      .post("http://localhost:5000/api/projects", { title, description })
      .then((response) => {
        this.props.getData(); // please leave this commented
        this.setState({ title: "", description: "" });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <button type="submit">Create a Project</button>
      </form>
    );
  }
}

export default AddProject;
