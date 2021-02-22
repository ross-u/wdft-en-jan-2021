// rfce + Tab

import React from 'react'

function Profile(props) {
  return (
    <div className="profile">
      <img src="" alt="" />
      <p>First Name: { props.user.firstName }</p>
      <p>Last Name:{ props.user.lastName } </p>
      <p>Twitter @:{ props.user.twitterUser }</p>
    </div>
  )
}

export default Profile
