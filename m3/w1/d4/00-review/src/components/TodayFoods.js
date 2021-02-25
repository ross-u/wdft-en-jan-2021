import React, { Component } from 'react';

class TodayFoods extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.foodList.quantity} {this.props.foodList.name} -{' '}
          {this.props.foodList.calories} calories.
        </p>
      </div>
    );
  }
}

export default TodayFoods;
