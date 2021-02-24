import React, { Component } from "react";
import Task from "./Task";
import Summary from "./Summary";
import data from "./../data.js";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
    };

    this.deleteTaskById = this.deleteTaskById.bind(this);
    /*** 
      We bind the method because it will be invoked by another component (<Task> - object)
      Without binding, `this` will not be referring to the `<ToDoList>` component.
      We `bind` `this` as we need it to point to <ToDoList> component (object) that holds the `state`.
      We can as well create the method as an arrow function to solve this issue of losing context.
    ***/
  }

  /***  
    1. State shouldn't be modified directly, therefore we use the `filter` method 
    which creates a new array
  ***/
  deleteTaskById(id) {
    let tasksCompleted = this.state.tasksCompleted;

    const updatedTasks = this.state.tasks.filter((taskObj, index) => {
      if (taskObj.id === id) {
        return false;
      }
      return true;
    });
    this.setState({ tasks: updatedTasks, tasksCompleted });
  }

  render() {
    return (
      <div>
        <Summary />
        <div className="todo-container">
          {this.state.tasks.map((task) => {
            return (
              <Task
                key={task.id}
                deleteTask={this.deleteTaskById}
                name={task.name}
                description={task.description}
                taskId={task.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDoList;
