# React | Props introduction



<br>



### Clone the starter code repo

```bash
git clone https://github.com/ross-u/02-react-props-intro.git

cd 02-react-props-intro

code .
```





<br>



### Install the dependencies

```bash
npm i
```


<br>



### Component can have internal `state` 

- `state` is an object  in react `class` components used to save the data/state related to the current component.

- `state` represents data that is private to every React `class` component itself.



<br>



##### `MyComponent.js`

```js
// src/MyComponent.js

import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Sarah',
  };

  render() {
    return (
      <div>
        <p> Hello {this.state.name}</p>
      </div>
    );
  }
}

export default MyComponent;


// `state` represents data that is private to every class component itself
// ( it stores data that only component can access and change)

```

<br>



[Using `state` - Image](https://i.imgur.com/v896ecx.jpg)

![Step 1 (using `state` ) - Image](https://i.imgur.com/v896ecx.jpg)



<br>



## Passing `props` (data)  to a component



React components have ability to receive data from outside. 

Meaning that we can pass / inject data to the components.

This is done by creating **custom named attributes** **with the value** (we are passing to) on each component element. This custom named attributes are called **`props`**.



<br>



##### `App.js`

```jsx
// src/App.js

import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*          city="Barcelona" is a prop ( data we pass to MyComponent )  */}
        <MyComponent city="Barcelona" />	
        <MyComponent />
      </div>
    );
  }
}

export default App;
```



<br>




##### `MyComponent.js`

```jsx
// src/MyComponent.js

import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Sarah',
  };

  render() {
    return (
      <div>
        <p> Hello {this.state.name}</p>
        <p> Welcome to {this.props.city}</p>  
      {/*  
        props represent atributtes set on the component
      	and are used to pass data to the component from the outside  
      */}
      </div>
    );
  }
}

export default MyComponent;
```

<br>



[Passing `props` to a component - Image](https://i.imgur.com/ZquC84W.jpg)

![Passing `props` to a component - Image](https://i.imgur.com/ZquC84W.jpg)<br>



<br>



## Summary of using `props` and `state`

<br>

[Summary of using `props` and `state` - Image](https://i.imgur.com/ju1Ulxq.jpg)
![Summary of using `props` and `state` - Image](https://i.imgur.com/ju1Ulxq.jpg)



<br>
