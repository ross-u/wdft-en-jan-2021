import React, { Component } from 'react';
import Form from './../components/Form';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif" />
        <Form />
      </div>
    )
  }
}

export default Dashboard