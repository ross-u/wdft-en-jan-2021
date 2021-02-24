import React from 'react'

function ContactCard(props) {
  const { id, name, pictureUrl, popularity } = props.contact;

  return (
  <tr key={id}>
    <td> <img style={ { height: "50px" } } src={pictureUrl}/></td>
    <td>{ name }</td>
    <td>{ popularity }</td>  
    <td><button onClick={() => { this.deleteContact(id) } }>Delete</button></td>
  </tr>
  )
}

export default ContactCard
