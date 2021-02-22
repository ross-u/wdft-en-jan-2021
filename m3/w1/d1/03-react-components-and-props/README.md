# React | Components & Props

## Learning Goals

- Know how the Component tree works
- How the DOM is rendered in the browser
- What props are in React components
- Syntax for passing props to a component





<br>



### Clone the starter code repo

```bash
git clone https://github.com/ross-u/03-react-components-and-props.git

cd 03-react-components-and-props

code .
```





<br>



### Install the dependencies

```bash
npm i
```





<br>



### (Teacher) Create a new branch

```bash
git checkout -b wd-ft-mmm-yyyy
```





<br>









## Introduction - Know how the Component tree works



**Components are the core building block of React apps.** 



A typical React app is composed of multiple components. 



React app structure can be represented as a **component tree** - having one root component (usually named **`<App />`** component ) and then multiple nested child & descendant components.





React lets us define components as **classes** or **functions**.



<br>



## Class Components

- Class components provide more features than function components. 

- They have **state**, **render method**, **life-cycle methods** (used to do something depending if the component has loaded, or is about to unload).



#### Create a class component `src/WelcomeComponent.js`



```bash
touch src/WelcomeComponent.js
```



##### `src/WelcomeComponent.js`

```jsx
import React, { Component } from 'react'

class WelcomeComponent extends Component {
  render() {
    return (
      <div className='welcome'>
        
        <h1> ..:: Welcome Component ::..</h1>
        
      </div>
    )
  }
}

export default WelcomeComponent;
```



<br>



##### `App.css`

```css
.welcome {
  margin: 10px;
  border: 4px solid rebeccapurple;
  padding: 20px 50px;
  text-align: center;
}
```





<br>



#### Update `App.js` and import the `WelcomeComponent`

##### `src/App.js`

```jsx
//	...

import WelcomeComponent from './WelcomeComponent';	//		<-- IMPORT THE COMPONENT

//	...

    return (
      <div className="App">
        
        <h1> Hello Ironhackers! </h1>
        
        <WelcomeComponent />				{/*  class component */} 
        
      </div>
    );

```





<br>



## Function Components

**Function components** are just JavaScript functions and they let you return some jsx to the DOM.



- Function components **can receive props** as well.

- Function components **don’t have state** object.

- Function components don't have lifecycle methods.



We will talk about the `state` in depth in the following lectures.



<br>





#### Create a function component and import it to  `App.js` .



```bash
touch src/User.js
```



<br>



##### `src/User.js`

```jsx
//		src/User.js

import React from "react";
// When creatring function component we need to import 'react' in the file

// React function component
function User() {
  return (
    <div className="user">
      <img src="" alt="" />
      <h2>Hello user!</h2>
    </div>
  );
}

export default User;
```



<br>



#####   `App.css`

```css
.user {
  margin: 10px;
  border: 3px solid yellowgreen;
  padding: 10px 25px;
  text-align: center;
}
```



<br>





##### `App.js` - Clean the code and import `User.js`

```js
//	...
//		...
import WelcomeComponent from './WelcomeComponent';
import User from './User';										//		<-- IMPORT THE COMPONENT

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Hello Ironhackers!</h1>
      
      
        <WelcomeComponent />				{/* class component */}

        <User />				        {/* function component */}

      </div>
    );
  }
}

//	...
```



<br>



## Props

**Syntax example :**

```jsx
<Component  propName1="String value" propName2={variableWithValue} />
```



```jsx
<WelcomeComponent  firstName="Uros" image={user.avatar} />
```



<br>



- In order to pass some data to a component, we need to set that value as the HTML attribute.

- This attributes on the components, are in React lingo called **props**.

- Props are the data or variables coming from outside of the component that is passed into the component. 



<br>



### Passing Data to a function component



<br>



#### Update `App.js` and pass data to its child component `User.js` via  `props`



##### `src/App.js`

```jsx
      <div className="App">
        <WelcomeComponent />

        <User firstName='Sarah' image={user.avatar}/>  
      </div>
```



<br>



### Using props data in a `function` component





##### `src/User.js` - Let's update it to pass the props

```jsx
import React from "react";

// To use props in function component, we have to add it as parameter
function User(props) {
  return (
    <div className="user">
      <img src={props.image} alt="" />
      <h2>Hello {props.firstName} !</h2>
    </div>
  );
}

export default User;

// `function` components use `props`  to access the props data. `props` has to be specified as the function parameter before we can use it.
```





In functional components `props` are received as a first parameter of the function.

We access the individual props by using a dot notation **`{props.firstName}`**.







<br>



### Passing props to class component





##### `src/App.js`

```jsx
      <div className="App">
        <WelcomeComponent cityName='Barcelona' />			{/*   <--  UPDATE    */}

        <User firstName='Sarah' image={user.avatar} />
      </div>
```





<br>



### Using props in a class component



If we are **inside a class component**, **we** have to **use** **`this` keyword**  when accessing props object - **`{ this.props.firstName }`**



##### `src/WelcomeComponent.js`

```jsx
import React, { Component } from 'react'

class WelcomeComponent extends Component {
  render() {
    return (
      <div className='welcome'>
        
        <h1>Welcome to Ironhack - {this.props.cityName}</h1>
        
      </div>
    )
  }
}

export default WelcomeComponent;

// `class` components use `this.props` to access the props data.
```





<br>



## When do you use props?





#### (1) Props are like function arguments

We use props to make components re-usable.

Props usually control how a component is displayed so passing in **different props** often results in the component **looking or behaving differently**.



##### `src/App.js`

```jsx
      <div className="App">
        <WelcomeComponent cityName='Barcelona' />

        <User firstName='Sarah' image={user.avatar} />
  
        <User firstName='Harper' />					{/* ADD */}
        <User firstName='Ana' />						{/* ADD */}
  
      </div>
```





<br>



![When do you use props](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_53610b5ab842828224a29e2fb18fe4dc.png)



<br>



### (2) Share data between components



By definition, props let you **share data** between a parent component and a child component. 

This way we can do the so called "**prop drilling**" if needed.

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ca57ec2aeceab7798d6c5d0013d58061.png)





<br>



### (3) Using Components from `npm`

There are many pre-made components on npm.  Let’s use one as the example!



```bash
npm i --save react-player
```





#### Import and use the component in `App.js`

##### `App.js`

```jsx
//	...
//		...
import ReactPlayer from "react-player";  // import the npm package/Component


//	...

	return (
      <div className="App">
        <WelcomeComponent cityName="Barcelona" />
        <User firstName='Sarah' image={user.avatar}/>
        <User firstName='Harper' />
        <User firstName='Anna' />
      
      

        {/* ADD THE IMPORTED COMPONENT */}
      
        {/* our Vimeo video */}
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      
      	<ReactPlayer url="https://vimeo.com/channels/top/76979871" />
      
      	{/* our YouTube video */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
      
      </div>
    );
```



<br>



## Important

#### In the above example we are reusing the component `<ReactPlayer>` multiple times by passing it different props in each example.



<br>



### [React.Component docs](<https://reactjs.org/docs/react-component.html>)
