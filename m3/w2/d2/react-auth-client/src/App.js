import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";

import { AuthProvider } from './context/auth-context';


import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AnonRoute from './components/AnonRoute/AnonRoute';




class App extends Component {
  render() {    return (
    <AuthProvider>
      
        <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          
          <PrivateRoute exact path="/private" component={Private} />
          
          </Switch>
      </div>
      
    </AuthProvider>
    );
  }
}

export default App;
