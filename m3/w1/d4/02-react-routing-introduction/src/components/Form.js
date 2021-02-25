import React from 'react'

function Form() {
  return (
    <form style={{border: "1px solid black"}}>
      <label htmlFor="">Contact email: </label>
      <input type="text" />
      <label htmlFor="">Your Name: </label>
      <input type="text"/>
    </form>
  )
}

export default Form
