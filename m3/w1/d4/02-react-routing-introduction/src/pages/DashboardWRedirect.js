import React, { Component } from 'react';
import Form from '../components/Form';

import { Redirect } from 'react-router';

class Dashboard extends Component {
  state = {
    isLoggedIn: false
  }

  render() {

    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />
    }

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