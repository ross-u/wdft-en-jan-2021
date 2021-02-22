# Exercise - React Basics

<br>



### Install

To install the packages run:

<br>

```bash
npm install
```



This will install `babel`, `webpack`, `react` and `react-dom` packages listed in the `package.json`.



<br>



### Run the app development server


To see the React app that you are developing you have to run the development server that will convert the JSX code into JS and serve it in the browser. Run the command:



<br>

```bash	
npm run webpack
```



<br>

After running the command the app will be available in browser on domain [localhost:3000](http://localhost:3000), go ahead and open it.





<br>



### Create a component



In the `src/Profile.js` file create a new component that will show the following content:



```jsx
<div>
  <h1>Profile Component</h1>
  <h4>Name: YOUR NAME</h4>
  <img src="Image of your choice" alt="" />

</div>
```



As a syntax example feel free to refer to the code in the `List` component

<br>



### Import and use the new `Profile` component



In the `App.js` component import the newly created `Profile` component and display it below the `<List />` component.





<br>



### Bonus

Create a new css file for the component `Profile` and add a bit of css for your new `Profile` component. Make sure to import it in the `Profile.js` component.



<br>

#### 