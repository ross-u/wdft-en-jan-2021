import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";

import { AuthProvider } from './context/auth-context';




class App extends Component {
  render() {    return (
    <AuthProvider>
      
        <div className="container">
        <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/private" component={Private} />
          </Switch>
      </div>
      
    </AuthProvider>
    );
  }
}

export default App;
