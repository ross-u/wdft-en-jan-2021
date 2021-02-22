import React from "react";
import "./App.css";

import Welcome from "./Welcome";
import User from './User';
import Profile from './Profile';
import ReactPlayer from 'react-player';

const userBob = {
  name: 'Bob',
  avatar: 'https://i.imgur.com/d1UsoDK.png'
}

const userJohn = {
  firstName: 'John',
  lastName: 'Carr',
  twitterUser: 'johncarr123'
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React - Props </h1>

        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk" 
          playing         
          controls
          volume={0.1}
          />



        <Profile user={userJohn} />
        <Welcome student="Arslane" />     {/*  class component  */}

        <User
          firstName="Sarah"
          image="https://i.imgur.com/6thUiuU.png" 
        />
        <User 
          firstName={userBob.name}
          image={userBob.avatar}
        />

      </div>
    );
  }
}

export default App;
