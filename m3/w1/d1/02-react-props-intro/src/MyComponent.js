import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Sarah'
  }

  render() {
    return (
      <div className="MyComponent">
        <p> Hello {this.state.name} </p>
        <p> Welcome to {this.props.city}  {this.props.country}</p>
        
        {/* 
          `props` represent the data passed to the component.
          we can pass any JS data via props
        */}

      </div>
    )
  }
}


/* 
 - `state` is an object in React `class` components

 - `state` represents data private to the `class` component itself
 (it stores the data that only component can access and change)
*/

export default MyComponent;