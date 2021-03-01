# M3 Notes



<br>

### ES7 React / Redux snippets in VSCode

<br>

We can use the follwing snippets comming from the VS Code Extension *ES7 React/ Redux snippets* to create our components:

<br>



##### Create a `class` component

<br>

```jsx
rcc + Tab
```



<br>



##### Create a function component

<br>

```jsx
rfce + Tab
```



<br>

<hr>



### Create React App

<br>

##### Create the app structure

To create a new React app project we use `create-react-app` package. 

```bash
npx create-react-app name-of-the-project
```



<br>



##### Run the React app

To run the app in development, after the above is done and the structure is created, use command:

<br>

```bash
npm run start
```

<br>

or just shorter:

```bash	
npm start
```

<br>

<hr>

<br>

### Component syntax

<br>

##### `class` component

<br>

```jsx
import React from 'react';


class ComponentName extends React.Component {
  state = {}
  
  render() {
    return(
      <div className="example-1">
        <h1>class Component example</h1>
      </div>
    )
  }
}

export default ComponentName;
```




<br>

##### `function` component

<br>



```jsx
import React from 'react';


function ComponentName (props) {
  
    return(
      <div className="example-2">
        <h1>function Component example</h1>
      </div>
    )
}

export default ComponentName;
```



<br>

<hr>

<br>



### Passing the props

<br>



##### Component passing the props (parent)

From the parent component (component passing the props - `Example`)



<br>



##### `Example.js`

```jsx
import React from 'react';
import Card from './Card';

const reactLogo = 'https://imgur.com/9KWHBwb'


function Example () {
  
    return(
      <div className="Example">
        <Card 
          title="Hello React"
          picture={reactLogo}
        />
      </div>
    )
}

export default Example;
```



<br>



##### `function` Component receiving the props (child)



<br>



##### `Card.js`

```jsx	
import React from 'react';


function Card (props) {
// In function components `props` must be passed as an argument
  
    // `props` can be destructured:
    const { title, picture } = props;
  
    return(
      <div className="Card">
        
        {/* `props` can also be used without destructuring: */}
        
        <p>{props.title}</p>
        <img  src={props.picture} alt=""/>
      </div>
    )
}

export default Card;

```





<br>





##### `class` Component receiving the props (child)

<br>

Below is the same example of the previous component, but created as a `class` component.

<br>



##### `Card.js`

```jsx	
import React from 'react';


class Card extends React.Component {
// In class component props are accessible as `this.props`
  
	render() { 

    // `this.props` can be destructured:
    const { title, picture } = this.props;
  
    return(
      <div className="Card">
        
        {/* `this.props` can also be used without destructuring: */}
        
        <p>{this.props.title}</p>
        <img  src={this.props.picture} alt=""/>
      </div>
    )
	}
}

export default Card;

```





<br>




<br>




