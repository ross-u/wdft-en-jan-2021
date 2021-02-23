import React from "react";

function User(props) {
  // props = { name: "" , image: "" }
  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h2 style={{ backgroundColor: "cornflowerblue" }}>
        Hello {props.name} !
      </h2>

      <img src={props.image} width="250" height="250" alt="" />
    </div>
  );
}

export default User;
