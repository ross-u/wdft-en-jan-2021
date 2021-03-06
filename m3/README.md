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



<hr>



<br>



### Passing props via `props.children`



<br>



##### `Example.js`

```jsx
import React from 'react';
import Wrapper from './Wrapper';

class Example extends React.Component {
  
 render() {
   return(
     <div>
       <Wrapper>
         <h1>Inside the wrapper</h1>
         <p>
           Content between the opening and the closing tags of a component
           can be accessed inside of the component via `props.children`,
           for example inside of Wrapper component this 2 tags, `h1` and `p` ,
           can be shown using `props.children`
         </p>
       </Wrapper>
     </div>
   )
  }
}

export default Example;
```





<br>



##### `Wrapper.js` - as a `class` component

```jsx
import React from 'react';

class Wrapper extends React.Component {
  
 render() {
   return(
     <section className="Wrapper">
       { this.props.children }
     </section>
   )
  }
}

export default Wrapper;
```



##### `Wrapper.js` - as a `function` component

```jsx
import React from 'react';

function Wrapper (props) {
   return(
     <section className="Wrapper">
       { props.children }
     </section>
   )
}

export default Wrapper;
```

<br>


<hr>




<br>


### Setting initial state of the component - using `componentDidMount()`



<br>

To set the state of the component with the data coming from the `props` or from an API to which a request has to be made we use `componentDidMount` higher order component.



<br>



##### Setting data from the `props` as the state of `class` component



<br>



##### `CountriesList.jsx`

```jsx
import React from "react";


class CountriesList extends React.Component {
  state = {
    countries: []
  }



  componentDidMount() {
    // Setting the state with the value passed through the props:
    this.setState({ countries: this.props.countriesData });
  }



  render (){
  
    return(
      <div className="CountriesList">
      
        {
	  this.state.countries.map((country) => {
            return <div>{country.name}<div>
          })
	}
	
      </div>
    )
  }
}

export default CountriesList;
```



<br>



##### Setting `state` with the data requested from a API server :



<br>



##### `CountriesList.jsx`

```jsx
import React from "react";
import axios from 'axios';


class CountriesList extends React.Component {
  state = {
    countries: []
  }




  componentDidMount() {
    // Setting the state with the data requested from an API:
    
    // We use axios for making requests to APIs
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
      
        const { data } =  response;
        this.setState({ countries: data });
	
      })
      .catch((err) => console.log(err))
    
  }



  render () {
    return(
      <div className="CountriesList">
      
        {
	  this.state.countries.map((country) => {
            return <div>{country.name}<div>
          })
	}
	
      </div>
    )
  }
}

export default CountriesList;
```




<br>

