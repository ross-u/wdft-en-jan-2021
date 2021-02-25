import React, { Component } from 'react'

class Dashboard extends Component {
  
  
  
  render() {

    console.log('Dashboard props', this.props);
    
    return (
      <div>
        <h1>Dashboard</h1>
        <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif"/>
      </div>
    )
  }
}

export default Dashboard