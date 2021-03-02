import React from 'react';


function withTheme(WrappedComponent, mode) {


  const darkMode = {
    backgroundColor: 'black',
    color: 'white'
  }

    const lightMode = {
    backgroundColor: 'white',
    color: 'black'
  }
  
  const isDarkMode = mode === 'dark';  // true     false

  // const style = isDarkMode ? darkMode : lightMode;

  let style;

  if (isDarkMode) {
    style = darkMode;
  }
  else {
    style = lightMode;
  }




  return function (props) {
    return <WrappedComponent {...props} style={style} />
  }
}


export default withTheme;