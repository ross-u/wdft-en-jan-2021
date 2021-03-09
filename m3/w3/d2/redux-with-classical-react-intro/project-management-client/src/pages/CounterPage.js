import React from "react";

function CounterPage(props) {
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => console.log("clicked increment")}
        >
          Increment
        </button>
        <span>{0}</span>
        <button
          aria-label="Decrement value"
          onClick={() => console.log("clicked decrement")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterPage;
