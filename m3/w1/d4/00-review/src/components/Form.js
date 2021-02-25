import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: ' ',
    calories: 0,
    image: ' ',
  };

  handleInput = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newFood = this.state;
    this.props.addFood(newFood);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          <label>Calories</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />

          <button type="submit">Create food!</button>
        </form>
      </div>
    );
  }
}

export default Form;
