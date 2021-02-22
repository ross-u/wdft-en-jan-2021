import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

const user = {
  name: "Dimitrij",
  avatar: "https://i.imgur.com/iFe8f8v.jpg",
};

const bootcamp = "Ironhack Barcelona";

function nameUpper(name) {
  return name.toUpperCase();
}

const elementH2 = <h2>Hi, there user!</h2>;

const blueDiv = (
  //<div style="border: "1px solid blue;">
  <div style={{ border: "1px solid blue" }}>
    <h3>My tech stack:</h3>
    <ul>
      <li>React</li>
      <li>Redux</li>
    </ul>
  </div>
);

function displayAvatar(image) {
  if (image) {
    return <img src={image} />;
  } else {
    return <img src="https://i.imgur.com/h1iCSwY.png" />;
  }
}

class App extends React.Component {
  sayHello = () => {
    return "Hellooo there";
  };

  render() {
    return (
      <div className="App">
        <h1> {user.name} !</h1>
        <h1> Hello {nameUpper(user.name)} !</h1>

        {elementH2}

        {blueDiv}

        <h3> Welcome to {bootcamp} </h3>

        {displayAvatar()}

        <p> 2 + 2 = 2 + 2</p>

        <p> 2 + 2 = {2 + 2} </p>
      </div>
    );
  }
}

export default App;
