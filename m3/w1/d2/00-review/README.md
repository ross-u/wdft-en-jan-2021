![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React Components & Bulma

## Introduction

Do you know [Bulma](https://bulma.io), a very nice alternative to Bootstrap as a CSS framework? We are going to create a simple website with Bulma and React!

## Requirements

- Fork this repo
- Clone this repo

You can find the starter code in the starter code folder of this GitHub repo.

## Submission

- Upon completion, run the following commands

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Setup

First let's get set up:

1. After forking and cloning, run `npm install`.
2. Install the `react` and `react-dom` packages.

```bash
$ npm install react react-dom
```

### Bulma installation

To get Bulma, install the npm package:

```
$ npm install bulma
```

You will have to import Bulma CSS in every component that will use it. You can do it with the following line:

```javascript
import 'bulma/css/bulma.css';
```

## Instructions

### Iteration 1 | `Navbar` component

To kick off, create a new folder `src/navbar` and inside create two files:

- `src/navbar/Navbar.js` and
- `src/navbar/Navbar.css`.

This component should display a link to "Home", "Login" and "Signup" like in the following example:

![](https://i.imgur.com/dMaNMeM.png)

To help you, you can use the code from the [Bulma Transparent Navbar](https://bulma.io/documentation/components/navbar/#transparent-navbar).

In the end, you will need to import this component into the `src/App.js` and use it properly in the return statement, instead of the `h1` tag which is there for now.

### Iteration 2 | `FormField` component

Following the previous example, create a new folder `src/formfield` and inside create two files:

- `src/formfield/FormField.js` and
- `src/formfield/FormField.css`.

Now it's time to create a new component `FormField` we will use multiple times in the future.

```jsx
// JSX version
<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
```

```html
<!-- What is rendered in the DOM -->
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>
```

What is visually rendered

![](https://i.imgur.com/8sKyKxI.png)

As we can see, there are similarities between each of the `FormFields` so it would be the best to pass props that will fill in different `label` tags, as well as `type` and `placeholder` attributes. To give you a hint, check the following code snippet:

```jsx
const FormField = props => {
  return (
    <div className='field'>
      <label className='label'>{props.label}</label>
      // some other code goes here
    </div>
  );
};
```

### Iteration 3 | `CoolButton` Component

Follow the folder/file pattern as we instructed you in the first two iterations.

The goal is to create a component called `CoolButton` that creates a `<button>` with the nice Bulma classes.

You will find the Bulma buttons documentation here: https://bulma.io/documentation/elements/button/

```jsx
// JSX version
<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton>
```

```html
<!-- What is rendered in the DOM -->
<button class="button is-rounded my-class is-danger is-small">Button 1</button>
<button class="button is-small is-success">Button 2</button>
```

What is visually rendered

![](https://i.imgur.com/qrfQG18.png)

Because there are many cases to code, focus on the following classes: `is-primary`, `is-success`, `is-danger`.

If you need any help, you can have a look how to take the content between an opening tag and a closing tag: [Children in JSX](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

Change your `Navbar` component so it uses the `CoolButton` component for the "Login" and "Signup" buttons.

#### Bonus

If you want, you can do all the cases by using the following object:

```javascript
{
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
}
```

### Iteration 4 | A Signup Page

Create a `Signup` component that contains:

- A `Navbar`
- A form with
  - A `FormField` for name
  - An `FormField` for email
  - A `FormField` for password
  - A `CoolButton` for submitting the form

### Iteration 5 | Bonus

Before continuing, ask for feedback from one of your teachers, they will give you a feedback about what you've done.

Then, you can:

- Refactor your code
- Create a `Container` component (for the class "container")
- Create a `Message` component (see the following explanation)

#### Message Component

Now, we are going to create `Message` component. You can find the documentation on Bulma's website: https://bulma.io/documentation/components/message/

```jsx
// JSX version
<Message isInfo title='Hello World'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
```

What is visually rendered

![](https://i.imgur.com/qmD2Nkb.png)

Happy coding! :heart:
