// Function component

import React from 'react';


/* 
- function component is a lighter version of a component.
- It doesn't have the state object, but it can recieve data from the outside (props).
*/

function User(props) {
  return (
    <div className="user">
      <img src={ props.image }  alt="" />
      <h2>Hello { props.firstName}!</h2>
    </div>
  )
}


export default User;

