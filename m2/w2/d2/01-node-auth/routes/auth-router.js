const express = require("express");
const authRouter = express.Router();
const User = require('./../models/user-model');
const zxcvbn = require('zxcvbn');

const bcrypt = require("bcrypt");
const saltRounds = 10;

// Render signup form
// GET     /auth/signup
authRouter.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form");
});

// Handle signup form data
// POST     /auth/signup
authRouter.post("/signup", (req, res, next) => {
  console.log('req.body', req.body)
  // Check if the username and password are provided
  const { password, username } = req.body;

  if (username === "" || password === "") {
    // > if username or password are not provided
    res.render(
      "auth-views/signup-form",
      { errorMessage: "Please enter username and password" }
    );

    return;   
  }

  // const passwordCheck = zxcvbn(password);
  // if (passwordCheck.score < 3) {
  //   console.log('passwordCheck.feedback', passwordCheck.feedback)

  //   res.render(
  //     "auth-views/signup-form",
  //     {
  //       errorMessage: passwordCheck.feedback.warning,
  //       suggestions: passwordCheck.feedback.suggestions
  //     }
  //   )

  //   return;
  // }

  // Check if the username is taken
  User.findOne({ username })
    .then((user) => {

      // > if username is taken, display error message
      if (user !== null) {
        res.render('auth-views/signup-form', { errorMessage: "There was an error, try again" })
        
        return;
      }

      // > if username is available, hash the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      
      // > Create new user in DB
      // User.create( { username: username, password: hashedPassword } )
      User.create({ username, password: hashedPassword })
        .then((createdUser) => {
          res.redirect('/');
        })
        .catch((err) => {
          console.log(err)
          res.render('auth-views/signup-form', { errorMessage: 'There was an error, please try again!'})
        });
      


    
      // > Redirect the user


    })
    .catch( (err) => next(err) );



});



// Render login form
// GET    /auth/login
authRouter.get('/login', (req, res, next) => {
  res.render('auth-views/login-form');
});


// Handle login form data
// POST     /auth/login
authRouter.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.render(
      "auth-views/login-form",
      { errorMessage: "Please enter username and password" }
    );

    return;   
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.render(
          "auth-views/login-form",
          { errorMessage: "Indicate username and password" }
        );

        return;   
      }

      const passwordCorrect = bcrypt.compareSync(password, user.password);
      

      if (passwordCorrect) {
        req.session.currentUser = user;  // Triggers creation of the session and cookie
        res.redirect('/');
      }
      else {

        res.render(
          "auth-views/login-form",
          { errorMessage: "Indicate username and password" }
        );
      }
    
      


    })
    .catch( (err) => next(err));
  
})


// Destroys the existing session
// GET     /auth/logout
authRouter.get('/logout', (req, res, next) => {
  req.session.destroy(function (err) {
    if (err) {
      next(err)
    }
    else {
      res.redirect('/auth/login')
    }
  })
})




module.exports = authRouter;
