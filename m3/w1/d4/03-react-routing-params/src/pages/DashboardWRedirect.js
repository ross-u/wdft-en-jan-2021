//	components/DashboardWRedirect.js

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router';


class DashboardWRedirect extends Component {
  state = { loggedIn: true };		// Create a state for Login status
  
  

  render() {
    if (!this.state.loggedIn) {   
      return <Redirect to="/login" />
    } 
    
    return (
      <div>
        <h1>Dashboard With redirect</h1>
        <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif"/>
      </div>)
  }
}

export default DashboardWRedirect;