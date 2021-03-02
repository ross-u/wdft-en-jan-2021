import React from 'react';


function Higher(WrappedComponent) {

  const style = {
    backgroundColor: 'red',
    fontSize: '28px'
  }

  const getData = () => {
    return 'Elon Musk has taken a swipe at Rocket Labs new rocket, saying it looks familiar.'
  }
  

  return function (props) {
    return (
      <WrappedComponent {...props} style={style} getData={getData} />
    )
  }
}



export default Higher;