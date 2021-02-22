// class component   rcc + Tab

import React, { Component } from "react";

import Image from "./Image";

class Profile extends Component {
  state = {
    images: [
      "https://i.imgur.com/T4EpAg6.png",
      "https://i.imgur.com/6thUiuU.png",
      "https://i.imgur.com/d1UsoDK.png",
    ],
  };

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <h2>First Name: {this.props.name}</h2>
        <h2>Username: {this.props.username}</h2>

        <Image imageUrl={this.state.images[0]} borderColor="red" />
        <Image imageUrl={this.state.images[1]} borderColor="blue" />
        <Image imageUrl={this.state.images[2]} borderColor="green" />
      </div>
    );
  }
}

export default Profile;
