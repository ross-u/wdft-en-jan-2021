import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodayFoods from './components/TodayFoods';
import './App.css';

class App extends React.Component {
  state = {
    showForm: false,
    food: foods,
    totalFoods: [],
    totalCalories: 0,
    allCalories: 0,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addFood = (newFood) => {
    const updatedFood = [newFood, ...this.state.food];
    this.setState({ food: updatedFood, showForm: !this.state.showForm });
  };

  displayFood = (search) => {
    const matchingFood = [];
    this.state.food.forEach(function (element) {
      if (element.name.includes(search)) {
        matchingFood.push(element);
      }
    });
    this.setState({ food: matchingFood });
  };

  createTotal = (newFood) => {
    // Copy the current array of food in cart
    const newTotalFoods = [...this.state.totalFoods];

    // Try to find if the food was already added to `totalFoods`
    const foundFood = newTotalFoods.find((food) => food.name === newFood.name);

    if (foundFood) {
      // If the food already exists in `totalFoods`, update the existing food

      foundFood.quantity += Number(newFood.quantity); // 3

      console.log('foundFood.quantity', foundFood.quantity);
      console.log('newFood.calories', newFood.calories);

      foundFood.calories = foundFood.quantity * Number(newFood.calories);
    } else {
      newFood.quantity = Number(newFood.quantity);
      newFood.calories = newFood.quantity * Number(newFood.calories);
      newTotalFoods.push(newFood);
    }

    // Iterate over the upadated totalFoods array and sum calories
    let totalCalories = 0;
    newTotalFoods.forEach((food) => {
      totalCalories += food.calories;
    });

    this.setState({
      totalFoods: newTotalFoods,
      totalCalories: totalCalories,
    });
  };

  /*totalCalories = (arr) => {
    const newTotalCalories= this.state.totalCalories;

    for ( let i =0; i<arr.length; i++){
      newTotalCalories += arr[i].calories ;
    }
    this.setState({totalCalories: newTotalCalories})
  }*/

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Add new food</button>
        <Search search={this.displayFood} />

        <div>
          <h2>Today food's</h2>
          {this.state.totalFoods.map((element, i) => {
            return (
              <div key={i + element.name} className="box">
                <TodayFoods foodList={element} />
                {console.log(this.state.totalFoods)}
              </div>
            );
          })}
          <p>Total Calories: {this.state.totalCalories}</p>
        </div>

        {this.state.showForm && <Form addFood={this.addFood} />}

        <h1>FOODS</h1>

        {this.state.food.map((element, i) => {
          return (
            <div key={i + element.name} className="box">
              <FoodBox food={element} createTotal={this.createTotal} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
