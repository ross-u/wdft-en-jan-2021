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
authRouter.post("/signup", async (req, res, next) => {

  try {
  // Check if the username and password are provided
  const { password, username } = req.body;

  if (username === "" || password === "") {
    throw new Error("Please enter username and password");
  }

  // Check if the username is taken
    const user = await User.findOne({ username });

    // > if username is taken, display error message
    if (user !== null) {
      throw new Error("There was an error, try again")
    }

    // > if username is available, hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    
    // > Create new user in DB
    const createdUser = await User.create({ username, password: hashedPassword })
    res.redirect('/');
    
  } catch (error) {
    // console.log('error.message', error.message)
    // next(error);

    res.render('auth-views/signup-form', { errorMessage: error.message });

    // Example on sending a generic error message for all other errors not thrown by us.
      // const uiErrors = [
      //   "Please enter username and password",
      //   "There was an error, try again"
      // ]
        
      // if (uiErrors.includes(error.message)) {
      //   res.render('auth-views/signup-form', { errorMessage: error.message })
      // } else { 
      //   res.render('auth-views/signup-form', { errorMessage: "Upps there was an error" })
      // }

  }


});



// Render login form
// GET    /auth/login
authRouter.get('/login', (req, res, next) => {
  res.render('auth-views/login-form');
});


// Handle login form data
// POST     /auth/login
authRouter.post('/login', async (req, res, next) => {

  try {
    const { username, password } = req.body;

    if (username === "" || password === "") {
      throw new Error("Please enter username and password");  
    }

    const user = await User.findOne({ username });
    
    if (!user) {
      throw new Error("Indicate username and password");
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    
    if (passwordCorrect) {
      req.session.currentUser = user;  // Triggers creation of the session and cookie
      res.redirect('/');
    }
    else {
      throw new Error("Indicate username and password");
    }
    
  } catch (error) {
    // next(err)

    res.render("auth-views/login-form", { errorMessage: error.message });
  }


  
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
