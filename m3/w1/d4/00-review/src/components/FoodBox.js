import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  addItem = (event) => {
    let { value } = event.target;
    this.setState({ quantity: value });
  };

  plusQuantity = () => {
    //const increment = this.state.quantity + 1;
    //this.setState({quantity: increment})
    const foodObj = {
      name: this.props.food.name,
      calories: this.props.food.calories,
      quantity: this.state.quantity,
    };

    this.props.createTotal(foodObj);
  };

  render() {
    return (
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.food.name}</strong> <br />
              <small>{this.props.food.calories}cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={this.state.quantity}
                onChange={this.addItem}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.plusQuantity}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default FoodBox;
